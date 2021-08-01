function counter() {
  let _count = 0;
  return {
    increment: () => ++_count,
    current: () => _count,
  };
}

const myCounter = counter();
console.log(myCounter.current());

myCounter.increment();
console.log(myCounter.current());
