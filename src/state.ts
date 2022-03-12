type Play = "paper" | "rock" | "scissors";

const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: [{}],
  },
  listeners: [],

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
  setMove(move: Play) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    this.setState(currentState);
  },
  whoWins(myPlay: Play, computerPlay: Play) {
    const winS: boolean = myPlay == "scissors" && computerPlay == "paper";
    const winR: boolean = myPlay == "rock" && computerPlay == "scissors";
    const winP: boolean = myPlay == "paper" && computerPlay == "rock";

    const youWin = [winP, winR, winS].includes(true);
  },
};

export { state };
