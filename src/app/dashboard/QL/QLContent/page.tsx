"use client";

import "./QLcontent.css";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Dùng để điều hướng
import Layout from "@dashboard/Layout/page";

export default function QLContent() {
    const router = useRouter();

    useEffect(() => {
        const projectData = {
            name: "Dự án AI thông minh",
            faculty: "Công nghệ thông tin",
            major: "Khoa học máy tính",
            studentName: "Nguyễn Văn A",
            studentId: "2180601234",
            teacherName: "TS. Trần Văn B",
            projectLevel: "Tốt nghiệp",
            description: "Nghiên cứu và phát triển trí tuệ nhân tạo.",
            files: ["Tài liệu 1.pdf", "Tài liệu 2.docx"],
        };

        // Hàm để cập nhật form với dữ liệu từ CSDL
        const loadProjectData = () => {
            (document.getElementById("name") as HTMLInputElement).value = projectData.name;
            (document.getElementById("faculty") as HTMLInputElement).value = projectData.faculty;
            (document.getElementById("major") as HTMLInputElement).value = projectData.major;
            (document.getElementById("student-name") as HTMLInputElement).value = projectData.studentName;
            (document.getElementById("student-id") as HTMLInputElement).value = projectData.studentId;
            (document.getElementById("teacherName") as HTMLInputElement).value = projectData.teacherName;
            (document.getElementById("projectLevel") as HTMLSelectElement).value = projectData.projectLevel;
            (document.getElementById("description") as HTMLTextAreaElement).value = projectData.description;

            const fileList = document.getElementById("fileList");
            fileList!.innerHTML = ""; // Xóa danh sách cũ nếu có
            projectData.files.forEach((file) => {
                const li = document.createElement("li");
                li.textContent = file;
                fileList?.appendChild(li);
            });
        };

        loadProjectData();
    }, []);

    // Xử lý khi duyệt đồ án
    const handleApprove = () => {
        alert("Đồ án đã được duyệt thành công!");
        router.push("./QLActive"); 
    };

    // Xử lý khi không duyệt đồ án
    const handleReject = () => {
        alert("Đồ án không được duyệt!");
        router.push("./QLActive"); 
    };

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Thông tin đồ án</title>
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
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="teacherName">Giảng viên hướng dẫn:</label>
                            <input type="text" id="teacherName" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectLevel">Đồ án thuộc:</label>
                            <select id="projectLevel" disabled>
                                <option value="Cơ sở">Đồ án cơ sở</option>
                                <option value="Chuyên ngành">Đồ án chuyên ngành</option>
                                <option value="Tốt nghiệp">Đồ án tốt nghiệp</option>
                            </select>
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
                        <button id="approve-btn" className="btn-approve" onClick={handleApprove}>
                            Duyệt đồ án
                        </button>
                        <button id="reject-btn" className="btn-reject" onClick={handleReject}>
                            Không duyệt
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    );
}
