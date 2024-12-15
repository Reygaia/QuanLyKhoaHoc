"use client"; // Chỉ định đây là client component

import React, { useEffect } from "react";
import "./Login.css";
import Head from "next/head";

export default function Login() {
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
            snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Thời gian rơi từ 2-5s

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

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Đăng nhập</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <div>
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
