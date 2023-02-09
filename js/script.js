const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");

const start = () => {
  const ranNum = [
    { number: 1, pct: 0 },
    { number: 2, pct: 0 },
    { number: 3, pct: 0 },
    { number: 4, pct: 0 },
    { number: 5, pct: 0 },
    { number: 6, pct: 100 },
  ];
  const expanded = ranNum.flatMap((num) => Array(num.pct).fill(num));
  const winner = expanded[Math.floor(Math.random() * expanded.length)];
  rollDice(winner.number);
};

// const randomDice = () => {
//   const random = Math.floor(Math.random() * 10);

//   if (random >= 1 && random <= 6) {
//     rollDice(1);
//   } else {
//     randomDice();
//   }
// };

const rollDice = (random) => {
  dice.style.animation = "rolling 4s";

  setTimeout(() => {
    switch (random) {
      case 1:
        // front
        dice.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;

      case 6:
        // back
        dice.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;

      case 2:
        // top
        dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;

      case 5:
        // bottom
        dice.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;

      case 3:
        // left
        dice.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;

      case 4:
        // right
        dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;

      default:
        break;
    }

    console.log('Winner', random);
    dice.style.animation = "none";
  }, 4050);
};

rollBtn.addEventListener("click", start);
