"use client";

import React from "react";

export default function BusinessCards() {
  return (
    <div
      style={{
        backgroundColor: "#111111",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "40px",
            color: "white",
            textAlign: "center",
          }}
        >
          MY COMPANIES
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Card 1 - Sonata Design */}
          <a
            href="https://www.sonatadesign.ca/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              className="hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/20230811-2228-1-Ave-NW-061_sm.jpg"
                  alt="Sonata Design"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "50%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                ></div>
              </div>
              <div
                style={{
                  padding: "24px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                      color: "#8B5CF6",
                    }}
                  >
                    Sonata Design
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#E5E5E5",
                      marginBottom: "16px",
                    }}
                  >
                    Premium window fashions and interior design solutions
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#8B5CF6",
                    }}
                  >
                    Visit Website
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 - Empower Projects */}
          <a
            href="https://empowerprojects.ca/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              className="hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/empower-projects.jpg"
                  alt="Empower Projects"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "50%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                ></div>
              </div>
              <div
                style={{
                  padding: "24px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                      color: "#8B5CF6",
                    }}
                  >
                    Empower Projects
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#E5E5E5",
                      marginBottom: "16px",
                    }}
                  >
                    Durable living solutions for sustainable communities
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#8B5CF6",
                    }}
                  >
                    Visit Website
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Card 3 - Orchestrator with new image */}
          <a
            href="/projects"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              className="hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/P2599532-Enhanced-NR.jpg"
                  alt="Orchestrator"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "50%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                ></div>
              </div>
              <div
                style={{
                  padding: "24px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                      color: "#8B5CF6",
                    }}
                  >
                    Orchestrator
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#E5E5E5",
                      marginBottom: "16px",
                    }}
                  >
                    Harmonizing business success through strategic consulting
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#8B5CF6",
                    }}
                  >
                    Learn More
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
