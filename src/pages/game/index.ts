import { state } from "../../state";

export function initMove(param) {
  let counter = 5;
  const countdown = setInterval(() => {
    const counterEl = div.querySelector(".master-circle");
    counterEl.textContent = String(counter);
    counter--;

    // if (counter < 0) {
    //   clearInterval(countdown);
    //   param.goTo("/instructions");
    // }
  }, 1000);
  const div = document.createElement("div");
  div.className = "container";
  div.innerHTML = `
    <div class="hands__top">
      <hands-comp hand="rock" class="rock__top"></hands-comp>
      <hands-comp hand="paper" class="paper__top"></hands-comp>
      <hands-comp hand="scissors" class="scissors__top"></hands-comp>
    </div>

    <div class="master-circle"></div>
    
    
    <div class="container__hand">
      <hands-comp hand="rock" class="rock__bottom"></hands-comp>
      <hands-comp hand="paper" class="paper__bottom"></hands-comp>
      <hands-comp hand="scissors" class="scissors__bottom"></hands-comp>
    </div>
  `;

  const style = document.createElement("style");
  style.innerHTML = `
    .hands__top {
      transform: rotate(180deg);
      display: flex;
      align-items: center;
      position: relative;
      top: -35px;
    }
    hands-comp:hover {
      cursor:pointer
    }
    .actived {
      display: inherit;
      transform: translateY(-30px);
      transition: all 0.5s;
    }
    .disabled {
      opacity: 60%;
      transform: translateY(30px);
      transition: 0.5s;
    }

    .master-circle {
      width: 150px;
      height: 150px;
      box-shadow: 0 0 0 1.875vmin, inset 3.75vmin 3.75vmin 7.5vmin rgba(0, 0, 0, 0.125), 3.75vmin 3.75vmin 7.5vmin rgba(0, 0, 0, 0.125);
      font-size: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      color: #000;
      border-radius: 50%;
      border: 30px;
      font-weight: 700;
    }

    @media (min-width: 420px) {
      .master-circle {
        width: 250px;
        height: 250px;
        box-shadow: 0 0 0 1.25vmin, inset 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125), 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125);
        font-size: 25vmin;
        text-shadow: 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125);
      }
    }

    .master-circle:before {
      content: "";
      -webkit-animation: 5s 1s forwards timer_countdown, 1s 0.875s 15 timer_beat;
              animation: 5s 1s forwards timer_countdown, 1s 0.875s 15 timer_beat;
      color: #000;
    }
    @-webkit-keyframes timer_beat {
      40%, 80% {
        transform: none;
      }
      50% {
        transform: scale(1.125);
      }
    }
    @keyframes timer_beat {
      40%, 80% {
        transform: none;
      }
      50% {
        transform: scale(1.125);
      }
    }
    .master-circle:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -100;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.125);
      -webkit-animation: 5s 1s linear forwards timer_indicator;
              animation: 5s 1s linear forwards timer_indicator;
    }
    @-webkit-keyframes timer_indicator {
      100% {
        transform: translateY(100%);
      }
    }
    @keyframes timer_indicator {
      100% {
        transform: translateY(100%);
      }
    }
  }
  `;

  const handsTop = div.querySelector(".hands__top");
  const handRockTop = div.querySelector(".rock__top");
  const handPaperTop = div.querySelector(".paper__top");
  const handScissorsTop = div.querySelector(".scissors__top");

  const handsBottom = div.querySelector(".container__hand").children;
  const handRockBottom = div.querySelector(".rock__bottom");
  const handScissorsBottom = div.querySelector(".scissors__bottom");
  const handPaperBottom = div.querySelector(".paper__bottom");

  for (const hand of handsBottom) {
    hand.addEventListener("click", () => {
      const type = hand.getAttribute("hand");
      clearInterval(countdown);

      if (type === "scissors") {
        state.setMove("scissors");
        activeHands("scissors");
      } else if (type === "rock") {
        state.setMove("rock");
        activeHands("rock");
      } else if (type === "paper") {
        state.setMove("paper");
        activeHands("paper");
      }
    });
  }

  function activeHands(hand) {
    if (hand === "scissors") {
    }
    console.log(hand);
  }

  div.appendChild(style);
  return div;
}
