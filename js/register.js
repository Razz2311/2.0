document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        // Lấy giá trị từ form
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Validate form
        let isValid = true;
        
        // Kiểm tra username
        if (username.length < 4) {
            document.getElementById('username-error').textContent = 'Tên đăng nhập phải có ít nhất 4 ký tự';
            isValid = false;
        }
        
        // Kiểm tra email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Email không hợp lệ';
            isValid = false;
        }
        
        // Kiểm tra password
        if (password.length < 6) {
            document.getElementById('password-error').textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
            isValid = false;
        }
        
        // Kiểm tra confirm password
        if (password !== confirmPassword) {
            document.getElementById('confirm-error').textContent = 'Mật khẩu không khớp';
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Hiển thị loading
        document.querySelector('.loading').classList.add('active');
        
        // Giả lập thời gian xử lý
        setTimeout(function() {
            // Lấy danh sách user từ Local Storage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Kiểm tra username đã tồn tại chưa
            const userExists = users.some(u => u.username === username);
            
            if (userExists) {
                document.getElementById('username-error').textContent = 'Tên đăng nhập đã được sử dụng';
                document.querySelector('.loading').classList.remove('active');
                return;
            }
            
            // Kiểm tra email đã tồn tại chưa
            const emailExists = users.some(u => u.email === email);
            
            if (emailExists) {
                document.getElementById('email-error').textContent = 'Email đã được sử dụng';
                document.querySelector('.loading').classList.remove('active');
                return;
            }
            
            // Tạo user mới
            const newUser = {
                username,
                email,
                password, // Lưu ý: Trong thực tế nên mã hóa mật khẩu trước khi lưu
                createdAt: new Date().toISOString()
            };
            
            // Thêm user mới vào danh sách
            users.push(newUser);
            
            // Lưu vào Local Storage
            localStorage.setItem('users', JSON.stringify(users));
            
            // Ẩn loading
            document.querySelector('.loading').classList.remove('active');
            
            // Hiển thị thông báo thành công
            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            
            // Chuyển hướng về trang đăng nhập
            window.location.href = 'login.html';
        }, 1000);
    });
});