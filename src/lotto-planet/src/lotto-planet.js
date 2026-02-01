import { INPUT_KEY } from "../constant.js";
import InputController from "./controller/input-controller.js";

class LottoPlanet {
  async run() {
    const amount = await InputController.readInput(INPUT_KEY.AMOUNT);
    console.log("amount ==>", amount);
    const lottoNumber = await InputController.readInput(INPUT_KEY.LOTTO_NUMBER);
    console.log("로또 넘버 ===>", lottoNumber);
    const bonusNumber = await InputController.readInput(INPUT_KEY.BONUS_NUMBER);
    console.log("로또 넘버 ===>", lottoNumber);

    // 출력: amount에 맞게 돈에
  }
}

export default LottoPlanet;
