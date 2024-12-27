"use client";

import "./QLmanager.css";
import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "@dashboard/Layout/page";

export default function QLManager() {
    useEffect(() => {
        const studentBtn = document.getElementById('studentBtn');
        const teacherBtn = document.getElementById('teacherBtn');
        const studentForm = document.getElementById('Svform');
        const teacherForm = document.getElementById('Gvform');
        const submitBtnSv = document.getElementById('submit-btn-sv');
        const submitBtnGv = document.getElementById('submit-btn-gv');

        studentForm?.classList.add('hiddenform');
        teacherForm?.classList.add('hiddenform');

        studentBtn?.addEventListener('click', () => {
            studentForm?.classList.remove('hiddenform');
            teacherForm?.classList.add('hiddenform');
            studentBtn?.classList.add('activeform');
            teacherBtn?.classList.remove('activeform');
        });

        teacherBtn?.addEventListener('click', () => {
            teacherForm?.classList.remove('hiddenform');
            studentForm?.classList.add('hiddenform');
            teacherBtn?.classList.add('activeform');
            studentBtn?.classList.remove('activeform');
        });

        // Hàm xóa nội dung trong form
        const clearForm = (form) => {
            const inputs = form.querySelectorAll('input');
            inputs.forEach(input => input.value = '');
        };

        // Hàm xử lý tạo tài khoản
        const handleAccountCreation = (form) => {
            alert('Tạo tài khoản thành công!');
            clearForm(form); // Xóa dữ liệu trong form
        };

        submitBtnSv?.addEventListener('click', () => handleAccountCreation(studentForm));
        submitBtnGv?.addEventListener('click', () => handleAccountCreation(teacherForm));

    }, []);

    return (
        <>
            <Head>
                <meta charSet={"UTF-8"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Quản lý tài khoản</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Play&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Layout>
                <div className="cre-user">
                    <div className="option-buttons">
                        <button id="studentBtn" className="toggle-btn">Tạo tài khoản sinh viên</button>
                        <button id="teacherBtn" className="toggle-btn">Tạo tài khoản giảng viên</button>
                    </div>
                    {/*Form SV*/}
                    <div id="Svform" className="">
                        <h2>Tạo tài khoản sinh viên</h2>
                        <div className="form-group">
                            <label htmlFor="name">Tên sinh viên:</label>
                            <input type="text" id="name" placeholder="VD: Nguyễn Văn A"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="student-id">Mã số sinh viên:</label>
                                <input type="text" id="student-id" placeholder="VD: 2180601234"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="school-year">Niên khóa:</label>
                                <input type="text" id="school-year" placeholder="VD: 2021"/>
                            </div>
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
                                <label htmlFor="faculty">Lớp</label>
                                <input type="text" id="faculty" placeholder="VD: 21DTHB5"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="major">Hệ đào tạo</label>
                                <input type="text" id="major" placeholder="VD: Chính quy, không chính quy, ..."/>
                            </div>
                        </div>
                        <div className="submit-container">
                            <button type="button" className="submit-btn" id="submit-btn-sv">Tạo tài khoản</button>
                        </div>
                    </div>
                    {/*Form GV*/}
                    <div id="Gvform" className="">
                        <h3>Tạo tài khoản giảng viên</h3>
                        <div className="form-group">
                            <label htmlFor="name">Tên giảng viên:</label>
                            <input type="text" id="name" placeholder="VD: Đào Thị B"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="lecturer-id">Mã số giảng viên:</label>
                                <input type="text" id="lecturer-id" placeholder="Nhập mã số giảng viên"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="education">Trình độ học vấn:</label>
                                <input type="text" id="education" placeholder="VD: Thạc sĩ, Tiến sĩ..."/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="faculty">Khoa:</label>
                                <input type="text" id="faculty" placeholder="Nhập khoa"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="major">Chuyên ngành đào tạo:</label>
                                <input type="text" id="major" placeholder="Nhập chuyên ngành đào tạo"/>
                            </div>
                        </div>
                        <div className="submit-container">
                            <button type="button" className="submit-btn" id="submit-btn-gv">Tạo tài khoản</button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
