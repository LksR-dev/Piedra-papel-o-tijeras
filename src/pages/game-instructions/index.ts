export function initInstructions(param) {
  const div = document.createElement("div");
  div.className = "container";
  div.innerHTML = `
    <text-comp variant="large">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-comp>
    <btn-comp class="button">Jugar</btn-comp>

    <div class="container__hand">
      <hands-comp hand="rock"></hands-comp>
      <hands-comp hand="paper"></hands-comp>
      <hands-comp hand="scissors"></hands-comp>
    </div>
  `;

  div
    .querySelector(".button")
    .addEventListener("click", () => param.goTo("/choose-move"));

  return div;
}
