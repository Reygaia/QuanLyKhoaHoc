"use client";

import "./QLcontent.css";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@dashboard/Layout/page";

export default function QLContent() {
    const router = useRouter();

    useEffect(() => {
        const projectData = {
            name: "Tên đề tài mẫu",
            faculty: "Khoa Công nghệ thông tin",
            major: "Khoa học máy tính",
            studentName: "Nguyễn Văn A",
            studentId: "2180601234",
            description: "Mô tả ngắn gọn về đề tài.",
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

    const handleApprove = () => {
        alert("Đồ án đã được duyệt!");
        router.push("./QLActive"); // Chuyển về trang danh sách
    };

    const handleReject = () => {
        alert("Đồ án không được duyệt!");
        router.push("./QLActive"); // Chuyển về trang danh sách
    };

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
                        <input type="text" id="name" readOnly />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="faculty">Khoa:</label>
                            <input type="text" id="faculty" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="major">Chuyên ngành:</label>
                            <input type="text" id="major" readOnly />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="student-name">Tên sinh viên:</label>
                            <input type="text" id="student-name" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="student-id">Mã số sinh viên:</label>
                            <input type="text" id="student-id" readOnly />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Mô tả đề tài:</label>
                        <textarea id="description" readOnly></textarea>
                    </div>
                    <div className="list-file">
                        <h2>File đính kèm</h2>
                        <ul id="fileList"></ul>
                    </div>
                    <div className="form-actions">
                        <button 
                            id="approve-btn" 
                            className="btn-approve" 
                            onClick={handleApprove}
                        >
                            Duyệt đồ án
                        </button>
                        <button 
                            id="reject-btn" 
                            className="btn-reject" 
                            onClick={handleReject}
                        >
                            Không duyệt
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    );
}
