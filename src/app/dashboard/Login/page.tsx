import "./Login.css";
// import Image from "next/image";
import Head from "next/head";
<<<<<<< Updated upstream
=======
import { Play } from 'next/font/google'; // Dùng next/font thay vì @next/font

const playFont = Play({
    subsets: ['latin'],
    weight: ['400', '700'], // Điều chỉnh độ đậm nếu cần
});
>>>>>>> Stashed changes

export default function Login() {
    return (
        <>
            <Head> {/*<Head> hoặc <div> đều đc trừ <head>(báo lỗi)*/}
                <meta charSet={"UTF-8"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Đăng nhập</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <div> {/*Báo lỗi nếu thay thẻ bằng <body>*/}
                <div className="login-container">
                    <img src="/logo-dai-hoc-hutech_012634748.png" alt=""/> {/*xài <Image> rắc rối hơn (chắc vậy)*/}
                    <div className="login-box">
                        <h2>Đăng nhập</h2>
                        <form action="#" method="POST">
                            <div className="form-group">
                                <label htmlFor="username">Tài khoản</label>
                                <input type="text" id="username" name="username" placeholder="Nhập tài khoản"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input type="password" id="password" name="password" placeholder="Nhập mật khẩu"/>
                            </div>
                            <p className="help-text">
                                Đăng nhập không được? <a href="">Liên hệ quản lý</a>
                            </p>
                            <button type="submit" className="btn-login">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
