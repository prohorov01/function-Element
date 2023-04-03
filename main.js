function removeElement(array, item) {
  console.log(array.filter((el) => el !== item));
}
const array = [1, 2, 3, 4, 5, 6, 7];

removeElement(array, 5);
