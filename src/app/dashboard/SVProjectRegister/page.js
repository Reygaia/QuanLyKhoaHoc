const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const content = document.querySelector('.content');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    content.classList.toggle('hidden');
});
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menuItems.forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
    });
});
const settingsIcon = document.getElementById('settings-icon');
const settingsMenu = document.getElementById('settings-menu');

settingsIcon.addEventListener('click', () => {
    settingsMenu.style.display =
        settingsMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!settingsIcon.contains(event.target) && !settingsMenu.contains(event.target)) {
        settingsMenu.style.display = 'none';
    }
});
settingsIcon.addEventListener('click', () => {
    settingsMenu.classList.toggle('show');
});
// Mode
const modeBtn = document.getElementById('mode');
const body = document.body;

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
})
document.querySelector("textarea").addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});
document.getElementById('submit-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const faculty = document.getElementById('faculty').value.trim();
    const major = document.getElementById('major').value.trim();
    const studentName = document.getElementById('student-name').value.trim();
    const studentId = document.getElementById('student-id').value.trim();
    const description = document.getElementById('description').value.trim();
    const successMessage = document.getElementById('successMessage');

    if (name && faculty && major && studentName && studentId && description) {
        // Hiển thị thông báo thành công
        successMessage.classList.add("show");
        setTimeout(() => {
            successMessage.classList.remove("show");
        }, 3000); // Thông báo sẽ ẩn sau 3 giây
    } else {
        alert("Bạn chưa nhập đủ các mục!");
    }
});
// Tạo canvas và lấy context
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

// Đảm bảo canvas có kích thước đầy đủ màn hình
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Lớp pháo hoa
class Firework {
    constructor(x, y, colors) {
        this.x = x;
        this.y = y;
        this.colors = colors;
        this.size = Math.random() * 3 + 2;
        this.speedX = (Math.random() - 0.5) * 6;
        this.speedY = (Math.random() - 0.5) * 6;
        this.opacity = 1;
        this.life = 0;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        this.opacity -= 0.01;
        this.size *= 0.98;

        if (this.life > this.maxLife) {
            this.opacity = 500; // Pháo hoa biến mất sau thời gian sống
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.colors[Math.floor(Math.random() * this.colors.length)];
        ctx.fill();
    }
}

// Danh sách pháo hoa
let fireworks = [];

// Hàm khởi tạo pháo hoa
function launchFireworks() {
    for (let i = 0; i < 300; i++) {
        fireworks.push(new Firework(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            ['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#FF00FF']
        ));
    }
}

// Vẽ và cập nhật pháo hoa
function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();

        // Xóa những pháo hoa đã kết thúc
        if (fireworks[i].opacity <= 0) {
            fireworks.splice(i, 1);
        }
    }

    requestAnimationFrame(animateFireworks);
}

// Gọi hiệu ứng pháo hoa khi có sự kiện
document.getElementById('submit-btn').addEventListener('click', function () {
    // Kiểm tra thông tin (hoặc thêm các điều kiện khác ở đây)
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Khởi tạo và chạy hiệu ứng pháo hoa
    launchFireworks();
    animateFireworks();
});
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'none'; // Ẩn lỗi ngay khi bắt đầu nhập
    });
});