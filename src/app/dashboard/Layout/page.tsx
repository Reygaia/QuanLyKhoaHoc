"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation"; // Import usePathname từ Next.js
import "./Layout.css";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [role, setRole] = useState<"SV" | "GV" | "QL">("SV"); // Đổi cái trong ngoặc tròn để chuyển đổi role layout
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
        if (menuToggle) {
            menuToggle.addEventListener("click", () => {
                if (sidebar) sidebar.classList.toggle("hidden");
                if (content) content.classList.toggle("fullsize");
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
            { link: "/dashboard/SV/SVHome", text: "Trang chủ", icon: "/homepage.png" },
            { link: "/dashboard/SV/SVProfile", text: "Hồ sơ sinh viên", icon: "/profile.png" },
            { link: "/dashboard/SV/SVProjects", text: "Đồ án", icon: "/project-book.png" },
        ],
        GV: [
            { link: "/dashboard/GV/GVHome", text: "Trang chủ", icon: "/homepage.png" },
            { link: "/dashboard/GV/GVProfile", text: "Hồ sơ giảng viên", icon: "/profile.png" },
            { link: "/dashboard/GV/GVProjects", text: "Quản lý đồ án", icon: "/project-management.png" },
        ],
        QL: [
            { link: "/dashboard/QL/QLHome", text: "Trang chủ", icon: "/homepage.png" },
            { link: "/dashboard/QL/QLManager", text: "Quản lý tài khoản", icon: "/account-management.png" },
            { link: "/dashboard/QL/QLContent", text: "Thông tin đồ án", icon: "/info-project.png" },
            { link: "/dashboard/QL/QLActive", text: "Hoạt động", icon: "/active.png" },
        ],
    };

    return (
        <div className="main-container">
            <header className="header">
                <button className="menu-toggle">
                    <img src="/menu-list.png" alt="" />
                </button>
                <div className="settings-icon">
                    <img src="/settings.png" alt="" id="settings-icon" />
                    <div className="drop-menu" id="settings-menu">
                        <div className="menu-list" id="mode">
                            Chế độ tối / sáng <img src="/dark-mode.png" alt="" />
                        </div>
                        <div className="menu-list">
                            Đăng xuất <img src="/sign-out.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="content-container">
                <nav className="sidebar">
                    {menuItems[role].map((item, index) => (
                        <div
                            key={index}
                            className={`menu-item ${
                                pathname === item.link ? "active" : "" // So sánh pathname với item.link
                            }`}
                        >
                            <span className="icon">
                                <img src={item.icon} alt="" />
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
