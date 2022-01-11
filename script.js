(function () {
  //Colors
  const colorContainer = document.querySelector(".color-container");
  const startColors = document.querySelector(".start-colors");
  const stopColors = document.querySelector(".stop-colors");
  const colorTitle = document.querySelector("#color-title");

  //Numbers
  const numberContainer = document.querySelector(".number-container");
  const startNumbers = document.querySelector(".start-numbers");
  const stopNumbers = document.querySelector(".stop-numbers");
  const numberTitle = document.querySelector("#number-title");

  //Shapes
  const shapeContainer = document.querySelector(".shape-container");
  const startShapes = document.querySelector(".start-shapes");
  const stopShapes = document.querySelector(".stop-shapes");
  const shapeTitle = document.querySelector("#shape-title");

  //Colors
  const colors = ["red", "blue", "orange", "purple", "pink", "green"];

  startColors.addEventListener("click", (e) => {
    let colorInterval = setInterval(() => {
      colorTitle.textContent = "";
      let randNumber = Math.floor(Math.random() * colors.length);
      colorContainer.style.backgroundColor = colors[randNumber];
      // for (let i = 0; i < colors.length; i++) {
      //   colorContainer.style.backgroundColor = colors[i];
      // for (let color of colors) {
      //   colorContainer.style.backgroundColor = color;
      setTimeout(() => {
        colorTitle.textContent = colors[randNumber];
      }, 3000);
    }, 5000);

    stopColors.addEventListener("click", (e) => {
      clearInterval(colorInterval);
    });
  });

  //Numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  startNumbers.addEventListener("click", (e) => {
    let numberInterval = setInterval(() => {
      numberTitle.textContent = "";
      let randNumber = Math.floor(Math.random() * numbers.length);
      numberTitle.textContent = numbers[randNumber];
    }, 5000);

    stopNumbers.addEventListener("click", (e) => {
      clearInterval(numberInterval);
    });
  });

  //Shapes
  const shapes = ["circle", "square"];

  startShapes.addEventListener("click", (e) => {
    let shapeInterval = setInterval(() => {
      shapeTitle.textContent = "";
      let randNumber = Math.floor(Math.random() * shapes.length);

      setTimeout(() => {
        shapeTitle.textContent = shapes[randNumber];
      }, 3000);
    }, 5000);
    stopShapes.addEventListener("click", (e) => {
      clearInterval(shapeInterval);
    });
  });
})();
