type Play = "paper" | "rock" | "scissors";

const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: {
      myScore: 0,
      computerScore: 0,
    },
  },
  listeners: [],

  getStorage() {
    const local = JSON.parse(localStorage.getItem("data"));
    if (localStorage.getItem("data")) {
      this.data.history = local;
    }
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    console.log("Soy el state, he cambiado", this.data);
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  //SAVE THE SCORE AND SUMMON SAVE DATA
  setScore() {
    const currentWhoWins = this.whoWins();
    console.log(currentWhoWins);

    const currentState = this.getState();
    const myScore = currentState.history.myScore;
    const computerScore = currentState.history.computerScore;

    if (currentWhoWins == "victoria") {
      return this.setState({
        ...currentState,
        history: {
          myScore: myScore + 1,
          computerScore: computerScore,
        },
      });
    } else if (currentWhoWins == "derrota") {
      return this.setState({
        ...currentState,
        history: {
          myScore: myScore,
          computerScore: computerScore + 1,
        },
      });
    }
    this.savedData();
  },

  whoWins(myPlay: Play, computerPlay: Play) {
    const tieS: boolean = myPlay == "scissors" && computerPlay == "scissors";
    const tieR: boolean = myPlay == "rock" && computerPlay == "rock";
    const tieP: boolean = myPlay == "paper" && computerPlay == "paper";
    const tie = [tieP, tieR, tieS].includes(true);

    if (tie) {
      console.log("empate");
    }

    const winS: boolean = myPlay == "scissors" && computerPlay == "paper";
    const winR: boolean = myPlay == "rock" && computerPlay == "scissors";
    const winP: boolean = myPlay == "paper" && computerPlay == "rock";
    const youWin = [winP, winR, winS].includes(true);

    if (youWin) {
      return "victoria";
    } else {
      return "derrota";
    }
  },

  //SAVE THE MOVEMENT AND SUMMON THE SCORE
  setMove(move: Play) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    const machineMove = () => {
      const hands = ["scissors", "rock", "paper"];
      return hands[Math.floor(Math.random() * 3)];
    };
    currentState.currentGame.computerPlay = machineMove();
    this.setScore();
  },

  savedData() {
    const currentState = this.getState().history;
    localStorage.setItem("data", JSON.stringify(currentState));
  },

  cleanData() {
    localStorage.setItem(
      "data",
      JSON.stringify({
        myScore: 0,
        computerScore: 0,
      })
    );
  },
};

export { state };
