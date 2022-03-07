/**
Cơ chế khai báo biến trong ES6
 var: Tự động hỗ trợ cơ chế hoisting (tự khai báo biến lên đầu file). Ảnh hướng toàn bộ scope
 let: Không hỗ trợ cơ chế hoisting. Trong cùng 1 scope không thể khai báo 2 biến trùng tên nhau được. Nếu khai báo biến cùng tên trên 1 scope khác thì let sẽtự hiểu là 2 biến riêng biệt.
=> Đối với dự án code = es6 thì dùng let thay cho var tất cả trường hợp
const: Tính chất giống let, tuy nhiên không thể gán lại giá trị được. Đối với object và array thì không thể gán bằng obj hoặc array khác mà chỉ có thẻ thay đổi được thuộc tính của obj, hoặc phần tử của array

 */
{
  let title = "Cybersoft";
  {
    let title = "Cyberlearn";
    console.log("title", title);
  }

  console.log("title2", title);
}

const DOMAIN = "https://google.com";

const SETTINGS = {
  DOMAIN: "https://svcy.myclass.vn/api",
  USER_LOGIN: "Cybersoft",
};

SETTINGS.DOMAIN = "ABC";

// var btn = document.querySelector("#btn");
// btn.onclick = function () {
//   alert(btn.innerHTML);
// };

var arrButton = document.querySelectorAll("button");
console.log(arrButton);
for (var i = 0; i < arrButton.length; i++) {
  let btn = arrButton[i];
  let content = btn.innerHTML;
  btn.onclick = function () {
    alert(content);
  };
}

//-----------------------------Function----------------------

//Declaration function: Hỗ trợ hoisting
function showInfo() {
  console.log("hello CyberSoft");
}

//Expression function: Không hỗ trợ hoisting
var showInfo1 = function () {
  console.log("hello cbs 123");
};

/**
Tính chất của arrow function
 Arrow Function: 
 + Không hỗ trợ hoisting
 + Đối với hàm có 1 tham số thì ta không cần () tham số. Dối với hàm có duy nhất 1 lệnh return thì ta không cần {return}

 */

//es5
let hello = function (name) {
  console.log("Hello ", name);
};
//es6
let helloEs6 = (name) => {
  console.log("Hello ", name);
};

/*
Ngữ cảnh (context) của từ khóa this:
 +Ngữ cảnh mặc định là window.
 +Ngữ cảnh object : this là object đó.
 +Ngữ cảnh fuction : thhis chính là function đó
 Nếu sử dụng hàm cho phương thức trong ES6 thì ta dùng arrow function. Vì arrow function không hộc trợ this.

 => Đối với prototype(kiểu dữ liệu minh định nghĩa) hoặc method (phương thức) thì dùng function. còn lại đối với các hàm xử lý thông thường nên sử dụng arrow function
 */

let myObject = {
  id: 1,
  name: "Nguyễn Văn A",
  showInfo: function () {
    console.log("id", this.id);
    console.log("name", this.name);
  },
};

myObject.showInfo();

function SinhVien() {
  this.maSinhVien = "";
  this.tenSinhVien = "";
  this.hienThiThongTin = function () {
    console.log("Mã sinh viên", this.maSinhVien);
    console.log("Tên sinh viên", this.tenSinhVien);
  };
}

let sv1 = new SinhVien();
sv1.tenSinhVien = "A";
sv1.maSinhVien = 1;
sv1.hienThiThongTin();

let sv2 = new SinhVien();
sv2.tenSinhVien = "B";
sv2.maSinhVien = 2;
sv2.hienThiThongTin();

let hocVienCyber = {
  maHocVien: 1,
  tenHocVien: "Nguyễn Văn A",
  hienThiThongTin: function () {
    let hienThi = () => {
      console.log("Mã học viên", this.maHocVien);
      console.log("Tên học viên", this.tenHocVien);
    };
    hienThi();
  },
};

hocVienCyber.hienThiThongTin();

/*
    Bài tập 2: Thay đổi màu sắc
    Cho mảng các màu, Yêu cầu:
     +Sử dụng mảng màu để tạo ra các button hiển thị trên div#color
     + Xây dựng xử lý khi click vào button màu nào thì in ra div home màu đó

*/

let arrColor = [
  "black",
  "red",
  "green",
  "blue",
  "orange",
  "pink",
  "yellow",
  "pink",
];

let renderButton = () => {
  let htmlOutPut = "";
  for (let i = 0; i < arrColor.length; i++) {
    let buttonColor = arrColor[i];
    htmlOutPut += `
   <button class= "btn text-white" style="background-color:${buttonColor};"onclick="changeColor('${buttonColor}')">${buttonColor}</button>
   `;
    document.querySelector("#colors").innerHTML = htmlOutPut;
  }
};
renderButton();

window.changeColor = (color) => {
  document.querySelector("#home").style.color = color;
};

/*
Default parameter:
Tham số mặc định của hàm: khi gọi hàm không truyền giá trị thì hàm sẽ tự lấy giá trị mặc định để xử lý
*/

let hienThiThongTin = (
  hoTen = "Tùng",
  namSinh = 2000,
  tuoi = 2002 - namSinh
) => {
  console.log("Họ Tên", hoTen);
  console.log("Tuổi", tuoi);
};

hienThiThongTin();
hienThiThongTin("Đạt", 1999);
hienThiThongTin("Đạt", 1999, 25);

function tinhTong(...number) {
  //   console.log(number);
  switch (number.length) {
    case 2:
      {
        console.log(number[0] + number[1]);
      }
      break;
    case 3:
      {
        console.log(number[0] + number[1] + number[2]);
      }
      break;
    default: {
      console.log("Không hợp lệ");
    }
  }
}

tinhTong(5, 10);
tinhTong(5, 10, 5);
