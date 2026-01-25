import { INPUT_KEY } from "../../src/lotto-planet/constant.js";
import Validator from "../../src/lotto-planet/src/validator/index.js";
import Console from "../../src/utils/console.js";

// jest.mock("../../src/utils/console.js");
// jest.mock("../../src/lotto-planet/src/view/index.js");

const printSpy = jest.spyOn(Console, "print");

describe("구입금액 인풋 관련 테스팅", () => {
  afterEach(() => {
    jest.clearAllMocks(); // restoreAllMocks?
  });

  test("500원 미만일때 ", () => {
    // given
    const validateFunc = Validator.validate(INPUT_KEY.AMOUNT);

    // when
    const run = () => validateFunc(400);

    // then
    expect(() => {
      run();
    }).toThrow();

    expect(printSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 구매금액은 최소 500원 이어야 합니다"),
    );
  });

  test("500원으로 나누어 떨어지지 않을때", () => {
    // given
    const validateFunc = Validator.validate(INPUT_KEY.AMOUNT);

    // when
    const run = () => validateFunc(1200);

    // then
    expect(() => run()).toThrow();

    expect(printSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "[ERROR] 구매금액은 500으로 나누어 떨어져야 합니다.",
      ),
    );
  });
  test("구입금액이 최대 10000을 초과했을 때", () => {
    // given
    const validateFunc = Validator.validate(INPUT_KEY.AMOUNT);

    // when
    const run = () => validateFunc(20000);

    // then
    expect(() => run()).toThrow();

    expect(printSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 구매금액은 최대 10000원 이어야 합니다."),
    );
  });
});
