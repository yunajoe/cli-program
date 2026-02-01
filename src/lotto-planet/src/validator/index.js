import {
  AMOUNT_ERROR_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_ERROR_MESSAGE,
  LOTTO_RULES,
} from "../../constant.js";
import { OutputView } from "../view/index.js";

const validators = {
  amount: (amount) => Validator.validateAmount(amount),
  lottoNumber: (lottoNumber) => Validator.validateLottoNumber(lottoNumber),
  bonusNumber: (bonusNumber) => Validator.validateBonusNumber(bonusNumber),
};

class Validator {
  static validate(key) {
    const validate = validators[key];
    if (!validate)
      throw new Error(OutputView.printErrorMessage(ERROR_MESSAGE.INVALID_KEY));
    return validate;
  }
  static validateAmount(purchasedAmount) {
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
  static validateLottoNumber(lottoNumber) {
    // 다섯개
    if (lottoNumber.length !== LOTTO_RULES.LOTTO_UNIT) {
      throw new Error(
        OutputView.printErrorMessage(LOTTO_ERROR_MESSAGE.INVALID_LENGTH),
      );
    }

    // 중복되지 않게
    if (new Set(lottoNumber).size !== lottoNumber.length) {
      throw new Error(
        OutputView.printErrorMessage(LOTTO_ERROR_MESSAGE.DUPLICATED),
      );
    }

    // 1 ~ 30까지만
    // && => 조건들이 모두 true일경우에만 true
    // || => 조건 중 하나만이라도 true일 경우에만  true
    lottoNumber.forEach((lotto) => {
      if (!(lotto >= 1) || !(lotto <= 30)) {
        throw new Error(
          OutputView.printErrorMessage(LOTTO_ERROR_MESSAGE.INVALID_RANGE),
        );
      }
    });
  }

  static validateBonusNumber(bonusNumber) {
    // 1 ~ 30
    // 로또 번호와 중복되지 않게
    if (bonusNumber < 1 || bonusNumber > 30) {
      throw new Error(
        OutputView.printErrorMessage(LOTTO_ERROR_MESSAGE.INVALID_RANGE),
      );
    }
  }
}

export default Validator;
