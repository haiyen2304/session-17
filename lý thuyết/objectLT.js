// object là đối tượng, là 1 kiểu dữ liệu dùng để mô tả các đối tượng trong thực tế thông qua
// tên : Hải yến
// tuổi : 25 .
// quê quán : Hà Nam.
// tình trạng hôn nhân : đã kết hôn
// xinh :có
//...
let person1 = {
  name: "Hải Yến",
  age: 25,
  hometown: "Paris",
  married: true,
  children: 2,
  beautiful: "có",
  hobbies: ["eating out", "sleeping", "gaming"],
};
// kiểu dữ liệu phức tạp
let person = {
  name: "nghĩa ",
  age: 28,
  hometown: "hòa mạc",
  married: "FA",
  children: 5,
  handsome: " no",
  hobbies: ["eating out", "sleeping", "gaming"],
};
// CRUD
console.log(person);
person.jobs = ["Developers", "Nurse", "Teacher"];
console.log(person);
// sau khi log sẽ hiện
// age: 28;
// children: 5;
// handsome: " no";
// hobbies: (3)[("eating out", "sleeping", "gaming")];
// hometown: "hòa mạc";
// jobs: (3)[("Developers", "Nurse", "Teacher")];================
// married: "FA";
// name: "nghĩa ";

person.name;
console.log(`${person.name} đi `); // name là thuộc tính
console.log(`${person["name"]} đi `);
for (let hobby of person.hobbies) {
  console.log(`${person.name} loves ${hobby}`);
}
// read ALL - lấy ra toàn bộ values của toàn bộ thuộc tính
// for .. in

for (let key in person) {
  console.log(person.key);
  key; //key là biến , giá trị của key là các chuỗi "name","age",..."hobbies"
  person[key]; // person["name"], person["age"]
  console.log(`${key}: ${person[key]}`);
}
person.age = 26;
person["age"] = 27;
console.log(person);

// delete - xóa đi một thuộc tính===================================

delete person.age;
console.log(person);

let students = [
  {
    id: "SV0001",
    name: "hải yến",
    age: 25,
  },
  {
    id: "SV0002",
    name: " C.linh",
    age: 18,
  },
  {
    id: "SV0003",
    name: " Ngọc",
    age: 40,
  },
];

console.log("sinh viên", students[0].name);
for (let student of students) {
  console.log(student.name);
  console.log(student.age);
  console.log(student.id);
}
