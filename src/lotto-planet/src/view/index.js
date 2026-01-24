import Console from "../../../utils/console.js";

const InputView = {
  async askAmount() {
    const input = await Console.readLine("구입금액을 입력해 주세요\n");
    const num = Number(input);
    if (Number.isNaN(num)) {
      throw new Error("구매금액은 숫자여야 합니다.");
    }
    return num;
  },
};
const OutputView = {
  printErrorMessage(message) {
    Console.print(`[ERROR] ${message}`);
  },
};

export { InputView, OutputView };
