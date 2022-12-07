function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const mygen = gen();
console.log(mygen.next()); // { value: 1, done: false }
console.log(mygen.next().value); // 2
console.log(mygen.next().value); // 3


function* iterable(array) {
  for (let e of array) {
    yield e;
  }
}

const iterate = iterable(['brandon', 'andrea', 'josé', 'lili']);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
