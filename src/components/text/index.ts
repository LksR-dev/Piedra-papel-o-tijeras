customElements.define(
  "text-comp",
  class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "body";
      const shadow = this.attachShadow({ mode: "open" });
      const divEl = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `
      .title {
        font-size: 80px;
        margin-bottom: 20px;
        color: #009048;
        width: 350px;
        line-height: 85px;
      }
      .body {
        font-size: 18px;
        margin-bottom: 70px;
      }
      .large {
        font-size: 40px;
        margin-bottom: 30px;
      }
      `;
      divEl.innerHTML = this.textContent;

      divEl.className = variant;
      shadow.appendChild(style);
      shadow.appendChild(divEl);
    }
  }
);
