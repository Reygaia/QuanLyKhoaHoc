"use client"; // Chỉ định đây là client component

import React, { useEffect, useState } from "react";
import "./Login.css";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Login() {
      const router = useRouter();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
            const snowContainer = document.getElementById("snow-container");

            // Hàm tạo bông tuyết
            function createSnowflake() {
                  const snowflake = document.createElement("div");
                  snowflake.classList.add("snowflake");
                  snowflake.textContent = "❄"; // Biểu tượng bông tuyết

                  // Vị trí ngẫu nhiên và kích thước ngẫu nhiên
                  const size = Math.random() * 10 + 5; // Kích thước từ 5px đến 15px
                  snowflake.style.left = Math.random() * 100 + "vw";
                  snowflake.style.fontSize = size + "px";
                  snowflake.style.animationDuration =
                        Math.random() * 3 + 2 + "s"; // Thời gian rơi từ 2-5s

                  snowContainer?.appendChild(snowflake);

                  // Xóa bông tuyết sau khi nó rơi hết
                  setTimeout(() => {
                        snowflake.remove();
                  }, 5000);
            }

            // Tạo bông tuyết mỗi 100ms
            const snowflakeInterval = setInterval(createSnowflake, 100);

            // Dọn dẹp khi component bị tháo ra khỏi DOM
            return () => clearInterval(snowflakeInterval);
      }, []);

      // const handleSubmit = async (event: React.FormEvent) => {
      //       event.preventDefault();

      //       try {
      //             // Replace this with your Supabase authentication logic
      //             const { data, error } =
      //                   await supabaseClient.auth.signInWithPassword({
      //                         email,
      //                         password,
      //                   });

      //             if (error) {
      //                   setError("Invalid credentials");
      //             } else {
      //                   router.push("/dashboard/svhome");
      //             }
      //       } catch (err) {
      //             console.error("Login error:", err);
      //             setError("Internal Server Error");
      //       }
      // };
      const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault();

            // Send login request to the API
            try {
                  const response = await fetch("/api/token", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email, password }),
                  });
                  const data = await response.json();
                  if (response.ok) {
                        // Handle success (e.g., redirect to a dashboard or store token)
                        router.push("/dashboard/svhome");
                        console.log(data.message);
                        setError(null); // Clear any previous errors
                  } else {
                        // Handle error (e.g., invalid credentials)
                        setError(data.message);
                  }
            } catch (error) {
                  console.error("An error occurred:", error);
                  setError("An unexpected error occurred. Please try again.");
            }
      };

      return (
            <>
                  <Head>
                        <meta charSet={"UTF-8"} />
                        <meta
                              name="viewport"
                              content="width=device-width, initial-scale=1.0"
                        />
                        <title>Đăng nhập</title>
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

                  <div>
                        <div className="login-container">
                              <img
                                    src="/logo-dai-hoc-hutech_012634748.png"
                                    alt=""
                              />
                              <div className="login-box">
                                    <h2>Đăng nhập</h2>
                                    <form onSubmit={handleSubmit}>
                                          <div className="form-group">
                                                <label htmlFor="username">
                                                      Tài khoản
                                                </label>
                                                <input
                                                      type="text"
                                                      id="username"
                                                      name="username"
                                                      placeholder="Nhập tài khoản"
                                                      value={email}
                                                      onChange={(e) =>
                                                            setEmail(
                                                                  e.target.value
                                                            )
                                                      }
                                                />
                                          </div>
                                          <div className="form-group">
                                                <label htmlFor="password">
                                                      Mật khẩu
                                                </label>
                                                <input
                                                      type="password"
                                                      id="password"
                                                      name="password"
                                                      placeholder="Nhập mật khẩu"
                                                      value={password}
                                                      onChange={(e) =>
                                                            setPassword(
                                                                  e.target.value
                                                            )
                                                      }
                                                />
                                          </div>
                                          {error && (
                                                <p className="error-text">
                                                      {error}
                                                </p>
                                          )}{" "}
                                          {/* Display error message */}
                                          <p className="help-text">
                                                Đăng nhập không được?{" "}
                                                <a href="#">Liên hệ quản lý</a>
                                          </p>
                                          <button
                                                type="submit"
                                                className="btn-login"
                                          >
                                                Đăng nhập
                                          </button>
                                    </form>
                              </div>
                        </div>
                        <div id="snow-container"></div>
                  </div>
            </>
      );
}
