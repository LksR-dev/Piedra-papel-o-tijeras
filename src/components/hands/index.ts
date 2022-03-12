const hands = {
  rock: require("url:../../../public/images/rock.png"),
  scissors: require("url:../../../public/images/scissors.png"),
  paper: require("url:../../../public/images/paper.png"),
};

customElements.define(
  "hands-comp",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      const div = document.createElement("div");
      const hand = this.getAttribute("hand");

      div.innerHTML = `
        <img src="${hands[hand]}" />
      `;

      style.innerHTML = `
      `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
);
