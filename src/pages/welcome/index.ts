export function initWelcome(param) {
  const div = document.createElement("div");
  div.className = "container";

  div.innerHTML = `
    <text-comp variant="title">Piedra Papel o Tijeras</text-comp>
    <btn-comp class="button">Empezar</btn-comp>

    <div class="container__hand">
      <hands-comp hand="rock"></hands-comp>
      <hands-comp hand="paper"></hands-comp>
      <hands-comp hand="scissors"></hands-comp>
    </div>
  `;

  div
    .querySelector(".button")
    .addEventListener("click", () => param.goTo("/instructions"));

  return div;
}
