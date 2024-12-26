"use client";

import React, { useEffect } from "react";
import "./Login.css";
import Head from "next/head";
import { Play } from 'next/font/google'; // Dùng next/font thay vì @next/font

const playFont = Play({
    subsets: ['latin'],
    weight: ['400'], // Điều chỉnh độ đậm nếu cần
});

export default function Login() {
    useEffect(() => {
        const snowContainer = document.getElementById("snow-container");

        function createSnowflake() {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.textContent = "❄";

            const size = Math.random() * 10 + 5;
            snowflake.style.left = Math.random() * 100 + "vw";
            snowflake.style.fontSize = size + "px";
            snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

            snowContainer?.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }

        const snowflakeInterval = setInterval(createSnowflake, 100);

        return () => clearInterval(snowflakeInterval);
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Đăng nhập</title>
            </Head>
            <div className={`${playFont.className}`}> {/* Áp dụng font chữ */}
                <div className="login-container">
                    <img src="/logo-dai-hoc-hutech_012634748.png" alt="" />
                    <div className="login-box">
                        <h2>Đăng nhập</h2>
                        <form action="#" method="POST">
                            <div className="form-group">
                                <label htmlFor="username">Tài khoản</label>
                                <input type="text" id="username" name="username" placeholder="Nhập tài khoản" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" />
                            </div>
                            <p className="help-text">
                                Đăng nhập không được? <a href="#">Liên hệ quản lý</a>
                            </p>
                            <button type="submit" className="btn-login">Đăng nhập</button>
                        </form>
                    </div>
                </div>
                <div id="snow-container"></div>
            </div>
        </>
    );
}
