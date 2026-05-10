import { useState } from "react";

// Configuration simplifiée
const CONFIG = {
  clientId: "545771333543-t24aerslavut57lkv1n5dq4mofgfbeki.apps.googleusercontent.com",
  redirectUri: "https://loukab.app.n8n.cloud/webhook/e53f315a-ed63-43bf-9b07-7e5cfde591d8",
};

export default function GoogleOAuth() {
  const [status, setStatus] = useState<"idle" | "waiting">("idle");
  const [hoveredButton, setHoveredButton] = useState<"gmail" | "business" | null>(null);

  function getButtonStyle(type: "gmail" | "business"): React.CSSProperties {
    const isHovered = hoveredButton === type && status !== "waiting";

    return {
      ...s.googleBtn,
      background: isHovered ? "#2F7A5F" : "#1E4E8C",
      border: `1px solid ${isHovered ? "#2F7A5F" : "#1E4E8C"}`,
      color: "#FFFFFF",
    };
  }

  function startOAuth(type: "gmail" | "business") {
    // Définition des scopes selon le bouton cliqué
    const scopes = {
      gmail: "openid email profile https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/business.manage https://www.googleapis.com/auth/calendar.readonly",
      business: "openid email profile https://www.googleapis.com/auth/business.manage"
    };

    const params = new URLSearchParams({
      client_id: CONFIG.clientId,
      redirect_uri: CONFIG.redirectUri,
      response_type: "code",
      scope: scopes[type],
      access_type: "offline",
      prompt: "consent",
      state: Math.random().toString(36).substring(2),
    });

    setStatus("waiting");

    // Ouvre la fenêtre Google
    window.open(
      "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString(),
      "google_oauth",
      "width=500,height=620,left=200,top=100"
    );
  }

  return (
    <div style={s.page}>
      <div style={s.logoArea}>
        <div style={s.logo}>R</div>
        <h1 style={s.h1}>Rebbelia</h1>
        <p style={s.subtitle}>Sélectionnez le service à connecter</p>
      </div>

      <div style={s.btnContainer}>
        {/* BOUTON GMAIL */}
        <button 
          style={getButtonStyle("gmail")}
          onClick={() => startOAuth("gmail")}
          onMouseEnter={() => setHoveredButton("gmail")}
          onMouseLeave={() => setHoveredButton(null)}
          disabled={status === "waiting"}
        >
          <GoogleIcon />
          Connecter Gmail
        </button>

        {/* BOUTON GOOGLE BUSINESS */}
        {/* <button 
          style={getButtonStyle("business")}
          onClick={() => startOAuth("business")}
          onMouseEnter={() => setHoveredButton("business")}
          onMouseLeave={() => setHoveredButton(null)}
          disabled={status === "waiting"}
        >
          <GoogleIcon />
          Connecter Google Business
        </button> */}
      </div>

      {status === "waiting" && (
        <p style={s.info}>En attente de l'autorisation sur la fenêtre Google...</p>
      )}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908C16.658 14.013 17.64 11.705 17.64 9.2z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
      <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
    </svg>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    backgroundColor: "#F7F9FC",
    fontFamily: "sans-serif",
  },
  logoArea: { textAlign: "center" },
  logo: {
    width: 50, height: 50, borderRadius: "50%", background: "#FFFFFF",
    border: "1px solid #D4A64A", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: 20, color: "#D4A64A", margin: "0 auto 15px"
  },
  h1: { fontSize: 24, color: "#172033", margin: 0 },
  subtitle: { fontSize: 14, color: "#5E6B82" },
  btnContainer: { display: "flex", flexDirection: "column", gap: 15 },
  googleBtn: {
    display: "flex", alignItems: "center", justifyContent: "center",
    gap: 12, padding: "0 25px", height: 50, borderRadius: 12,
    border: "1px solid #1E4E8C", background: "#1E4E8C", color: "#FFFFFF",
    fontSize: 15, fontWeight: 500, width: 300, cursor: "pointer"
  },
  info: { fontSize: 12, color: "#5E6B82" }
};

