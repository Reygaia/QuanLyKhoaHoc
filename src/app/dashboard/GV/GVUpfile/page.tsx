"use client";

import React, { useEffect } from "react";
import "./GVupfile.css";
import Head from "next/head";

export default function GVUpfile() {
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

        settingsIcon?.addEventListener("click", () => {
            if (settingsMenu) {
                settingsMenu.style.display =
                    settingsMenu.style.display === "block" ? "none" : "block";
            }
        });

        document.addEventListener("click", (event) => {
            if (
                settingsIcon &&
                settingsMenu &&
                !settingsIcon.contains(event.target as Node) &&
                !settingsMenu.contains(event.target as Node)
            ) {
                settingsMenu.style.display = "none";
            }
        });

        settingsIcon?.addEventListener("click", () => {
            settingsMenu?.classList.toggle("show");
        });

        const modeBtn = document.getElementById("mode");
        const body = document.body;

        modeBtn?.addEventListener("click", () => {
            body.classList.toggle("dark");
        });

        // Xử lý danh sách file
        const fileInput = document.getElementById("fileInput");
        const fileList = document.getElementById("fileList");
        const fileCount = document.getElementById('fileCount');
        const existingFiles: string[] = [];
        const existingDescription = "";

        // Hiển thị danh sách file
        existingFiles.forEach((fileName) => {
            const li = document.createElement("li");
            li.textContent = fileName;
            fileList?.appendChild(li);
        });

        // Hiển thị nội dung mô tả
        const description = document.getElementById("description") as HTMLTextAreaElement;
        if (description) {
            description.value = existingDescription;
        }

        // Điều chỉnh chiều cao textarea
        document.querySelector("textarea")?.addEventListener("input", function () {
            const textarea = this as HTMLTextAreaElement;
            textarea.style.height = "auto"; // Đặt lại chiều cao trước khi tính toán lại
            textarea.style.height = textarea.scrollHeight + "px"; // Điều chỉnh chiều cao theo nội dung
        });
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Tải lên tập tin</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className="main-container">
                <header className="header">
                    <button className="menu-toggle"><img src="/list_12232288.png" alt=""/></button>
                    <div className="settings-icon">
                        <img src="/gear_10887995.png" alt="" id="settings-icon"/>
                        <div className="drop-menu" id="settings-menu">
                            <div className="menu-list" id="mode">Chế độ sáng <img src="/summer_13742912.png" alt=""/>
                            </div>
                            <div className="menu-list">Đăng xuất <img src="/sign-out_5949866.png" alt=""/></div>
                        </div>
                    </div>
                </header>
                <div className="content-container">
                    <nav className="sidebar">
                        <div className="menu-item">
                            <span className="icon"><img src="/home_12237107.png" alt=""/></span>
                            <a href="GVHome" className="btn">Trang chủ</a>
                        </div>
                        <div className="menu-item">
                            <span className="icon"><img src="/candidate_18276434.png" alt=""/></span>
                            <a href="GVProfile" className="btn">Hồ sơ cá nhân</a>
                        </div>
                        <div className="menu-item active">
                            <span className="icon"><img src="/book_10907215.png" alt=""/></span>
                            <a href="GVProjects" className="btn">Đồ án</a>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="search">
                            <input type="text" placeholder="Tìm kiếm đồ án..." className="search-bar"/>
                        </div>
                        <div className="upload-container">
                            <h2>Nội dung báo cáo</h2>
                            <div className="list-file">
                                <p>Danh sách file</p>
                                <ul id="fileList"></ul>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Mô tả:</label>
                                <textarea id="description" placeholder="Nhập mô tả đề tài"></textarea>
                            </div>
                            <div className="upbtn">
                                <a href="GVProcess">Quay lại</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
