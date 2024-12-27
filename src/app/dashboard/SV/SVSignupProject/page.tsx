"use client";

import "./SVSignupProject.css";
import Head from "next/head";
import React, { useState, ChangeEvent } from "react";
import Layout from "@dashboard/Layout/page";
import { useRouter } from "next/navigation"; // Import useRouter để điều hướng

export default function SVSignupProject() {
    const [formData, setFormData] = useState({
        name: "",
        faculty: "",
        major: "",
        studentName: "",
        studentId: "",
        description: "",
        projectLevel: "", // Thêm trường cho "Đồ án thuộc"
    });
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [showSubmitSuccess, setShowSubmitSuccess] = useState(false); // Thêm state cho thông báo thành công khi gửi
    const router = useRouter(); // Khởi tạo useRouter để điều hướng

    // Xử lý thay đổi input
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value.trim()
        }));
    };

    // Xử lý thay đổi lựa chọn "Đồ án thuộc"
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    // Xử lý thay đổi file
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    // Xử lý gửi biểu mẫu
    const submitForm = async () => {
        const confirmed = window.confirm("Bạn có chắc chắn đăng kí đồ án này?");
        if (confirmed) {
            setShowSubmitSuccess(true);
            setTimeout(() => {
                router.push("/dashboard/SV/SVProjects");
            }, 2000); // Delay 2 giây 
        }
    };

    const closeModal = () => {
        setShowSubmitSuccess(false); 
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Đăng ký đồ án</title>
            </Head>
            <Layout>
                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Tên đề tài:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nhập tên đề tài"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="faculty">Khoa:</label>
                            <input
                                type="text"
                                id="faculty"
                                placeholder="Nhập khoa"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="major">Chuyên ngành:</label>
                            <input
                                type="text"
                                id="major"
                                placeholder="Nhập chuyên ngành"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="studentName">Tên sinh viên:</label>
                            <input
                                type="text"
                                id="studentName"
                                placeholder="Nhập tên sinh viên"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="studentId">Mã số sinh viên:</label>
                            <input
                                type="text"
                                id="studentId"
                                placeholder="Nhập mã số sinh viên"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="teacherName">Giảng viên hướng dẫn:</label>
                            <input
                                type="text"
                                id="teacherName"
                                placeholder="Nhập tên giảng viên"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectLevel">Đồ án thuộc:</label>
                            <select
                                id="projectLevel"
                                value={formData.projectLevel}
                                onChange={handleSelectChange}
                            >
                                <option value="">Chọn loại đồ án</option>
                                <option value="Cơ sở">Đồ án cơ sở</option>
                                <option value="Chuyên ngành">Đồ án chuyên ngành</option>
                                <option value="Tốt nghiệp">Đồ án tốt nghiệp</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Mô tả đề tài:</label>
                        <textarea
                            id="description"
                            placeholder="Nhập mô tả đề tài"
                            onChange={handleInputChange}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }}
                            style={{ overflow: 'hidden' }}
                        ></textarea>
                    </div>
                    <div className="list-file">
                        <div className="choice-file">
                            <label htmlFor="fileInput" className="custom-upload">
                                Chọn tập tin
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                multiple
                                onChange={handleFileChange}
                            />
                        </div>
                        <ul id="fileList">
                            {selectedFiles.map((file, index) => (
                                <li key={index}>
                                    {file.name}
                                    <button onClick={() => setSelectedFiles(prev => prev.filter((_, i) => i !== index))}>Xóa</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="submit-container">
                        <button
                            type="button"
                            className="submit-btn"
                            onClick={submitForm}
                        >
                            Gửi
                        </button>
                    </div>

                    {showSubmitSuccess && (
                        <div className="modal success-modal">
                            <p>Đăng ký đồ án thành công!</p>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
}
