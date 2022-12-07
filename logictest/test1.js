let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

let string = "";

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j <= i; j++) {
    string += words[j];
  }
  string += "\n";
}

console.log(string);
