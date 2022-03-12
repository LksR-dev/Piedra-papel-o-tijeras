import "./components/buttons";
import "./components/text";
import "./components/hands";
import { initRouter } from "./router";

(function () {
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
})();
