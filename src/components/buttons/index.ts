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
          color: #ffff;
          font-size: 40px;
          font-family: "Patrick Hand", sans-serif;
          border: 10px solid #001997;
          border-radius: 10px;
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
