"use client";

import "./QLprocess.css";
import Head from "next/head";
import React from "react";
import Layout from "@dashboard/Layout/page";

export default function GVProcess() {
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
            <Layout>
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm đồ án..." className="search-bar"/>
                </div>
                <div className="project-list">
                    <section>
                        <h3>Thông tin đồ án</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Tuần</th>
                                <th>File đính kèm</th>
                                <th>Thời gian nộp</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Tuần 1</td>
                                <td><a href="QLUpfile">Pic1.jpg</a></td>
                                <td>10:16 - 02/12/2024</td>
                            </tr>
                            <tr>
                                <td>Tuần 2</td>
                                <td><a href="QLUpfile">TaiLieu1.docx</a></td>
                                <td>15:48 - 30/11/2024</td>
                            </tr>
                            <tr>
                                <td>Tuần 3</td>
                                <td><a href="QLUpfile">Pic2.png</a></td>
                                <td>22:25 - 07/12/2024</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </Layout>
        </>
    );
}
