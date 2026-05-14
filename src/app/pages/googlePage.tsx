import { useState } from "react";

// ── CONFIG ─────────────────────────────────────────────────────────────────
const OAUTH_CLIENT_ID = "545771333543-t24aerslavut57lkv1n5dq4mofgfbeki.apps.googleusercontent.com";
const OAUTH_REDIRECT_URI = "https://loukab.app.n8n.cloud/webhook/e53f315a-ed63-43bf-9b07-7e5cfde591d8";
// TODO: Replace these placeholders with real n8n webhook URLs
const WEBHOOK_FORM   = "https://PLACEHOLDER/webhook/client-registration";
const WEBHOOK_CONFIG = "https://PLACEHOLDER/webhook/client-config";
const WEBHOOK_VERIFY = "https://PLACEHOLDER/webhook/verify-calendar";

// ── TYPES ──────────────────────────────────────────────────────────────────
type Step = 1 | 2 | 3 | 4;
type ServiceKey = "calendar" | "gmail" | "business";

interface ClientForm {
  companyName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  businessType: string;
  pack: string;
  appPassword: string;
}

function isGmailAccount(email: string) {
  return email.toLowerCase().endsWith("@gmail.com") || email.toLowerCase().endsWith("@googlemail.com");
}

interface ClientConfig {
  displayName: string;
  sendTime: string;
  customMessage: string;
  backupPhone: string;
}

// ── DATA ───────────────────────────────────────────────────────────────────
const BUSINESS_TYPES = ["Salon", "Artisan", "Restaurant", "Autre"];
const PACKS = ["Rappel RDV", "Relance devis", "Pack Business", "Autre"];

const PACK_SERVICES: Record<string, ServiceKey[]> = {
  "Rappel RDV":    ["calendar"],
  "Relance devis": ["gmail"],
  "Pack Business": ["calendar", "gmail", "business"],
  "Autre":         ["gmail"],
};

const SERVICE_INFO: Record<ServiceKey, { label: string; desc: string; scope: string }> = {
  calendar: {
    label: "Google Calendar",
    desc: "Détection de vos rendez-vous pour les rappels automatiques",
    scope: "openid email profile https://www.googleapis.com/auth/calendar.readonly",
  },
  gmail: {
    label: "Gmail",
    desc: "Envoi automatique d'emails de rappel et de relance",
    scope: "openid email profile https://www.googleapis.com/auth/gmail.modify",
  },
  business: {
    label: "Google Business",
    desc: "Gestion et collecte de vos avis Google",
    scope: "openid email profile https://www.googleapis.com/auth/business.manage",
  },
};

// ── DESIGN TOKENS ──────────────────────────────────────────────────────────
const C = {
  blue:   "#1E4E8C",
  gold:   "#D4A64A",
  green:  "#2F7A5F",
  bg:     "#F7F9FC",
  text:   "#172033",
  muted:  "#5E6B82",
  border: "#E2E8F0",
  white:  "#FFFFFF",
};

// ── SHARED STYLES ──────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px", borderRadius: 10, fontSize: 14,
  border: `1.5px solid ${C.border}`, color: C.text, background: C.white,
  outline: "none", boxSizing: "border-box", fontFamily: "inherit",
};

const btnPrimary: React.CSSProperties = {
  width: "100%", padding: "12px 20px", borderRadius: 12, border: "none",
  background: C.blue, color: C.white, fontSize: 15, fontWeight: 600,
  cursor: "pointer", marginTop: 8, fontFamily: "inherit",
};

const btnOutline: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 8,
  padding: "8px 16px", borderRadius: 8, border: `1.5px solid ${C.blue}`,
  background: C.white, color: C.blue, fontSize: 13, fontWeight: 600,
  cursor: "pointer", flexShrink: 0, fontFamily: "inherit",
};

