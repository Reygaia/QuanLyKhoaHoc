"use client";

import "./GVprofile.css";
import Head from "next/head";
import React from "react";
import Layout from "@dashboard/Layout/page";

export default function GVProfile() {
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
                        <img src="/user-avatar.png" alt="Avatar"/>
                    </div>
                    <div className="info">
                        <h2>THÔNG TIN CÁ NHÂN</h2>
                        <div className="line"></div>
                        <p>Họ và tên: </p>
                        <p>Mã số giảng viên: </p>
                        <p>Khoa: </p>
                        <p>Chuyên ngành đào tạo: </p>
                        <p>Trình độ học vấn: </p>
                    </div>
                </div>
            </Layout>
        </>
    );
}
