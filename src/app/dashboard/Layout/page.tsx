"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation"; 
import "./Layout.css";
import { Play } from 'next/font/google'; 

const playFont = Play({
    subsets: ['latin'],
    weight: ['400', '700'],
});

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [role, setRole] = useState<"SV" | "GV" | "QL">("SV");
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode") === "true"; 
        setIsDarkMode(savedDarkMode); 
    
        if (savedDarkMode) {
            document.body.classList.add("dark");
        }
    
        const sidebar = document.querySelector(".sidebar");
        const menuToggle = document.querySelector(".menu-toggle");
        const settingsIcon = document.getElementById("settings-icon");
        const settingsMenu = document.getElementById("settings-menu");
        const modeBtn = document.getElementById("mode");
    
        const toggleSidebar = () => {
            sidebar?.classList.toggle("hidden");
        };
    
        const toggleSettingsMenu = (event: MouseEvent) => {
            event.stopPropagation();
            settingsMenu?.classList.toggle("show");
        };
    
        const handleClickOutside = (event: MouseEvent) => {
            if (
                settingsMenu && 
                !settingsMenu.contains(event.target as Node) &&
                settingsIcon && 
                !settingsIcon.contains(event.target as Node)
            ) {
                settingsMenu?.classList.remove("show");
            }
        };
    
        const toggleDarkMode = () => {
            setIsDarkMode((prev) => !prev);
            document.body.classList.toggle("dark");
            localStorage.setItem("darkMode", !isDarkMode ? "true" : "false");
        };
    
        menuToggle?.addEventListener("click", toggleSidebar);
        settingsIcon?.addEventListener("click", toggleSettingsMenu);
        document.addEventListener("click", handleClickOutside);
        modeBtn?.addEventListener("click", toggleDarkMode);
    
        return () => {
            menuToggle?.removeEventListener("click", toggleSidebar);
            settingsIcon?.removeEventListener("click", toggleSettingsMenu);
            document.removeEventListener("click", handleClickOutside);
            modeBtn?.removeEventListener("click", toggleDarkMode);
        };
    }, [isDarkMode]);
    

    const handleLogout = () => {
        router.push("/dashboard/Login"); 
    };

    const menuItems = {
        SV: [
            { link: "/dashboard/SV/SVHome", text: "Trang chủ", icon: { light: "/home.png", dark: "/darkhome.png" } },
            { link: "/dashboard/SV/SVProfile", text: "Hồ sơ sinh viên", icon: { light: "/avt.png", dark: "/dark.png" } },
            { link: "/dashboard/SV/SVProjects", text: "Đồ án", icon: { light: "/checklist.png", dark: "/darkcheck.png" } },
        ],
        GV: [
            { link: "/dashboard/GV/GVHome", text: "Trang chủ", icon: { light: "/home.png", dark: "/darkhome.png" } },
            { link: "/dashboard/GV/GVProfile", text: "Hồ sơ giảng viên", icon: { light: "/avt.png", dark: "/dark.png" } },
            { link: "/dashboard/GV/GVProjects", text: "Quản lý đồ án", icon: { light: "/checklist.png", dark: "/darkcheck.png" } },
        ],
        QL: [
            { link: "/dashboard/QL/QLHome", text: "Trang chủ", icon: { light: "/home.png", dark: "/darkhome.png" } },
            { link: "/dashboard/QL/QLManager", text: "Quản lý tài khoản", icon: { light: "/avt.png", dark: "/dark.png" } },
            { link: "/dashboard/QL/QLContent", text: "Thông tin đồ án", icon: { light: "/checklist.png", dark: "/darkcheck.png" } },
            { link: "/dashboard/QL/QLActive", text: "Hoạt động", icon: { light: "/blog.png", dark: "/darkblog.png" } },
        ],
    };


    return (
        <div className={`${playFont.className} main-container`}>
            <header className="header">
                <button className="menu-toggle">
                    <img src={isDarkMode ? "/darklist.png" : "/list.png"} alt="menu" />
                </button>
                <div className="settings-icon">
                    <img src={isDarkMode ? "/darkgear.png" : "/gear.png"} alt="settings" id="settings-icon" />
                    <div className="drop-menu" id="settings-menu">
                        <div className="menu-list" id="mode">
                            Chế độ tối / sáng{" "}
                            <img 
                                src={isDarkMode ? "/moon.png" : "/summer.png"} 
                                alt="dark mode" 
                            />
                        </div>
                        <div className="menu-list" onClick={handleLogout} style={{ cursor: "pointer" }}>
                            Đăng xuất <img src={isDarkMode ? "/darkout.png" : "/signout.png"} alt="sign out" />
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
                                <img 
                                    src={isDarkMode ? item.icon.dark : item.icon.light} 
                                    alt={item.text} 
                                />
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
