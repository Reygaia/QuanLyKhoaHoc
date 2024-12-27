"use client";

import "./SVprojects.css";
import Head from "next/head";
import React from "react";
import Layout from "@dashboard/Layout/page";

export default function SVProjects() {
    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Đồ án</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <Layout>
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm đồ án..." className="search-bar"/>
                    <a href="SVSignupProject" className="button-link">Đăng kí đồ án</a>
                </div>

                <div className="project-list">
                <h2>Đồ án đang thực hiện</h2>
                    <section>
                        <table>
                            <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Mô tả</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 1</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 2</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 3</a>
                                </td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                    <h2>Đồ án đã hoàn thành</h2>
                    <section>
                        <table>
                            <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Mô tả</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 1</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 2</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 3</a>
                                </td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                    <h2>Đồ án đang đăng ký</h2>
                    <section>
                        <table>
                            <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Mô tả</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 1</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 2</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 3</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 1</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 2</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 3</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 1</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="SVProcess">Đồ án 1</a>
                                </td>
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
