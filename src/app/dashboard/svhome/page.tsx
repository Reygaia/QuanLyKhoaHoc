"use client";
import "./SVhome.css";
// import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";

export default function SVHome() {
      useEffect(() => {
            const sidebar = document.querySelector(".sidebar");
            const menuToggle = document.querySelector(".menu-toggle");
            const content = document.querySelector(".content");

            menuToggle?.addEventListener("click", () => {
                  sidebar?.classList.toggle("hidden");
                  content?.classList.toggle("hidden");
            });
            const menuItems = document.querySelectorAll(".menu-item");
            menuItems.forEach((item) => {
                  item.addEventListener("click", () => {
                        menuItems.forEach((i) => i.classList.remove("active"));
                        item.classList.add("active");
                  });
            });
            const settingsIcon = document.getElementById("settings-icon");
            const settingsMenu = document.getElementById("settings-menu");
            if (!settingsMenu) {
                  console.error("Settings menu element not found!");
                  return;
            }

            settingsIcon?.addEventListener("click", () => {
                  settingsMenu.style.display =
                        settingsMenu?.style.display === "block"
                              ? "none"
                              : "block";
            });

            document.addEventListener("click", (event) => {
                  if (settingsIcon && settingsMenu) {
                        if (
                              settingsIcon.contains(event.target as Node) &&
                              settingsMenu.contains(event.target as Node)
                        ) {
                              settingsMenu.style.display = "none";
                        }
                  }
            });
            settingsIcon?.addEventListener("click", () => {
                  settingsMenu?.classList.toggle("show");
            });
            // Mode
            const modeBtn = document.getElementById("mode");
            const body = document.body;

            modeBtn?.addEventListener("click", () => {
                  body.classList.toggle("dark");
            });
      });

      return (
            <>
                  <Head>
                        <meta charSet={"UTF-8"} />
                        <meta
                              name="viewport"
                              content="width=device-width, initial-scale=1.0"
                        />
                        <title>Trang chủ</title>
                        <link
                              rel="preconnect"
                              href="https://fonts.googleapis.com"
                        />
                        <link
                              rel="preconnect"
                              href="https://fonts.gstatic.com"
                              crossOrigin="anonymous"
                        />
                        <link
                              href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
                              rel="stylesheet"
                        />
                  </Head>
                  {/*<body>*/} {/*Tương tự SVProjectRegister*/}
                  <div className="main-container">
                        <header className="header">
                              <button className="menu-toggle">
                                    <img src="/list_12232288.png" alt="" />
                              </button>
                              <div className="settings-icon">
                                    <img
                                          src="/gear_10887995.png"
                                          alt=""
                                          id="settings-icon"
                                    />
                                    <div
                                          className="drop-menu"
                                          id="settings-menu"
                                    >
                                          <div className="menu-list" id="mode">
                                                Chế độ sáng{" "}
                                                <img
                                                      src="/summer_13742912.png"
                                                      alt=""
                                                />
                                          </div>
                                          <div className="menu-list">
                                                Đăng xuất{" "}
                                                <img
                                                      src="/sign-out_5949866.png"
                                                      alt=""
                                                />
                                          </div>
                                    </div>
                              </div>
                        </header>
                        <div className="content-container">
                              <nav className="sidebar">
                                    <div className="menu-item active">
                                          <span className="icon">
                                                <img
                                                      src="/home_12237107.png"
                                                      alt=""
                                                />
                                          </span>{" "}
                                          <a href="SVHome" className="btn">
                                                Trang chủ
                                          </a>
                                    </div>
                                    <div className="menu-item">
                                          <span className="icon">
                                                <img
                                                      src="/candidate_18276434.png"
                                                      alt=""
                                                />
                                          </span>{" "}
                                          <a href="SVProfile" className="btn">
                                                Hồ sơ cá nhân
                                          </a>
                                    </div>
                                    <div className="menu-item">
                                          <span className="icon">
                                                <img
                                                      src="/book_10907215.png"
                                                      alt=""
                                                />
                                          </span>{" "}
                                          <a href="SVProjects" className="btn">
                                                Đồ án
                                          </a>
                                    </div>
                              </nav>
                              <div className="content">
                                    <p>Chào mừng bạn đến với trang chủ.</p>
                              </div>
                        </div>
                  </div>
                  {/*</body>*/}
            </>
      );
}
