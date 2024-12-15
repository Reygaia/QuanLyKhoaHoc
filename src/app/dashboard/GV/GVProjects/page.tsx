"use client";

import React, { useEffect } from "react";
import "./GVprojects.css";
import Head from "next/head";

export default function GVProjects() {
    useEffect(() => {
        const sidebar = document.querySelector('.sidebar');
        const menuToggle = document.querySelector('.menu-toggle');
        const content = document.querySelector('.content');
        const settingsIcon = document.getElementById('settings-icon');
        const settingsMenu = document.getElementById('settings-menu');
        const modeBtn = document.getElementById('mode');
        const body = document.body;
        const menuItems = document.querySelectorAll('.menu-item');

        // Toggle Sidebar
        menuToggle?.addEventListener('click', () => {
            sidebar?.classList.toggle('hidden');
            content?.classList.toggle('hidden');
        });

        // Handle Active Menu Items
        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                menuItems.forEach((i) => i.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // Settings Menu Toggle
        settingsIcon?.addEventListener('click', () => {
            settingsMenu!.style.display =
                settingsMenu!.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (event) => {
            if (!settingsIcon?.contains(event.target as Node) && !settingsMenu?.contains(event.target as Node)) {
                settingsMenu!.style.display = 'none';
            }
        });

        // Dark Mode Toggle
        modeBtn?.addEventListener('click', () => {
            body.classList.toggle('dark');
        });
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Đồ án</title>
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
                            <input type="text" placeholder="Tìm kiếm đồ án..." className="search-bar" />
                        </div>
                        <div className="project-list">
                            <section>
                                <h3>Đồ án đang được thực hiện</h3>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Tên</th>
                                        <th>Mô tả</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><a href="GVProcess" className="list">Đồ án 1</a></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><a href="GVProcess">Đồ án 2</a></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><a href="GVProcess">Đồ án 3</a></td>
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