// ── STEP INDICATOR ─────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: Step }) {
  const labels = ["Inscription", "Connexion", "Configuration", "Confirmation"];
  return (
    <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 32 }}>
      {labels.map((label, i) => {
        const n = (i + 1) as Step;
        const done   = n < current;
        const active = n === current;
        return (
          <div key={n} style={{ display: "flex", alignItems: "flex-start", flex: i < labels.length - 1 ? 1 : 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                background: done ? C.green : active ? C.blue : C.border,
                color: done || active ? C.white : C.muted,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700,
              }}>
                {done ? "✓" : n}
              </div>
              <span style={{
                fontSize: 11, color: active ? C.blue : done ? C.green : C.muted,
                fontWeight: active || done ? 600 : 400, whiteSpace: "nowrap",
              }}>
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div style={{ flex: 1, height: 2, background: done ? C.green : C.border, marginTop: 15, marginInline: 6 }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── CARD ───────────────────────────────────────────────────────────────────
function Card({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div style={{
      background: C.white, borderRadius: 18, padding: "36px 40px",
      boxShadow: "0 4px 32px rgba(30,78,140,0.10)", width: "100%", maxWidth: 540,
    }}>
      <h2 style={{ fontSize: 20, color: C.text, margin: "0 0 4px", fontWeight: 700 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 13, color: C.muted, margin: "0 0 24px", lineHeight: 1.5 }}>{subtitle}</p>}
      {children}
    </div>
  );
}

// ── FIELD ──────────────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: C.text, marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

// ── STEP 1: REGISTRATION ───────────────────────────────────────────────────
function Step1Form({
  form, onChange, onSubmit, loading,
}: {
  form: ClientForm;
  onChange: (f: ClientForm) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}) {
  function field(key: keyof ClientForm) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      onChange({ ...form, [key]: e.target.value });
  }

  return (
    <Card title="Bienvenue chez Rebbelia" subtitle="Renseignez vos informations pour démarrer votre automatisation.">
      <form onSubmit={onSubmit}>
        <Field label="Nom de l'entreprise">
          <input required style={inputStyle} value={form.companyName} onChange={field("companyName")} placeholder="Mon Entreprise SAS" />
        </Field>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Field label="Prénom">
            <input required style={inputStyle} value={form.firstName} onChange={field("firstName")} placeholder="Jean" />
          </Field>
          <Field label="Nom">
            <input required style={inputStyle} value={form.lastName} onChange={field("lastName")} placeholder="Martin" />
          </Field>
        </div>

        <Field label="Téléphone">
          <input required type="tel" style={inputStyle} value={form.phone} onChange={field("phone")} placeholder="06 00 00 00 00" />
        </Field>

        <Field label="Email professionnel">
          <input required type="email" style={inputStyle} value={form.email} onChange={field("email")} placeholder="contact@monentreprise.fr" />
        </Field>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Field label="Type de business">
            <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.businessType} onChange={field("businessType")}>
              <option value="">Sélectionner</option>
              {BUSINESS_TYPES.map(t => <option key={t} value={t.toLowerCase()}>{t}</option>)}
            </select>
          </Field>
          <Field label="Pack choisi">
            <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.pack} onChange={field("pack")}>
              <option value="">Sélectionner</option>
              {PACKS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </Field>
        </div>

        <button type="submit" disabled={loading} style={{ ...btnPrimary, opacity: loading ? 0.7 : 1 }}>
          {loading ? "Chargement..." : "Continuer →"}
        </button>
      </form>
    </Card>
  );
}

// ── STEP 2: CONNECT SERVICES ───────────────────────────────────────────────
function Step2Connect({
  pack, requiredServices, connectedServices, onConnect, onNext,
}: {
  pack: string;
  requiredServices: ServiceKey[];
  connectedServices: Set<ServiceKey>;
  onConnect: (s: ServiceKey) => void;
  onNext: () => void;
}) {
  const allDone = requiredServices.every(s => connectedServices.has(s));

  return (
    <Card title="Connectez vos services Google" subtitle={`Pack ${pack} — autorisez l'accès aux services requis ci-dessous.`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        {requiredServices.map(service => {
          const info = SERVICE_INFO[service];
          const connected = connectedServices.has(service);
          return (
            <div key={service} style={{
              border: `1.5px solid ${connected ? C.green : C.border}`,
              borderRadius: 12, padding: "14px 16px",
              background: connected ? "#F0FDF4" : C.white,
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{info.label}</div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{info.desc}</div>
              </div>
              {connected ? (
                <span style={{ color: C.green, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓ Connecté</span>
              ) : (
                <button onClick={() => onConnect(service)} style={btnOutline}>
                  <GoogleIcon />
                  Connecter
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={onNext} disabled={!allDone} style={{ ...btnPrimary, opacity: allDone ? 1 : 0.35 }}>
        Continuer →
      </button>
    </Card>
  );
}

// ── STEP 3: CONFIGURATION ──────────────────────────────────────────────────
function Step3Config({
  config, onChange, onSubmit, loading,
}: {
  config: ClientConfig;
  onChange: (c: ClientConfig) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}) {
  function field(key: keyof ClientConfig) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange({ ...config, [key]: e.target.value });
  }

  return (
    <Card title="Personnalisez votre automatisation" subtitle="Ces informations seront utilisées dans vos messages automatiques.">
      <form onSubmit={onSubmit}>
        <Field label="Nom affiché dans les emails">
          <input required style={inputStyle} value={config.displayName} onChange={field("displayName")} placeholder="Cabinet Martin" />
        </Field>

        <Field label="Heure d'envoi des rappels">
          <input required type="time" style={inputStyle} value={config.sendTime} onChange={field("sendTime")} />
        </Field>

        <Field label="Message personnalisé (optionnel — GPT génère si vide)">
          <textarea
            style={{ ...inputStyle, resize: "vertical", minHeight: 80 } as React.CSSProperties}
            value={config.customMessage}
            onChange={field("customMessage")}
            placeholder="Bonjour, nous vous rappelons votre rendez-vous prévu le..."
          />
        </Field>

        <Field label="Téléphone de secours">
          <input required type="tel" style={inputStyle} value={config.backupPhone} onChange={field("backupPhone")} placeholder="06 00 00 00 00" />
        </Field>

        <button type="submit" disabled={loading} style={{ ...btnPrimary, opacity: loading ? 0.7 : 1 }}>
          {loading ? "Activation en cours..." : "Activer mon automatisation →"}
        </button>
      </form>
    </Card>
  );
}

// ── STEP 2 (non-Gmail): APP PASSWORD ──────────────────────────────────────
function Step2AppPassword({
  appPassword, onChange, onSubmit, loading,
}: {
  appPassword: string;
  onChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}) {
  return (
    <Card
      title="Connexion à votre boîte mail"
      subtitle="Votre adresse n'est pas Gmail. Générez un mot de passe d'application pour permettre à Rebbelia d'envoyer des emails en votre nom."
    >
      <form onSubmit={onSubmit}>
        <Field label="Mot de passe d'application">
          <input
            required
            type="password"
            style={inputStyle}
            value={appPassword}
            onChange={e => onChange(e.target.value)}
            placeholder="••••••••••••••••"
            autoComplete="new-password"
          />
          <a
            href="https://support.microsoft.com/fr-fr/account-billing/cr%C3%A9er-et-utiliser-des-mots-de-passe-d-application-%C3%A0-partir-de-la-page-de-v%C3%A9rification-de-s%C3%A9curit%C3%A9-suppl%C3%A9mentaire-d5d2ac62-0641-a40e-ac52-7c5b975f5d30"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", marginTop: 8, fontSize: 12, color: C.blue, textDecoration: "underline" }}
          >
            Comment obtenir mon mot de passe d'application ?
          </a>
        </Field>

        <button type="submit" disabled={loading} style={{ ...btnPrimary, opacity: loading ? 0.7 : 1 }}>
          {loading ? "Enregistrement..." : "Continuer →"}
        </button>
      </form>
    </Card>
  );
}

// ── STEP 4: CONFIRMATION ───────────────────────────────────────────────────
function Step4Confirmation({
  companyName, nextAppointment,
}: {
  companyName: string;
  nextAppointment: string | null;
}) {
  return (
    <Card title="✅ Votre automatisation est active !" subtitle={`Félicitations ${companyName} — Rebbelia s'occupe désormais de vos rappels automatiquement.`}>
      <div style={{
        background: "#F0FDF4", border: `1.5px solid ${C.green}`,
        borderRadius: 12, padding: "20px 24px", marginBottom: 20, textAlign: "center",
      }}>
        {nextAppointment ? (
          <>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 6 }}>Prochain rappel prévu le</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: C.green }}>{nextAppointment}</div>
          </>
        ) : (
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
            Aucun rendez-vous détecté pour l'instant.<br />
            Votre automatisation surveille votre agenda en temps réel.
          </div>
        )}
      </div>

      <div style={{ fontSize: 13, color: C.muted, textAlign: "center", lineHeight: 1.7 }}>
        Un email de confirmation vous sera envoyé dans les prochaines minutes.<br />
        Pour toute question, contactez votre <strong style={{ color: C.blue }}>conseiller Rebbelia</strong>.
      </div>
    </Card>
  );
}

// ── GOOGLE ICON ────────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908C16.658 14.013 17.64 11.705 17.64 9.2z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
      <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
    </svg>
  );
}

// ── MAIN ───────────────────────────────────────────────────────────────────
export default function GoogleOAuth() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<ClientForm>({
    companyName: "", firstName: "", lastName: "",
    phone: "", email: "", businessType: "", pack: "", appPassword: "",
  });
  const [clientId, setClientId] = useState("");
  const [connectedServices, setConnectedServices] = useState<Set<ServiceKey>>(new Set());
  const [config, setConfig] = useState<ClientConfig>({
    displayName: "", sendTime: "09:00", customMessage: "", backupPhone: "",
  });
  const [nextAppointment, setNextAppointment] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const requiredServices: ServiceKey[] = form.pack ? (PACK_SERVICES[form.pack] ?? []) : [];

  // Step 1 → Gmail: envoie le formulaire à n8n et va aux boutons OAuth
  //           non-Gmail: va directement à l'écran mot de passe (le webhook est appelé en step 2)
  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isGmailAccount(form.email)) {
      setLoading(true);
      try {
        const res = await fetch(WEBHOOK_FORM, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, status: "en_attente_connexion" }),
        });
        const data = await res.json();
        setClientId(data.client_id ?? crypto.randomUUID());
      } catch {
        setClientId(crypto.randomUUID());
      }
      setLoading(false);
    }
    setStep(2);
  }

  // Step 2 (non-Gmail) → envoie le formulaire complet (avec appPassword) à n8n
  async function handleAppPasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(WEBHOOK_FORM, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, status: "en_attente_connexion" }),
      });
      const data = await res.json();
      setClientId(data.client_id ?? crypto.randomUUID());
    } catch {
      setClientId(crypto.randomUUID());
    }
    setLoading(false);
    setStep(3);
  }

  // Step 2 → open OAuth popup; detect close to mark service as connected
  function connectService(service: ServiceKey) {
    const params = new URLSearchParams({
      client_id: OAUTH_CLIENT_ID,
      redirect_uri: OAUTH_REDIRECT_URI,
      response_type: "code",
      scope: SERVICE_INFO[service].scope,
      access_type: "offline",
      prompt: "consent",
      state: JSON.stringify({ service, client_id: clientId }),
    });

    const popup = window.open(
      "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString(),
      `oauth_${service}`,
      "width=500,height=620,left=200,top=100",
    );

    const timer = setInterval(() => {
      if (popup?.closed) {
        clearInterval(timer);
        setConnectedServices(prev => new Set([...prev, service]));
      }
    }, 500);
  }

  // Step 3 → send config, fetch next appointment, go to step 4
  async function handleConfigSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(WEBHOOK_CONFIG, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_id: clientId, ...config }),
      });
    } catch { /* not yet configured */ }

    try {
      const res = await fetch(`${WEBHOOK_VERIFY}?client_id=${clientId}`);
      const data = await res.json();
      setNextAppointment(data.next_appointment ?? null);
    } catch { /* not yet configured */ }

    setLoading(false);
    setStep(4);
  }

  return (
    <div style={{
      minHeight: "80vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "48px 20px", fontFamily: "Inter, sans-serif",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%", background: C.white,
          border: `2px solid ${C.gold}`, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 18, color: C.gold, fontWeight: 700,
        }}>R</div>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text }}>Rebbelia</span>
      </div>

      <StepIndicator current={step} />

      {step === 1 && (
        <Step1Form form={form} onChange={setForm} onSubmit={handleFormSubmit} loading={loading} />
      )}
      {step === 2 && isGmailAccount(form.email) && (
        <Step2Connect
          pack={form.pack}
          requiredServices={requiredServices}
          connectedServices={connectedServices}
          onConnect={connectService}
          onNext={() => setStep(3)}
        />
      )}
      {step === 2 && !isGmailAccount(form.email) && (
        <Step2AppPassword
          appPassword={form.appPassword}
          onChange={v => setForm(f => ({ ...f, appPassword: v }))}
          onSubmit={handleAppPasswordSubmit}
          loading={loading}
        />
      )}
      {step === 3 && (
        <Step3Config config={config} onChange={setConfig} onSubmit={handleConfigSubmit} loading={loading} />
      )}
      {step === 4 && (
        <Step4Confirmation companyName={form.companyName} nextAppointment={nextAppointment} />
      )}
    </div>
  );
}
