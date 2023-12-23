var users = [
  {
    name: "sayed",
    age: "28",
    gender: "male",
    wife: { name: "mai", sons: [{ name: ["ahmed", "hana"] }] },
  },
];
for (var i = 0; i < users.length; i++) {
  for (var j = 0; j < users[i].wife.sons.length; j++) {
    console.log(users[i].wife.name + " : " + users[i].wife.sons[j].name);
  }
}
