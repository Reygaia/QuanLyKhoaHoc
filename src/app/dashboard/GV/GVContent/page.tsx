"use client";

import "./GVcontent.css";
import Head from "next/head";
import React, { useEffect } from "react";
// import React from "react";
import Layout from "@dashboard/Layout/page";

export default function GVContent() {
    useEffect(() => {
        const projectData = {
            name: "",
            faculty: "",
            major: "",
            studentName: "",
            studentId: "",
            description: "",
            files: ["Tài liệu 1.pdf", "Tài liệu 2.docx"]
        };

        // Hàm để cập nhật form với dữ liệu từ CSDL
        const loadProjectData = () => {
            (document.getElementById("name") as HTMLInputElement).value = projectData.name;
            (document.getElementById("faculty") as HTMLInputElement).value = projectData.faculty;
            (document.getElementById("major") as HTMLInputElement).value = projectData.major;
            (document.getElementById("student-name") as HTMLInputElement).value = projectData.studentName;
            (document.getElementById("student-id") as HTMLInputElement).value = projectData.studentId;
            (document.getElementById("description") as HTMLTextAreaElement).value = projectData.description;

            const fileList = document.getElementById("fileList");
            projectData.files.forEach((file) => {
                const li = document.createElement("li");
                li.textContent = file;
                fileList?.appendChild(li);
            });
        };
        loadProjectData();
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Thông tin đồ án</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <div className="form-container">
                    <h2>Nội dung đăng ký đồ án</h2>
                    <div className="form-group">
                        <label htmlFor="name">Tên đề tài:</label>
                        <input type="text" id="name" placeholder="Nhập tên đề tài"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="faculty">Khoa:</label>
                            <input type="text" id="faculty" placeholder="Nhập khoa"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="major">Chuyên ngành:</label>
                            <input type="text" id="major" placeholder="Nhập chuyên ngành"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="student-name">Tên sinh viên:</label>
                            <input type="text" id="student-name" placeholder="VD: Nguyễn Văn A"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="student-id">Mã số sinh viên:</label>
                            <input type="text" id="student-id" placeholder="VD: 2180601234"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Mô tả đề tài:</label>
                        <textarea id="description" placeholder="Nhập mô tả về đề tài"></textarea>
                    </div>
                    <div className="list-file">
                        <h2>File đính kèm</h2>
                        <ul id="fileList"></ul>
                    </div>
                    <div className="form-actions">
                        <button id="approve-btn" className="btn-approve">Duyệt đồ án</button>
                        <button id="reject-btn" className="btn-reject">Không duyệt</button>
                    </div>
                </div>
            </Layout>
        </>
    );
}
