"use client";

import "./SVSignupProject.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "@dashboard/Layout/page";

export default function SVSignupProject() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [formValid, setFormValid] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const validateForm = () => {
            const name = (document.getElementById("name") as HTMLInputElement)?.value.trim();
            const faculty = (document.getElementById("faculty") as HTMLInputElement)?.value.trim();
            const major = (document.getElementById("major") as HTMLInputElement)?.value.trim();
            const studentName = (document.getElementById("student-name") as HTMLInputElement)?.value.trim();
            const studentId = (document.getElementById("student-id") as HTMLInputElement)?.value.trim();
            const description = (document.getElementById("description") as HTMLTextAreaElement)?.value.trim();

            const isValid = !!(name && faculty && major && studentName && studentId && description && selectedFiles.length > 0);
            setFormValid(isValid);

            if (isValid) {
                setShowError(false); // Ẩn thông báo lỗi nếu hợp lệ
            }
        };

        const inputs = document.querySelectorAll("input, textarea");
        inputs.forEach((input) => {
            input.addEventListener("input", validateForm);
        });

        const fileInput = document.getElementById("fileInput");
        fileInput?.addEventListener("change", validateForm);

        validateForm();

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("input", validateForm);
            });
            fileInput?.removeEventListener("change", validateForm);
        };
    }, [selectedFiles]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
        event.target.value = "";
    };

    const handleRemoveFile = (index: number) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        if (formValid) {
            setShowSuccess(true); // Hiện thông báo thành công
            setShowError(false); // Ẩn thông báo lỗi
        } else {
            setShowSuccess(false);
            setShowError(true); // Hiện thông báo lỗi nếu biểu mẫu không hợp lệ
        }
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Đăng ký đồ án</title>
            </Head>
            <Layout>
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm đồ án..." className="search-bar" />
                    <button className="register-btn">Đăng kí đồ án</button>
                </div>

                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Tên đề tài:</label>
                        <input type="text" id="name" placeholder="Nhập tên đề tài" />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="faculty">Khoa:</label>
                            <input type="text" id="faculty" placeholder="VD: Công nghệ thông tin" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="major">Chuyên ngành:</label>
                            <input type="text" id="major" placeholder="VD: Công nghệ phần mềm" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="student-name">Tên sinh viên:</label>
                            <input type="text" id="student-name" placeholder="Nhập tên sinh viên" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="student-id">Mã số sinh viên:</label>
                            <input type="text" id="student-id" placeholder="VD: 2180601234" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Mô tả đề tài:</label>
                        <textarea id="description" placeholder="Nhập mô tả đề tài"></textarea>
                    </div>
                    <div className="list-file">
                        <div className="choice-file">
                            <label htmlFor="fileInput" className="custom-upload">Chọn tập tin</label>
                            <input type="file" id="fileInput" multiple onChange={handleFileChange} />
                        </div>
                        <ul id="fileList">
                            {selectedFiles.map((file, index) => (
                                <li key={index}>
                                    {file.name}
                                    <button onClick={() => handleRemoveFile(index)}>Xóa</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="submit-container">
                        <button type="button" className="submit-btn" id="submit-btn" disabled={!formValid} onClick={handleSubmit}>Gửi</button>
                    </div>
                    {showSuccess && (
                        <div id="successMessage" className="toast success-toast">
                            <p>Đăng ký thành công!</p>
                            <a id="back-btn" href="SVProjects" className="back-link">Quay lại</a>
                        </div>
                    )}
                    {showError && (
                        <div id="errorMessage" className="toast error-toast">
                            <p>Thông tin chưa đầy đủ!</p>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
}
