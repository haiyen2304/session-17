// Bước 1: Tạo đối tượng players có các thuộc tính và giá trị như sau

let players = {
  name: "Messi",
  age: 30,
  nation: "Argentine",
  club: "PSG",
};

players.email = "messi@gamil.com";
console.log(players);

players.club = "asc";
for (let key in players) {
  console.log(key, " : ", players[key]);
}

delete players.age;
console.log(players);
