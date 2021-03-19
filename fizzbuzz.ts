// @ts-ignore
const fizzBuzz = (count) => {
  if (count % 3 === 0) {
    if (count % 5 === 0) {
      return "FizzBuzz";
    }

    return "Fizz";
  }

  if (count % 5 === 0) {
    return "Buzz";
  }

  return count;
};

export default fizzBuzz;
