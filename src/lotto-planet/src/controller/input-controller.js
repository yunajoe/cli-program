// 입력과 검증을 하는 controller

import Console from "../../../utils/console.js";
import Validator from "../validator/index.js";
import { InputView } from "../view/index.js";

const inputs = {
  amount: async () => await InputView.askAmount(),
};

class InputController {
  static async readInput(key, ...rest) {
    try {
      const inputFunc = inputs[key];
      const value = await inputFunc();
      const validateFunc = Validator.validate(key);
      validateFunc(value);
    } catch (error) {
      Console.print(error.message);
      return InputController.readInput(key, ...rest);
    }
  }
}

export default InputController;
