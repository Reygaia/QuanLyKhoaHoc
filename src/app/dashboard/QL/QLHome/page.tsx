"use client";

import "./QLhome.css";
import Head from "next/head";
import React from "react";
import Layout from "@dashboard/Layout/page";

export default function QLHome() {
    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Trang chủ</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <p>Chào mừng bạn đến với trang chủ hệ thống quản lý khoa học sinh viên!</p>
            </Layout>
        </>
    );
}
