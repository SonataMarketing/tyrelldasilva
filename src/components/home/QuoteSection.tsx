import React from 'react';

export default function QuoteSection() {
  return (
    <div style={{backgroundColor: "#0D0D0D", padding: "80px 0", textAlign: "center"}}>
      <div style={{maxWidth: "1024px", margin: "0 auto", padding: "0 24px"}}>
        <h2 style={{
          fontSize: "28px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "white",
          lineHeight: "1.5",
          fontFamily: "Roboto, sans-serif",
          maxWidth: "800px",
          margin: "0 auto 20px"
        }}>
          "I believe a stronger society starts with unlocking the potential in every person. That's why I'm driven to build opportunities where everyone can rise. When we invest in people, empower their ambitions, and give them the tools to thrive — we all go further, together."
        </h2>
        <div style={{
          width: "60px",
          height: "4px",
          backgroundColor: "#8B5CF6",
          margin: "30px auto 20px"
        }}></div>
        <p style={{
          fontSize: "16px",
          color: "#a3a3a3",
          textTransform: "uppercase",
          letterSpacing: "1px"
        }}>- Tyrell DaSilva</p>
      </div>
    </div>
  );
}
