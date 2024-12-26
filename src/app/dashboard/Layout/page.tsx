"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation"; // Import usePathname từ Next.js
import "./Layout.css";
import { Play } from 'next/font/google'; // Dùng next/font thay vì @next/font

const playFont = Play({
    subsets: ['latin'],
    weight: ['400', '700'], // Điều chỉnh độ đậm nếu cần
});

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [role, setRole] = useState<"SV" | "GV" | "QL">("GV"); // Đổi cái trong ngoặc tròn để chuyển đổi role layout
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // State to track dark mode
    const pathname = usePathname(); // Lấy URL hiện tại

    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        const menuToggle = document.querySelector(".menu-toggle");
        const content = document.querySelector(".content");
        const settingsIcon = document.getElementById("settings-icon");
        const settingsMenu = document.getElementById("settings-menu");
        const modeBtn = document.getElementById("mode");
        const body = document.body;

        // Toggle sidebar visibility
        if (menuToggle && sidebar && content) {
            menuToggle.addEventListener("click", () => {
                sidebar.classList.toggle("hidden");
                content.classList.toggle("fullsize");
            });
        }

        // Toggle settings menu
        const toggleSettingsMenu = (event: MouseEvent) => {
            event.stopPropagation();
            settingsMenu?.classList.toggle("show");
        };

        // Hide settings menu when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !settingsIcon?.contains(event.target as Node) &&
                !settingsMenu?.contains(event.target as Node)
            ) {
                settingsMenu?.classList.remove("show");
            }
        };

        // Toggle dark mode
        const toggleDarkMode = () => {
            setIsDarkMode((prev) => !prev); // Toggle dark mode state
            body.classList.toggle("dark");
        };

        settingsIcon?.addEventListener("click", toggleSettingsMenu);
        document.addEventListener("click", handleClickOutside);
        modeBtn?.addEventListener("click", toggleDarkMode);

        // Cleanup event listeners on unmount
        return () => {
            settingsIcon?.removeEventListener("click", toggleSettingsMenu);
            document.removeEventListener("click", handleClickOutside);
            modeBtn?.removeEventListener("click", toggleDarkMode);
        };
    }, []);

    const menuItems = {
        SV: [
            { link: "/dashboard/SV/SVHome", text: "Trang chủ", icon: "/home.png" },
            { link: "/dashboard/SV/SVProfile", text: "Hồ sơ sinh viên", icon: "/avt.png" },
            { link: "/dashboard/SV/SVProjects", text: "Đồ án", icon: "/checklist.png" },
        ],
        GV: [
            { link: "/dashboard/GV/GVHome", text: "Trang chủ", icon: "/home.png" },
            { link: "/dashboard/GV/GVProfile", text: "Hồ sơ giảng viên", icon: "/avt.png" },
            { link: "/dashboard/GV/GVProjects", text: "Quản lý đồ án", icon: "/checklist.png" },
        ],
        QL: [
            { link: "/dashboard/QL/QLHome", text: "Trang chủ", icon: "/home.png" },
            { link: "/dashboard/QL/QLManager", text: "Quản lý tài khoản", icon: "/avt.png" },
            { link: "/dashboard/QL/QLContent", text: "Thông tin đồ án", icon: "/checklist.png" },
            { link: "/dashboard/QL/QLActive", text: "Hoạt động", icon: "/blog.png" },
        ],
    };

    return (
        <div className={`${playFont.className} main-container`}>
            <header className="header">
                <button className="menu-toggle">
                    <img src="/list.png" alt="menu" />
                </button>
                <div className="settings-icon">
                    <img src="/gear.png" alt="settings" id="settings-icon" />
                    <div className="drop-menu" id="settings-menu">
                        <div className="menu-list" id="mode">
                            Chế độ tối / sáng{" "}
                            <img 
                                src={isDarkMode ? "/moon.png" : "/summer.png"} 
                                alt="dark mode" 
                            />
                        </div>
                        <div className="menu-list">
                            Đăng xuất <img src="/signout.png" alt="sign out" />
                            <link rel="stylesheet" href="/dashboard/Login" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="content-container">
                <nav className="sidebar">
                    {menuItems[role].map((item, index) => (
                        <div
                            key={index}
                            className={`menu-item ${pathname === item.link ? "active" : ""}`}
                        >
                            <span className="icon">
                                <img src={item.icon} alt={item.text} />
                            </span>
                            <a href={item.link} className="btn">
                                {item.text}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
