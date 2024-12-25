"use client";
import "./SVProjectRegister.css";
// import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
{
      /*này là cái Signup ấy nhưng t thấy để Signup thì nhầm lẫn thành Đăng ký tk nên t đổi thành ProjectRegister*/
}
export default function SVProjectRegister() {
      useEffect(() => {
            if (typeof window !== "undefined") {
                  const menuToggle =
                        document.querySelector<HTMLElement>(".menu-toggle");
                  const sidebar =
                        document.querySelector<HTMLElement>(".sidebar");
                  const content =
                        document.querySelector<HTMLElement>(".content");
                  const menuItems =
                        document.querySelectorAll<HTMLElement>(".menu-item");
                  const settingsIcon = document.getElementById("settings-icon");
                  const settingsMenu = document.getElementById("settings-menu");
                  const modeBtn = document.getElementById("mode");
                  const body = document.body as HTMLBodyElement;
                  if (menuToggle) {
                        menuToggle.addEventListener("click", () => {
                              if (sidebar) sidebar.classList.toggle("hidden");
                              if (content) content.classList.toggle("fullsize");
                        });
                  }
                  menuItems.forEach((item) => {
                        item.addEventListener("click", (e) => {
                              e.preventDefault();
                              menuItems.forEach((i) =>
                                    i.classList.remove("active")
                              );
                              item.classList.add("active");
                        });
                  });
                  if (settingsIcon && settingsMenu) {
                        settingsIcon.addEventListener("click", () => {
                              if (settingsMenu === null) {
                                    return;
                              }

                              if (settingsMenu.style.display === "block") {
                                    settingsMenu.style.display = "none";
                              } else {
                                    settingsMenu.style.display = "block";
                              }
                        });
                        document.addEventListener("click", (event) => {
                              if (
                                    settingsIcon !== null &&
                                    settingsMenu !== null &&
                                    event.target !== null &&
                                    !settingsIcon.contains(
                                          event.target as Node
                                    ) &&
                                    settingsMenu.contains(event.target as Node)
                              ) {
                                    settingsMenu.style.display = "none";
                              }
                        });
                  }

                  settingsIcon?.addEventListener("click", () => {
                        settingsMenu?.classList.toggle("show");
                  });

                  modeBtn?.addEventListener("click", () => {
                        body.classList.toggle("dark");
                  });
            }
      }, []);

      return (
            <>
                  <Head>
                        <meta charSet={"UTF-8"} />
                        <meta
                              name="viewport"
                              content="width=device-width, initial-scale=1.0"
                        />
                        <title>Đăng ký đồ án</title>
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
                  {/*<body>*/}{" "}
                  {/*Nhét đống bên dưới vào thẻ <body> thì báo lỗi, <div> thì nó thu hẹp lại ko tới 1/3 nên xoá luôn (chạy bth ko báo lỗi ???)*/}
                  <canvas id="fireworks"></canvas>
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
                                    <div className="menu-item">
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
                                    <div className="menu-item active">
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
                                    <div className="search">
                                          <input
                                                type="text"
                                                placeholder="Tìm kiếm đồ án..."
                                                className="search-bar"
                                          />
                                          <button className="register-btn">
                                                Đăng kí đồ án
                                          </button>
                                    </div>

                                    <div className="form-container">
                                          <div className="form-group">
                                                <label htmlFor="name">
                                                      Tên đề tài:
                                                </label>
                                                <input
                                                      type="text"
                                                      id="name"
                                                      placeholder="Nhập tên đề tài"
                                                />
                                          </div>
                                          <div className="form-row">
                                                <div className="form-group">
                                                      <label htmlFor="faculty">
                                                            Khoa:
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="faculty"
                                                            placeholder="Nhập khoa"
                                                      />
                                                </div>
                                                <div className="form-group">
                                                      <label htmlFor="major">
                                                            Chuyên ngành:
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="major"
                                                            placeholder="Nhập chuyên ngành"
                                                      />
                                                </div>
                                          </div>
                                          <div className="form-row">
                                                <div className="form-group">
                                                      <label htmlFor="student-name">
                                                            Tên sinh viên:
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="student-name"
                                                            placeholder="Nhập tên sinh viên"
                                                      />
                                                </div>
                                                <div className="form-group">
                                                      <label htmlFor="student-id">
                                                            Mã số sinh viên:
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="student-id"
                                                            placeholder="Nhập mã số sinh viên"
                                                      />
                                                </div>
                                          </div>
                                          <div className="form-group">
                                                <label htmlFor="description">
                                                      Mô tả đề tài:
                                                </label>
                                                <textarea
                                                      id="description"
                                                      placeholder="Nhập mô tả đề tài"
                                                ></textarea>
                                          </div>
                                          <div className="submit-container">
                                                <button
                                                      type="button"
                                                      className="submit-btn"
                                                      id="submit-btn"
                                                >
                                                      Gửi
                                                </button>
                                          </div>
                                          <div
                                                id="successMessage"
                                                className="toast success-toast"
                                          >
                                                <p>Đăng ký thành công!</p>
                                                <a
                                                      id="back-btn"
                                                      href="SVProjects"
                                                      className="back-link"
                                                >
                                                      Quay lại
                                                </a>
                                          </div>

                                          <div
                                                id="errorMessage"
                                                className="toast error-toast"
                                          >
                                                <p>Thông tin chưa đầy đủ!</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/*</body>*/}
            </>
      );
}
