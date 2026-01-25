import Validator from "./validator/index.js";
import { InputView } from "./view/index.js";

class LottoPlanet {
  async run() {
    const amount = await InputView.askAmount();
    console.log("입력한 금액 ===>", amount);
    Validator.validateAmount(amount);
  }
}

export default LottoPlanet;
