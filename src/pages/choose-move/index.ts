export function initMove(param) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.className = "container";

  div.innerHTML = `
    <div class="hands__top">
      <hands-comp hand="rock"></hands-comp>
      <hands-comp hand="paper"></hands-comp>
      <hands-comp hand="scissors"></hands-comp>
    </div>
    
    <div class="container__hand">
      <hands-comp hand="rock"></hands-comp>
      <hands-comp hand="paper"></hands-comp>
      <hands-comp hand="scissors"></hands-comp>
    </div>
  `;

  style.innerHTML = `
    .hands_top {
      transform: rotate(180deg);
      display: flex;
      align-items: center;
    }
  `;

  div.appendChild(style);

  return div;
}
