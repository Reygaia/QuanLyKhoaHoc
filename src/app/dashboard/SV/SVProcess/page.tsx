"use client";

import "./SVprocess.css";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Layout from "@dashboard/Layout/page";

export default function SVProcess() {
    // Dùng đối tượng để theo dõi trạng thái nộp của từng tuần và thời gian nộp
    const [submissionStatus, setSubmissionStatus] = useState<{ [week: string]: { submitted: boolean, submissionTime: string } }>({
        "Tuần 1": { submitted: false, submissionTime: "" },
        "Tuần 2": { submitted: false, submissionTime: "" },
        "Tuần 3": { submitted: false, submissionTime: "" },
    });

    // Lấy thông tin từ localStorage để giữ trạng thái nộp và thời gian nộp sau khi tải lại trang
    useEffect(() => {
        const savedStatus = localStorage.getItem("submissionStatus");
        if (savedStatus) {
            setSubmissionStatus(JSON.parse(savedStatus));
        }
    }, []);

    // Cập nhật trạng thái và thời gian khi người dùng nhấn nộp cho một tuần
    const handleSubmit = (week: string) => {
        const currentTime = new Date().toLocaleString(); // Lấy thời gian hiện tại từ máy tính người dùng
        setSubmissionStatus((prevStatus) => {
            const newStatus = { 
                ...prevStatus, 
                [week]: { 
                    submitted: true, 
                    submissionTime: currentTime 
                } 
            };
            localStorage.setItem("submissionStatus", JSON.stringify(newStatus)); // Lưu trạng thái vào localStorage
            return newStatus;
        });
    };

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
                    <input type="text" placeholder="Tìm kiếm đồ án..." className="search-bar" />
                    <a href="SVSignupProject" className="button-link">Đăng kí đồ án</a>
                </div>
                <div className="project-list">
                    <section>
                        <h3>Đồ án đang thực hiện</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tuần</th>
                                    <th>Nộp file</th>
                                    <th>Thời gian nộp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {["Tuần 1", "Tuần 2", "Tuần 3"].map((week) => (
                                    <tr key={week}>
                                        <td>{week}</td>
                                        <td>
                                            {submissionStatus[week].submitted ? (
                                                <span>Đã nộp</span> // Hiển thị "Đã nộp" nếu đã nộp
                                            ) : (
                                                <a
                                                    href="SVUpfile"
                                                    onClick={() => handleSubmit(week)} // Khi nhấn, sẽ thay đổi trạng thái và ghi nhận thời gian nộp
                                                >
                                                    Tải lên
                                                </a>
                                            )}
                                        </td>
                                        <td>
                                            {submissionStatus[week].submitted ? (
                                                submissionStatus[week].submissionTime
                                            ) : (
                                                "-"
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </Layout>
        </>
    );
}
