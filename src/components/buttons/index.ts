customElements.define(
  "btn-comp",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      const btnEl = document.createElement("button");
      btnEl.textContent = this.textContent;
      btnEl.className = "btn";

      style.innerHTML = `
        .btn{
          width: 300px;
          height: 87px;
          background-color: #006CFC;
          font-size: 40px;
          font-family: "Patrick Hand", sans-serif;
          margin: 70px 0 50px;
          border: 10px solid #001997;
          border-radius: 10px;
        }
        @media only screen and (min-width: 670px) {
          .btn {
            margin-top: 40px;
          }
        }
        .btn:hover {
          cursor: pointer;
        }
      `;

      shadow.appendChild(style);
      shadow.appendChild(btnEl);
    }
  }
);
