import "./components/buttons";
import "./components/text";
import "./components/hands";
import { initRouter } from "./router";
import { state } from "./state";

(function () {
  state.getStorage();
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
})();
