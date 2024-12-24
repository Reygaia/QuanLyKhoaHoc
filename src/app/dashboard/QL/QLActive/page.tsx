"use client";

import "./QLactive.css";
import Head from "next/head";
// import React, { useEffect } from "react";
import React from "react";
import Layout from "@dashboard/Layout/page";

export default function QLActive() {
    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hoạt động</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <div className="project-list">
                    <section>
                        <h3>Đồ án đang được chờ duyệt</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Trạng thái</th>
                                <th>Ngày nộp</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><a href="QLContent" className="list">DragonBleaPiece</a></td>
                                <td>Chờ duyệt</td>
                                <td>07:48 - 04/12/2024</td>
                            </tr>
                            <tr>
                                <td><a href="QLContent">AutoWinx</a></td>
                                <td>Chờ duyệt</td>
                                <td>13:20 - 30/11/2024</td>
                            </tr>
                            <tr>
                                <td><a href="QLContent">Bet88</a></td>
                                <td>Chờ duyệt</td>
                                <td>18:58 - 28/11/2024</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </Layout>
        </>
    );
}
