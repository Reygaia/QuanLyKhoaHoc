"use client";

import "./SVupfile.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
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

    // Hàm xử lý gửi và xác nhận
    const handleSubmit = () => {
        const isConfirmed = window.confirm("Bạn có chắc chắn muốn nộp các tập tin này?");
        if (isConfirmed) {
            // Tiến hành gửi dữ liệu, ví dụ: điều hướng hoặc gọi API
            alert("Đã nộp thành công!");
            triggerFireworks(); // Hiển thị hiệu ứng pháo hoa khi nộp

            // Ví dụ chuyển hướng đến trang khác:
            window.location.href = "SVProcess"; // hoặc sử dụng Router nếu bạn sử dụng Next.js
        } else {
            alert("Hành động đã bị hủy.");
        }
    };

    // Hàm tạo hiệu ứng pháo hoa
    const triggerFireworks = () => {
        const canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const particles: any[] = [];
        const colors = ["#ff0044", "#ffbb00", "#00cc99", "#6600ff"];

        class Particle {
            constructor(public x: number, public y: number, public color: string) {
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }
            size: number;
            speedX: number;
            speedY: number;

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.size *= 0.98;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const createFirework = (x: number, y: number) => {
            const count = 100;
            for (let i = 0; i < count; i++) {
                const color = colors[Math.floor(Math.random() * colors.length)];
                particles.push(new Particle(x, y, color));
            }
        };

        createFirework(window.innerWidth / 2, window.innerHeight / 2);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Loại bỏ các particle nhỏ
            particles.filter(p => p.size > 0.5);

            requestAnimationFrame(animate);
        };

        animate();
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
                    <input type="text" placeholder="Tìm kiếm đồ án..." className="search-bar" />
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
                        <button type="button" onClick={handleSubmit}>Nộp</button>
                    </div>
                </div>
            </Layout>
        </>
    );
}
