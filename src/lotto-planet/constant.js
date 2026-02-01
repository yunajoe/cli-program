export const INPUT_KEY = Object.freeze({
  AMOUNT: "amount",
  LOTTO_NUMBER: "lottoNumber",
  BONUS_NUMBER: "bonusNumber",
});

export const LOTTO_RULES = Object.freeze({
  UNIT: 500,
  MAX_AMOUNT: 10000,
  LOTTO_UNIT: 5,
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_KEY: "허용하지 않는 키입니다",
});
export const AMOUNT_ERROR_MESSAGE = Object.freeze({
  INVALID_TYPE: "구매금액은 숫자여야 합니다.",
  MIN_AMOUNT: "구매금액은 최소 500원 이어야 합니다.",
  INVALID_UNIT: "구매금액은 500으로 나누어 떨어져야 합니다.",
  MAX_AMOUNT: "구매금액은 최대 10000원 이어야 합니다.",
});

export const LOTTO_ERROR_MESSAGE = Object.freeze({
  INVALID_LENGTH: "로또번호는 5개여야 합니다.",
  DUPLICATED: "로또번호는 중복되지 않아야 합니다.",
  INVALID_RANGE: "로또번호는 1~30까지 여야 합니다.",
});
