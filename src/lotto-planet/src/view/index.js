import Console from "../../../utils/console.js";

const InputView = {
  async askAmount() {
    const input = (
      await Console.readLine("구입금액을 입력해 주세요.\n")
    ).trim();
    const num = Number(input);
    if (Number.isNaN(num)) {
      throw new Error("보너스 번호는 숫자여야 합니다.\n");
    }
    return num;
  },
  async askLottoNumber() {
    const input = await Console.readLine("로또 번호를 입력해 주세요.\n");
    return input
      .trim()
      .split(",")
      .map((s) => {
        const num = Number(s.trim());
        if (Number.isNaN(num)) {
          throw new Error("당첨 번호는 숫자여야 합니다.\n");
        }
        return num;
      });
  },

  async askBonusNumber() {
    const input = (
      await Console.readLine("보너스 번호를 입력해 주세요.\n")
    ).trim();
    const num = Number(input);
    if (Number.isNaN(num)) {
      throw new Error("보너스 번호는 숫자여야 합니다.\n");
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
