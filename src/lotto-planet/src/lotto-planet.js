import { InputView } from "./view/index.js";

class LottoPlanet {
  async run() {
    const amount = await InputView.askAmount();
  }
}

export default LottoPlanet;
