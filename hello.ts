(() => {
  /**
   * Easy peasy. See https://jsdoc.app/.
   * @param {string} message - What to print.
   */
  const printMessage = (message) => {
    // console.log(`Printing message of length: ${message.len}`);
    console.log(message);
  };

  const hello = "Hello!";
  printMessage(hello);

  // --------------------------------------------

  // let bonjour = "bonjour!";
  // printMessage(bonjour);

  // --------------------------------------------

  // bonjour = 5;
  // printMessage(5);

  // --------------------------------------------

  // const isProbablyMobile = (number) => {
  //   const nationalNumber = number.replace(/\s+/, "").replace("+44", "0");
  //   return nationalNumber.startsWith("07");
  // };

  // isProbablyMobile(5);

  // --------------------------------------------

  // const isProbablyMobile = (number) => {
  //   // @ts-ignore
  //   const nationalNumber = number.replace(/\s+/, "").replace("+44", "0");
  //   return nationalNumber.startsWith("07");
  // };

  // isProbablyMobile(5);

  // --------------------------------------------

  // const greet = (person, date) => {
  //   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  // };

  // greet("Maddison", Date());
})();
