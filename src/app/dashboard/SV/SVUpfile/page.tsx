"use client"; // Biến component thành client component

import React, { useEffect } from "react";
import "./SVupfile.css";
import Head from "next/head";

export default function SVUpfile() {
    useEffect(() => {
        const sidebar = document.querySelector('.sidebar');
        const menuToggle = document.querySelector('.menu-toggle');
        const content = document.querySelector('.content');

        menuToggle?.addEventListener('click', () => {
            sidebar?.classList.toggle('hidden');
            content?.classList.toggle('hidden');
        });

        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                menuItems.forEach((i) => i.classList.remove('active'));
                item.classList.add('active');
            });
        });

        const settingsIcon = document.getElementById('settings-icon');
        const settingsMenu = document.getElementById('settings-menu');

        settingsIcon?.addEventListener('click', () => {
            if (settingsMenu) {
                settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
            }
        });

        document.addEventListener('click', (event) => {
            if (!settingsIcon?.contains(event.target as Node) && !settingsMenu?.contains(event.target as Node)) {
                if (settingsMenu) settingsMenu.style.display = 'none';
            }
        });

        settingsIcon?.addEventListener('click', () => {
            settingsMenu?.classList.toggle('show');
        });

        // Mode toggle
        const modeBtn = document.getElementById('mode');
        const body = document.body;

        modeBtn?.addEventListener('click', () => {
            body.classList.toggle('dark');
        });

        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        const fileList = document.getElementById('fileList');
        const fileCount = document.getElementById('fileCount');

        fileInput?.addEventListener('change', () => {
            const files = fileInput.files;
            if (fileList) fileList.innerHTML = ''; // Xóa danh sách tệp cũ

            if (fileCount) fileCount.textContent = `Số lượng tệp đã chọn: ${files?.length}`;

            // Duyệt qua từng tệp đã chọn
            Array.from(files || []).forEach((file) => {
                const li = document.createElement("li");
                li.textContent = file.name; // Hiển thị tên tệp

                const removeButton = document.createElement("button");
                removeButton.textContent = "Xóa";
                removeButton.addEventListener("click", () => {
                    li.remove(); // Xóa li khỏi danh sách
                    updateFileCount(); // Cập nhật lại số lượng tệp
                });

                li.appendChild(removeButton); // Thêm nút xóa vào li
                fileList?.appendChild(li); // Thêm li vào danh sách
            });
        });

        const updateFileCount = () => {
            const files = fileInput.files;
            if (fileCount) fileCount.textContent = `Số lượng tệp đã chọn: ${files?.length}`;
        };

        // Tự động điều chỉnh chiều cao textarea
        const textarea = document.querySelector("textarea");
        textarea?.addEventListener("input", function () {
            const el = this as HTMLTextAreaElement;
            el.style.height = "auto"; // Đặt lại chiều cao trước khi tính toán lại
            el.style.height = `${el.scrollHeight}px`; // Điều chỉnh chiều cao theo nội dung
        });
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tải lên tập tin</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className="main-container">
                <header className="header">
                    <button className="menu-toggle"><img src="/list_12232288.png" alt=""/></button>
                    <div className="settings-icon">
                        <img src="/gear_10887995.png" alt="" id="settings-icon"/>
                        <div className="drop-menu" id="settings-menu">
                            <div className="menu-list" id="mode">Chế độ sáng <img src="/summer_13742912.png" alt=""/></div>
                            <div className="menu-list">Đăng xuất <img src="/sign-out_5949866.png" alt=""/></div>
                        </div>
                    </div>
                </header>
                <div className="content-container">
                    <nav className="sidebar">
                        <div className="menu-item">
                            <span className="icon"><img src="/home_12237107.png" alt=""/></span>
                            <a href="SVHome" className="btn">Trang chủ</a>
                        </div>
                        <div className="menu-item">
                            <span className="icon"><img src="/candidate_18276434.png" alt=""/></span>
                            <a href="SVProfile" className="btn">Hồ sơ cá nhân</a>
                        </div>
                        <div className="menu-item active">
                            <span className="icon"><img src="/book_10907215.png" alt=""/></span>
                            <a href="SVProjects" className="btn">Đồ án</a>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="search">
                            <input type="text" placeholder="Tìm kiếm đồ án ..." className="search-bar"/>
                            <a href="SVSignupProject" className="button-link">Đăng kí đồ án</a>
                        </div>
                        <div className="upload-container">
                            <h2>Nộp file</h2>
                            <div className="list-file">
                                <div className="choice-file">
                                    <label htmlFor="fileInput" className="custom-upload">Chọn tệp</label>
                                    <input type="file" id="fileInput" multiple />
                                </div>
                                <ul id="fileList"></ul>
                                <p id="fileCount"></p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Mô tả:</label>
                                <textarea id="description" placeholder="Nhập mô tả đề tài"></textarea>
                            </div>
                            <div className="upbtn">
                                <a href="SVProcess">Nộp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
