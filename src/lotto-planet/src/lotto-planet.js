import { INPUT_KEY } from "../constant.js";
import InputController from "./controller/input-controller.js";

class LottoPlanet {
  async run() {
    await InputController.readInput(INPUT_KEY.AMOUNT);
  }
}

export default LottoPlanet;
