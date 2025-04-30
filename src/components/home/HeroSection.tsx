"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div style={{height: "80vh", position: "relative", backgroundColor: "black", overflow: "hidden"}}>
      {/* Video background */}
      <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
        <video
          style={{width: "100%", height: "100%", objectFit: "cover"}}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/Tyrell_Website_Banner_V.2.mp4" type="video/mp4" />
        </video>
        <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)"}}></div>
      </div>

      {/* Hero Content - Heading, Subheading and button */}
      <div style={{
        position: "relative",
        zIndex: 10,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 24px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <h1 style={{
          color: "white",
          fontSize: "35px",
          fontWeight: "bold",
          marginBottom: "8px",
          fontFamily: "Roboto, sans-serif"
        }}>
          Tyrell DaSilva
        </h1>
        <p style={{
          color: "white",
          fontSize: "22px",
          marginBottom: "36px",
          fontFamily: "Roboto, sans-serif",
          maxWidth: "600px"
        }}>
          From Builder to Automator — I Help Businesses Run Smarter, Scale Faster, and Sell for More
        </p>
        <Link href="/contact">
          <button
            style={{
              backgroundColor: "#8B5CF6",
              color: "white",
              fontWeight: "bold",
              padding: "14px 28px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 6px rgba(139, 92, 246, 0.25)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(139, 92, 246, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(139, 92, 246, 0.25)";
            }}
          >
            Book a Consultation
          </button>
        </Link>
      </div>
    </div>
  );
}
