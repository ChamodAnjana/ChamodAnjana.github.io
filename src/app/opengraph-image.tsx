import { ImageResponse } from "next/og";

export const runtime = "edge";


export const alt = "Chamod Anjana | Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative background glows */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(5,5,5,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(5,5,5,0) 70%)",
          }}
        />
        
        {/* Glassmorphism Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "1000px",
            height: "460px",
            backgroundColor: "rgba(20, 20, 24, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "32px",
            padding: "60px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "#3b82f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                fontWeight: "bold",
                color: "white",
                marginBottom: "40px",
                boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
              }}
            >
              CA
            </div>
            <h1
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Chamod Anjana
            </h1>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 500,
                color: "#3b82f6",
                margin: "20px 0 0 0",
              }}
            >
              Software Engineer & Flutter Developer
            </h2>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ display: "flex", padding: "10px 24px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", color: "#e5e7eb", fontSize: "20px" }}>Flutter</div>
              <div style={{ display: "flex", padding: "10px 24px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", color: "#e5e7eb", fontSize: "20px" }}>Full-Stack</div>
              <div style={{ display: "flex", padding: "10px 24px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", color: "#e5e7eb", fontSize: "20px" }}>ASP.NET</div>
            </div>
            
            <div style={{ display: "flex", fontSize: "24px", color: "#9ca3af", fontWeight: 500 }}>
              chamodanjana.me
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
