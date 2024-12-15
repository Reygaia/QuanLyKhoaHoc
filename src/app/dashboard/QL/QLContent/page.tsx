"use client";

import React, { useEffect } from "react";
import "./QLcontent.css";
import Head from "next/head";

export default function QLContent() {
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

        const projectData = {
            name: "",
            faculty: "",
            major: "",
            studentName: "",
            studentId: "",
            description: "",
            files: ["Tài liệu 1.pdf", "Tài liệu 2.docx"]
        };

        // Hàm để cập nhật form với dữ liệu từ CSDL
        const loadProjectData = () => {
            (document.getElementById("name") as HTMLInputElement).value = projectData.name;
            (document.getElementById("faculty") as HTMLInputElement).value = projectData.faculty;
            (document.getElementById("major") as HTMLInputElement).value = projectData.major;
            (document.getElementById("student-name") as HTMLInputElement).value = projectData.studentName;
            (document.getElementById("student-id") as HTMLInputElement).value = projectData.studentId;
            (document.getElementById("description") as HTMLTextAreaElement).value = projectData.description;

            const fileList = document.getElementById("fileList");
            projectData.files.forEach((file) => {
                const li = document.createElement("li");
                li.textContent = file;
                fileList?.appendChild(li);
            });
        };
        loadProjectData();
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Quản lý nội dung</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="main-container">
                <header className="header">
                    <button className="menu-toggle"><img src="/list_12232288.png" alt="" /></button>
                    <div className="settings-icon">
                        <img src="/gear_10887995.png" alt="" id="settings-icon" />
                        <div className="drop-menu" id="settings-menu">
                            <div className="menu-list" id="mode">Chế độ sáng <img src="/summer_13742912.png" alt="" /></div>
                            <div className="menu-list">Đăng xuất <img src="/sign-out_5949866.png" alt="" /></div>
                        </div>
                    </div>
                </header>
                <div className="content-container">
                    <nav className="sidebar">
                        <div className="menu-item">
                            <span className="icon"><img src="/home_12237107.png" alt=""/></span>
                            <a href="QLHome" className="btn">Trang chủ</a>
                        </div>
                        <div className="menu-item">
                            <span className="icon"><img src="/candidate_18276434.png" alt=""/></span>
                            <a href="QLManager" className="btn">Tài khoản</a>
                        </div>
                        <div className="menu-item active">
                            <span className="icon"><img src="/book_10907215.png" alt=""/></span>
                            <a href="QLContent" className="btn">Đồ án</a>
                        </div>
                        <div className="menu-item">
                            <span className="icon"><img src="/book_10907215.png" alt=""/></span>
                            <a href="QLActive" className="btn">Hoạt động</a>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="form-container">
                            <h2>Nội dung đăng ký</h2>
                            <div className="form-group">
                                <label htmlFor="name">Tên đề tài:</label>
                                <input type="text" id="name" placeholder="Nhập tên đề tài"/>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="faculty">Khoa:</label>
                                    <input type="text" id="faculty" placeholder="Nhập khoa"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="major">Chuyên ngành:</label>
                                    <input type="text" id="major" placeholder="Nhập chuyên ngành"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="student-name">Tên sinh viên:</label>
                                    <input type="text" id="student-name" placeholder="Nhập tên sinh viên"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="student-id">Mã số sinh viên:</label>
                                    <input type="text" id="student-id" placeholder="Nhập mã số sinh viên"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Mô tả đề tài:</label>
                                <textarea id="description" placeholder="Nhập mô tả đề tài"></textarea>
                            </div>
                            <div className="list-file">
                                <h2>Dữ liệu</h2>
                                <ul id="fileList"></ul>
                            </div>
                            <div className="form-actions">
                                <button id="approve-btn" className="btn-approve">Duyệt đồ án</button>
                                <button id="reject-btn" className="btn-reject">Không duyệt</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
