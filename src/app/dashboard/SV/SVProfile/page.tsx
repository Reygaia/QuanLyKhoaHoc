"use client";

import "./SVprofile.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "@dashboard/Layout/page";

export default function GVProfile() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Lấy trạng thái dark mode từ localStorage khi component mount
    useEffect(() => {
        const savedMode = localStorage.getItem("isDarkMode");
        if (savedMode === "true") {
            setIsDarkMode(true);
            document.body.classList.add("dark");
        }
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hồ sơ cá nhân</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <div className="profile-card">
                    <div className="avatar">
                        <img 
                            src={isDarkMode ? "/profile.png" : "/darkavt.png"} 
                            alt="Avatar" 
                        />
                    </div>
                    <div className="info">
                        <h2>THÔNG TIN CÁ NHÂN</h2>
                        <div className="line"></div>
                        <p>Họ và tên: </p>
                        <p>Mã số sinh viên: </p>
                        <p>Lớp: <span>__________</span> Niên khóa: <span>__________</span></p>
                        <p>Khoa: </p>
                        <p>Hệ đào tạo: </p>
                        <p>Chương trình: </p>
                    </div>
                </div>
            </Layout>
        </>
    );
}
