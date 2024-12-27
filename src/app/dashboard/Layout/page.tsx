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
    const [role, setRole] = useState<"SV" | "GV" | "QL">("GV"); // Thay đổi role SV, GV, QL trong ngoặc tròn để chuyển đổi role giao diện
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // Lấy trạng thái chế độ tối từ localStorage nếu có
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            setIsDarkMode(true);
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    
        const sidebar = document.querySelector(".sidebar");
        const menuToggle = document.querySelector(".menu-toggle");
        const content = document.querySelector(".content");
        const settingsIcon = document.getElementById("settings-icon");
        const settingsMenu = document.getElementById("settings-menu");
        const modeBtn = document.getElementById("mode");
        const body = document.body;
    
        if (menuToggle && sidebar && content) {
            menuToggle.addEventListener("click", () => {
                // Toggle sidebar visibility and content size
                sidebar.classList.toggle("hidden");
                content.classList.toggle("fullsize");
            });
        }
    
        // Các hàm xử lý sự kiện
        const toggleSettingsMenu = (event: MouseEvent) => {
            event.stopPropagation();
            settingsMenu?.classList.toggle("show");
        };
    
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !settingsIcon?.contains(event.target as Node) &&
                !settingsMenu?.contains(event.target as Node)
            ) {
                settingsMenu?.classList.remove("show");
            }
        };
    
        const toggleDarkMode = () => {
            setIsDarkMode((prev) => !prev);
            if (!isDarkMode) {
                document.body.classList.add("dark");
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove("dark");
                localStorage.setItem('darkMode', 'false');
            }
        };
    
        // Gắn sự kiện vào các phần tử
        settingsIcon?.addEventListener("click", toggleSettingsMenu);
        document.addEventListener("click", handleClickOutside);
        modeBtn?.addEventListener("click", toggleDarkMode);
    
        return () => {
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
            { link: "/dashboard/SV/SVHome", text: "Trang chủ", iconLight: "/home.png", iconDark: "/darkhome.png" },
            { link: "/dashboard/SV/SVProfile", text: "Hồ sơ sinh viên", iconLight: "/avt.png", iconDark: "/dark.png" },
            { link: "/dashboard/SV/SVProjects", text: "Đồ án", iconLight: "/checklist.png", iconDark: "/darkcheck.png" },
        ],
        GV: [
            { link: "/dashboard/GV/GVHome", text: "Trang chủ", iconLight: "/home.png", iconDark: "/darkhome.png" },
            { link: "/dashboard/GV/GVProfile", text: "Hồ sơ giảng viên", iconLight: "/avt.png", iconDark: "/dark.png" },
            { link: "/dashboard/GV/GVProjects", text: "Quản lý đồ án", iconLight: "/checklist.png", iconDark: "/darkcheck.png" },
        ],
        QL: [
            { link: "/dashboard/QL/QLHome", text: "Trang chủ", iconLight: "/home.png", iconDark: "/darkhome.png" },
            { link: "/dashboard/QL/QLManager", text: "Quản lý tài khoản", iconLight: "/avt.png", iconDark: "/dark.png" },
            { link: "/dashboard/QL/QLProjects", text: "Thông tin đồ án", iconLight: "/checklist.png", iconDark: "/darkcheck.png" },
            { link: "/dashboard/QL/QLActive", text: "Hoạt động", iconLight: "/blog.png", iconDark: "/darkblog.png" },
        ],
    };

    return (
        <div className={`${playFont.className} main-container`}>
            <header className="header">
                <button className="menu-toggle">
                    <img        
                        src={isDarkMode ? "/darklist.png" : "/list.png"} 
                        alt="dark mode"  
                    />
                </button>
                <div className="settings-icon">
                    <img src={isDarkMode ? "/darkgear.png" : "/gear.png"} 
                     alt="settings" id="settings-icon" />
                    <div className="drop-menu" id="settings-menu">
                        <div className="menu-list" id="mode">Chế độ tối / sáng{" "}
                            <img src={isDarkMode ? "/moon.png" : "/summer.png"} alt="dark mode"/>
                        </div>
                        <div className="menu-list" onClick={handleLogout} style={{ cursor: "pointer" }}>
                            Đăng xuất <img 
                                        src={isDarkMode ? "/darkout.png" : "/signout.png"} 
                                        alt="dark mode"  />
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
                                <img src={isDarkMode ? item.iconDark : item.iconLight} alt={item.text} />
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
