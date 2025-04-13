// File này sẽ lưu trữ dữ liệu người dùng
let usersDatabase = [
    // Dữ liệu mẫu (nếu cần)
    // {
    //   username: "demo",
    //   email: "demo@example.com",
    //   password: "demo123",
    //   createdAt: "2023-11-20T00:00:00.000Z",
    //   avatar: "t/user.jpg"
    // }
  ];
  
  function saveUsersToFile() {
    // Tạo nội dung file JS mới
    const fileContent = `let usersDatabase = ${JSON.stringify(usersDatabase, null, 2)};\n\nfunction getUsers() {\n  return usersDatabase;\n}`;
    
    // Tạo blob để tải về
    const blob = new Blob([fileContent], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    
    // Tạo link tải về (chỉ để kiểm tra)
    const a = document.createElement("a");
    a.href = url;
    a.download = "users-data.js";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  function addUser(newUser) {
    usersDatabase.push(newUser);
    saveUsersToFile();
  }
  
  function getUsers() {
    return usersDatabase;
  }