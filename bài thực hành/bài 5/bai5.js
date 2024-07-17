let staff = {
  id: 1,
  name: " ronaldo",
  age: 30,
  salary: 1000,
};
let company = [];
company.push(staff);
console.log(company);
//===========================================================
// // Bước 2: Thêm mới nhân viên vào trong mảng company
// let newName = prompt("nhập tên nhân viên mới: ");
// let newAge = +prompt("nhập tuổi nhân viên mới: ");
// let newSalary = +prompt("nhập lương nhân viên mới");
// let newStaff = {
//   name: newName,
//   age: newAge,
//   salary: newSalary,
// };
// company.push(newStaff);
// console.log(company); // chỉnh sửa luôn mảng ban đầu

//===========================================================
// // bước 3: Cập nhật thông tin cho nhân viên có trong mảng “company”
// //(ví dụ cập nhật thuộc tính “salary” thông qua id)
// let inputUpdate = +prompt("nhập ID nhận viên muốn cập nhật"); // nhập vào
// let updateSalary = +prompt("Nhận mức lương muốn thay đổi"); // cập nhật

// let findIndexcompany = company.findIndex(function (element, index) {
//   return element.id == inputUpdate;
// }); // findIndexcompany= vị trí tìm thấy hoặc nếu không tim thấy là -1

// // có thể trình bày thành // let findIndexcompany = company.findIndex((element)=>element.id==inputUpdate)
// console.log(findIndexcompany);
// console.log(company[findIndexcompany]);

// company[findIndexcompany].salary = updateSalary;

// console.log(company);

//===========================================================
// bước 4 : Xóa thông tin cho nhân viên có trong mảng “company”
let inputDelete = +prompt("nhập vào id nhân viên muốn xóa");
let findIndexdelete = company.findIndex(function (element, index) {
  return element.id == inputDelete;
}); //findIndexdelete = company.findIndex((e) => inputDelete == e.id);
company.splice(findIndexdelete, 1);
console.log(company);
