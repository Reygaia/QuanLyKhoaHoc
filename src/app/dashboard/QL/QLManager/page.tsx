"use client";

import React, { useEffect } from "react";
import "./QLmanager.css";
import Head from "next/head";

export default function QLManager() {
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

        const studentBtn = document.getElementById('studentBtn');
        const teacherBtn = document.getElementById('teacherBtn');
        const studentForm = document.getElementById('Svform');
        const teacherForm = document.getElementById('Gvform');

        studentForm?.classList.add('hiddenform');
        teacherForm?.classList.add('hiddenform');

        studentBtn?.addEventListener('click', () => {
            studentForm?.classList.remove('hiddenform');
            teacherForm?.classList.add('hiddenform');
            studentBtn?.classList.add('activeform');
            teacherBtn?.classList.remove('activeform');
        });

        teacherBtn?.addEventListener('click', () => {
            teacherForm?.classList.remove('hiddenform');
            studentForm?.classList.add('hiddenform');
            teacherBtn?.classList.add('activeform');
            studentBtn?.classList.remove('activeform');
        });
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Quản lý tài khoản</title>
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
                        <div className="menu-item active">
                            <span className="icon"><img src="/candidate_18276434.png" alt=""/></span>
                            <a href="QLManager" className="btn">Tài khoản</a>
                        </div>
                        <div className="menu-item">
                            <span className="icon"><img src="/book_10907215.png" alt=""/></span>
                            <a href="QLContent" className="btn">Đồ án</a>
                        </div>
                        <div className="menu-item">
                            <span className="icon"><img src="/book_10907215.png" alt=""/></span>
                            <a href="QLActive" className="btn">Hoạt động</a>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="search">
                            <input type="text" className="search-bar" placeholder="Tìm kiếm sinh viên ..."/>
                        </div>
                        <div className="cre-user">
                            <div className="option-buttons">
                                <button id="studentBtn" className="toggle-btn">Tạo tài khoản sinh viên</button>
                                <button id="teacherBtn" className="toggle-btn">Tạo tài khoản giảng viên</button>
                            </div>
                            {/*Form SV*/}
                            <div id="Svform" className="">
                                <h3>Tạo tài khoản sinh viên</h3>
                                <div className="form-group">
                                    <label htmlFor="name">Tên sinh viên:</label>
                                    <input type="text" id="name" placeholder="Nhập tên sinh viên"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="student-id">Mã số sinh viên:</label>
                                        <input type="text" id="student-id" placeholder="Nhập mã số sinh viên"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="school-year">Niên khóa:</label>
                                        <input type="text" id="school-year" placeholder="Nhập niên khóa"/>
                                    </div>
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
                                        <label htmlFor="faculty">Lớp</label>
                                        <input type="text" id="faculty" placeholder="Nhập lớp"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="major">Hệ đào tạo</label>
                                        <input type="text" id="major" placeholder="Nhập hệ đào tạo"/>
                                    </div>
                                </div>
                                <div className="submit-container">
                                    <button type="button" className="submit-btn" id="submit-btn">Tạo tài khoản</button>
                                </div>
                                <div id="successMessage" className="toast success-toast">
                                    <p>Tạo thành công!</p>
                                    <a id="back-btn" href="QLManager" className="back-link">Quay lại</a>
                                </div>
                            </div>
                            {/*Form GV*/}
                            <div id="Gvform" className="">
                                <h3>Tạo tài khoản giảng viên</h3>
                                <div className="form-group">
                                    <label htmlFor="name">Tên giảng viên:</label>
                                    <input type="text" id="name" placeholder="Nhập tên giảng viên"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="lecturer-id">Mã số giảng viên:</label>
                                        <input type="text" id="lecturer-id" placeholder="Nhập mã số giảng viên"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="education">Học vấn:</label>
                                        <input type="text" id="education" placeholder="Nhập niên khóa"/>
                                    </div>
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
                                <div className="submit-container">
                                    <button type="button" className="submit-btn" id="submit-btn">Tạo tài khoản</button>
                                </div>
                                <div id="successMessage" className="toast success-toast">
                                    <p>Tạo thành công!</p>
                                    <a id="back-btn" href="QLManager" className="back-link">Quay lại</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
