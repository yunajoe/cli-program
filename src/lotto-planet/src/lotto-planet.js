import { INPUT_KEY } from "../constant.js";
import InputController from "./controller/input-controller.js";
import LottoGenerator from "./model/LottoGenerator.js";

class LottoPlanet {
  async run() {
    const amount = await InputController.readInput(INPUT_KEY.AMOUNT);
    const lottoNumber = await InputController.readInput(INPUT_KEY.LOTTO_NUMBER);
    const bonusNumber = await InputController.readInput(
      INPUT_KEY.BONUS_NUMBER,
      lottoNumber,
    );
    const lottoGenerator = new LottoGenerator(amount, lottoNumber, bonusNumber);
    lottoGenerator.run();
  }
}

export default LottoPlanet;
