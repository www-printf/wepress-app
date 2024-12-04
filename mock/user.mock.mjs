// Hàm tạo dữ liệu ngẫu nhiên cho người dùng
function generateRandomUser() {
    const names = ["Nguyễn Văn A", "Trần Thị B", "Lê Minh C", "Phạm Quỳnh D", "Đinh Mai E"];
    const faculties = ["Khoa Công Nghệ Thông Tin", "Khoa Điện Tử Viễn Thông", "Khoa Kinh Tế", "Khoa Môi Trường"];
    const classes = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4"];
    const statuses = ["Đang học", "Đã tốt nghiệp", "Bỏ học"];
    const genders = ["Nam", "Nữ", "Khác"];
    const accountStatuses = ["Active", "Inactive", "Suspended"];
    const roles = ["Sinh viên", "Giảng viên", "Quản lý", "Nhân viên"];
    
    // Chọn dữ liệu ngẫu nhiên
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomFaculty = faculties[Math.floor(Math.random() * faculties.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const randomAccountStatus = accountStatuses[Math.floor(Math.random() * accountStatuses.length)];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    
    // Tạo thông tin người dùng ngẫu nhiên
    return {
        fullName: randomName,                           // Họ và tên
        studentId: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,  // Mã số sinh viên
        birthDate: `${Math.floor(Math.random() * (2000 - 1990 + 1)) + 1990}-` + `${Math.floor(Math.random() * (12 - 1 + 1)) + 1}`.padStart(2, '0') + `-` + `${Math.floor(Math.random() * (28 - 1 + 1)) + 1}`.padStart(2, '0'),  // Ngày sinh ngẫu nhiên
        gender: randomGender,                          // Giới tính
        faculty: randomFaculty,                        // Khoa
        class: randomClass,                            // Lớp
        academicYear: Math.floor(Math.random() * (2024 - 2015 + 1)) + 2015, // Khóa đào tạo
        studentStatus: randomStatus,                   // Tình trạng sinh viên
        studentEmail: `contact.${Math.floor(Math.random() * 100)}@hcmut.edu.com`, // Email sinh viên
        contactEmail: `contact.${Math.floor(Math.random() * 100)}@gmail.com`, // Email liên lạc
        phoneNumber: `0${Math.floor(Math.random() * 900000000) + 100000000}`, // Số điện thoại
        accountStatus: randomAccountStatus,            // Tình trạng tài khoản
        totalPrintOrders: Math.floor(Math.random() * 100), // Tổng số đơn in ngẫu nhiên
        lastPrintDate: `${Math.floor(Math.random() * (12 - 1 + 1)) + 1}`.padStart(2, '0') + `/${Math.floor(Math.random() * 31) + 1}`.padStart(2, '0') + `/2024`, // Ngày in gần nhất
        role: randomRole                               // Chức vụ
    };
}

// Hàm tạo 10 người dùng ngẫu nhiên
function generateMultipleUsers(numUsers = 10) {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        users.push(generateRandomUser());
    }
    return users;
}

// Tạo dữ liệu ngẫu nhiên cho 10 người dùng
const userDatas = generateMultipleUsers(20);
// Tạo dữ liệu ngẫu nhiên
const userData = [generateRandomUser()];


// Xuất dữ liệu
export { userData, userDatas };