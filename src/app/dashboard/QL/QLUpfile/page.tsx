"use client";

import "./QLupfile.css";
import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "@dashboard/Layout/page";

export default function GVUpfile() {
    useEffect(() => {
        const fileList = document.getElementById("fileList");
        const existingFiles: string[] = [];
        const existingDescription = "Mô tả mẫu, không thể chỉnh sửa"; 

        
        existingFiles.forEach((fileName) => {
            const li = document.createElement("li");
            li.textContent = fileName;
            fileList?.appendChild(li);
        });

        // Hiển thị nội dung mô tả
        const description = document.getElementById("description") as HTMLTextAreaElement;
        if (description) {
            description.value = existingDescription;
            description.readOnly = true; 
        }

        // Điều chỉnh chiều cao textarea
        document.querySelector("textarea")?.addEventListener("input", function () {
            const textarea = this as HTMLTextAreaElement;
            textarea.style.height = "auto"; 
            textarea.style.height = textarea.scrollHeight + "px";
        });
    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Tập tin đính kèm</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <Layout>
                
                <div className="upload-container">
                    <h2>Nội dung báo cáo</h2>
                    <div className="list-file">
                        <p>Danh sách file đính kèm</p>
                        <ul id="fileList"></ul>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Mô tả:</label>
                        <textarea id="description" placeholder="Thông tin mô tả của sinh viên."></textarea>
                    </div>
                    <div className="upbtn">
                        <a href="QLProcess">Quay lại</a>
                    </div>
                </div>
            </Layout>
        </>
    );
}
