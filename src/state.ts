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
      return (this.data.history = local);
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
    this.savedData();
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  //SAVE THE SCORE AND SUMMON SAVE DATA
  setScore() {
    const currentState = this.getState();

    const myPlay = this.getState().currentGame.myPlay;
    const computerPlay = this.getState().currentGame.computerPlay;
    const currentWhoWins = this.whoWins(myPlay, computerPlay);

    const myScore = currentState.history.myScore;
    const computerScore = currentState.history.computerScore;

    if (currentWhoWins === "wins") {
      return this.setState({
        ...currentState,
        history: {
          myScore: myScore + 1,
          computerScore: computerScore,
        },
      });
    } else if (currentWhoWins === "loss") {
      return this.setState({
        ...currentState,
        history: {
          myScore: myScore,
          computerScore: computerScore + 1,
        },
      });
    }
  },

  whoWins(myPlay: Play, computerPlay: Play) {
    const tieS: boolean = myPlay == "scissors" && computerPlay == "scissors";
    const tieR: boolean = myPlay == "rock" && computerPlay == "rock";
    const tieP: boolean = myPlay == "paper" && computerPlay == "paper";
    const tie = [tieP, tieR, tieS].includes(true);

    if (tie) {
      return "tie";
    }

    const winS: boolean = myPlay == "scissors" && computerPlay == "paper";
    const winR: boolean = myPlay == "rock" && computerPlay == "scissors";
    const winP: boolean = myPlay == "paper" && computerPlay == "rock";
    const youWin = [winP, winR, winS].includes(true);

    if (youWin) {
      return "wins";
    } else {
      return "loss";
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
    const currentHistory = this.getState().history;
    localStorage.setItem("data", JSON.stringify(currentHistory));
  },
};

export { state };
