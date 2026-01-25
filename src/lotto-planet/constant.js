export const INPUT_KEY = Object.freeze({
  AMOUNT: "amount",
});

export const LOTTO_RULES = Object.freeze({
  UNIT: 500,
  MAX_AMOUNT: 10000,
});
export const AMOUNT_ERROR_MESSAGE = Object.freeze({
  INVALID_TYPE: "구매금액은 숫자여야 합니다.",
  MIN_AMOUNT: "구매금액은 최소 500원 이어야 합니다.",
  INVALID_UNIT: "구매금액은 500으로 나누어 떨어져야 합니다.",
  MAX_AMOUNT: "구매금액은 최대 100000원 이어야 합니다.",
});
