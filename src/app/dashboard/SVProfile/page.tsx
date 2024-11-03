import "./SVprofile.css";
// import Image from "next/image";
import Head from "next/head";

export default function SVProfile() {
    return (
        <>
            <Head>
                <meta charSet={"UTF-8"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Hồ sơ cá nhân</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            {/*<body>*/} {/*Tương tự SVProjectRegister*/}
                <div className="main-container">
                    <header className="header">
                        <button className="menu-toggle"><img src="/list_12232288.png" alt=""/></button>
                        <div className="settings-icon"><img src="/gear_10887995.png" alt="" id="settings-icon"/>
                            <div className="drop-menu" id="settings-menu">
                                <div className="menu-list" id="mode">Chế độ sáng <img src="/summer_13742912.png" alt=""/>
                                </div>
                                <div className="menu-list">Đăng xuất <img src="/sign-out_5949866.png" alt=""/></div>
                            </div>
                        </div>
                    </header>
                    <div className="content-container">
                        <nav className="sidebar">
                            <div className="menu-item">
                                <span className="icon"><img src="/home_12237107.png" alt=""/></span> <a href="SVHome" className="btn">Trang chủ</a>
                            </div>
                            <div className="menu-item  active">
                                <span className="icon"><img src="/candidate_18276434.png" alt=""/></span> <a href="SVProfile" className="btn">Hồ sơ cá nhân</a>
                            </div>
                            <div className="menu-item">
                                <span className="icon"><img src="/book_10907215.png" alt=""/></span> <a href="SVProjects" className="btn">Đồ án</a>
                            </div>
                        </nav>
                        <div className="content">
                            <div className="profile-card">
                                <div className="avatar">
                                    <img src="/profile_7310896.png" alt="Avatar"/>
                                </div>
                                <div className="info">
                                    <h2>THÔNG TIN CÁ NHÂN</h2>
                                    <div className="line"></div>
                                    <p>Họ và tên: </p>
                                    <p>Mã số sinh viên: </p>
                                    <p>Lớp: <span>__________</span> Niên khóa: <span>__________</span></p>
                                    <p>Khoa: </p>
                                    <p>Hệ đào tạo: </p>
                                    <p>Chương trình: </p>
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="change-info-btn">Thay đổi thông tin</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</body>*/}
        </>
    );
};
