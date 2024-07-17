let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
// let newid = +prompt("nhập id của đối tượng mới");
// let newname = prompt("nhập tên của đối tượng mới");
// let newcount = +prompt("nhập số lần đếm");
// let newproducts = {
//   id: newid,
//   name: newname,
//   count: newcount,
// };

// products.push(newproducts);
// console.log(products);

let inputDelete = 2;
let findIndexdelete = products.findIndex(function (e, i) {
  return e.id == inputDelete;
});

products.splice(findIndexdelete, 1);
console.log(products);

let inputUpdate = 3;
let findIndexupdate = products.findIndex(function (e, i) {
  return e.id == inputUpdate;
});
// console.log();
products[findIndexupdate].count = 0;
console.log(products);

//Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng
// “products” hay không? Nếu Có in toàn bộ thông tin,
// nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”

let input = "Butter";
let findProducts = products.findIndex(function (e, i) {
  return e.name == input; //-1 hoặc vị trí có
});
if (findProducts == -1) {
  console.log("không tìm thấy");
} else {
  console.log(products[findProducts]);
}
