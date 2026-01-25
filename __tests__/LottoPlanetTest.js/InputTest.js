import { INPUT_KEY } from "../../src/lotto-planet/constant.js";
import Validator from "../../src/lotto-planet/src/validator/index.js";

describe("구입금액 인풋 관련 테스팅", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test("500원 미만일때 ", () => {
    const validateFunc = Validator.validate(INPUT_KEY.AMOUNT);
    validateFunc(300);
  });
  test("500으로 나누어 떨어지지 않을때", () => {});
  test("10000 초과 입력할때", () => {});
});
