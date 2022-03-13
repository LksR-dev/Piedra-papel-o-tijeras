import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/game-instructions";
import { initMove } from "./pages/game";
import { initResults } from "./pages/show-results";

const BASE_PATH = "/dwf-m5";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/instructions/,
    component: initInstructions,
  },
  {
    path: /\/game/,
    component: initMove,
  },
  {
    path: /\/results/,
    component: initResults,
  },
];

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    //Compara cada path con la collection y si alguna coincide
    //ejecuta la función que acompaña
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/" || location.pathname == "/dwf-m5/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}
