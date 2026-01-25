import {
  AMOUNT_ERROR_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_RULES,
} from "../../constant.js";
import { OutputView } from "../view/index.js";

const validators = {
  amount: (amount) => Validator.validateAmount(amount),
};

class Validator {
  static validate(key) {
    const validate = validators[key];
    if (!validate)
      throw new Error(OutputView.printErrorMessage(ERROR_MESSAGE.INVALID_KEY));
    return validate;
  }
  static validateAmount(purchasedAmount) {
    if (Number.isNaN(purchasedAmount)) {
      throw new Error(
        OutputView.printErrorMessage(AMOUNT_ERROR_MESSAGE.INVALID_TYPE),
      );
    }
    if (purchasedAmount < LOTTO_RULES.UNIT) {
      throw new Error(
        OutputView.printErrorMessage(AMOUNT_ERROR_MESSAGE.MIN_AMOUNT),
      );
    }
    if (purchasedAmount % LOTTO_RULES.UNIT !== 0) {
      throw new Error(
        OutputView.printErrorMessage(AMOUNT_ERROR_MESSAGE.INVALID_UNIT),
      );
    }
    if (purchasedAmount > LOTTO_RULES.MAX_AMOUNT) {
      throw new Error(
        OutputView.printErrorMessage(AMOUNT_ERROR_MESSAGE.MAX_AMOUNT),
      );
    }
  }
}

export default Validator;
