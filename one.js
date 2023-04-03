function generateKey(length, characters) {
  let random = "";
  for (let i = 0; i < length; i++) {
    const key = Math.floor(Math.random() * characters.length);
    random += characters[key];
  }
  return random;
}
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key);
