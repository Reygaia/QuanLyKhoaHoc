"use client";

import React, { useEffect } from "react";
import "./GVprocess.css";
import Head from "next/head";

export default function GVProcess() {
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
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tiến trình đồ án</title>
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
                            <span className="icon"><img src="/home_12237107.png" alt="" /></span>
                            <a href="GVHome" className="btn">Trang chủ</a>
                        </div>
                        <div className="menu-item">
                            <span className="icon"><img src="/candidate_18276434.png" alt="" /></span>
                            <a href="GVProfile" className="btn">Hồ sơ cá nhân</a>
                        </div>
                        <div className="menu-item active">
                            <span className="icon"><img src="/book_10907215.png" alt="" /></span>
                            <a href="GVProjects" className="btn">Đồ án</a>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="search">
                            <input type="text" placeholder="Tìm kiếm đồ án ..." className="search-bar"/>
                        </div>

                        <div className="project-list">
                            <section>
                                <h3>Đồ án đang thực hiện</h3>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Tuần</th>
                                        <th>Nộp file</th>
                                        <th>Thời gian nộp</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Tuần 1</td>
                                        <td><a href="GVUpfile">Tải lên</a></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Tuần 2</td>
                                        <td><a href="GVUpfile">Tải lên</a></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Tuần 3</td>
                                        <td><a href="GVUpfile">Tải lên</a></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
