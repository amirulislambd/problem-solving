phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };

prefix = "r";
function searchByPrefix(phonebook, prefix) {
  let property = [];
  for (let key in phonebook) {
    if (key.startsWith(prefix)) {
      property.push({anm:key,phone:phonebook[key]});
      ;
    }
}
return property;
}
const input = searchByPrefix(phonebook, prefix);
console.log(input);
