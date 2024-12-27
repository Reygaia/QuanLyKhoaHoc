"use client";

import "./QLprojects.css";
import Head from "next/head";
// import React, { useEffect } from "react";
import React from "react";
import Layout from "@dashboard/Layout/page";

export default function GVProjects() {
    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Quản lý đồ án</title>
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
                        <h3>Đồ án đang được thực hiện</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Tên</th>
                                <th></th>
                                <th>Mô tả</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><a href="QLProcess" className="list">OnlyYou</a></td>
                                <td></td>
                                <td>Website bán linh kiện điện tử</td>
                            </tr>
                            <tr>
                                <td><a href="QLProcess">Marketiny</a></td>
                                <td></td>
                                <td>Website chợ trực tuyến</td>
                            </tr>
                            <tr>
                                <td><a href="QLProcess">Happy Bird</a></td>
                                <td></td>
                                <td>Game Offline</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
                <div className="project-list">
                    <section>
                        <h3>Đồ án đã hoàn thành</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Mô tả</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><a href="QLProcess" className="list">Đồ án 1</a></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><a href="QLProcess">Đồ án 2</a></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><a href="QLProcess">Đồ án 3</a></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </Layout>
        </>
    );
}
