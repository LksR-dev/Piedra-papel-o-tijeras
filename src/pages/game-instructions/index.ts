export function initInstructions(param): HTMLElement {
  const div = document.createElement("div");
  div.className = "container";
  div.innerHTML = `
    <text-comp variant="large">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 5 segundos.</text-comp>
    <btn-comp class="button">Jugar</btn-comp>

    <div class="container__hand">
      <hands-comp hand="rock"></hands-comp>
      <hands-comp hand="paper"></hands-comp>
      <hands-comp hand="scissors"></hands-comp>
    </div>
  `;

  div
    .querySelector(".button")
    .addEventListener("click", () => param.goTo("/game"));

  return div;
}
