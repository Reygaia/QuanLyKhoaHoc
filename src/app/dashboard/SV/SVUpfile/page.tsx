"use client"; // Biến component thành client component

import "./SVupfile.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
// import React from "react";
import Layout from "@dashboard/Layout/page";

export default function SVUpfile() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    useEffect(() => {
        const fileInput = document.getElementById("fileInput") as HTMLInputElement;

        const handleFileChange = (event: Event) => {
            const input = event.target as HTMLInputElement;
            if (input.files) {
                const files = Array.from(input.files);
                setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
            }
            // Reset giá trị của input file
            input.value = "";
        };
        fileInput?.addEventListener("change", handleFileChange);

        return () => {
            fileInput?.removeEventListener("change", handleFileChange);
        };
    }, []);

    const handleRemoveFile = (index: number) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tải lên tập tin</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm đồ án..." className="search-bar"/>
                    <a href="SVSignupProject" className="button-link">Đăng kí đồ án</a>
                </div>
                <div className="upload-container">
                    <h2>Nộp file</h2>
                    <div className="list-file">
                        <div className="choice-file">
                            <label htmlFor="fileInput" className="custom-upload">Chọn tập tin</label>
                            <input type="file" id="fileInput" multiple />
                        </div>
                        <ul id="fileList">
                            {selectedFiles.map((file, index) => (
                                <li key={index}>
                                    {file.name}
                                    <button onClick={() => handleRemoveFile(index)}>Xóa</button>
                                </li>
                            ))}
                        </ul>
                        <p id="fileCount">Số lượng tệp đã chọn: {selectedFiles.length}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Mô tả:</label>
                        <textarea id="description" placeholder="Nhập mô tả đề tài"></textarea>
                    </div>
                    <div className="upbtn">
                        <a href="SVProcess">Nộp</a>
                    </div>
                </div>
            </Layout>
        </>
    );
}
