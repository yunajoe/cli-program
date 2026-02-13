import Lotto from "./Lotto.js";

// 사용자에게 입력받은 금액을 토대로 로또를 발행하는
class LottoGenerator {
  static #LOTTO_PRICE = 500;
  #purchasedAmount;
  #lottoNumber;
  #bonusNumber;
  constructor(purchasedAmount, lottoNumber, bonusNumber) {
    this.lotto = new Lotto();
    this.#purchasedAmount = purchasedAmount;
    this.#lottoNumber = lottoNumber;
    this.#bonusNumber = bonusNumber;
  }

  // amount 에 맞게 로또 복권 장수를 발행해주는 메서드
  printIssuedLottoTickets() {
    const Ntrials = Math.floor(
      this.#purchasedAmount / LottoGenerator.#LOTTO_PRICE,
    );
    this.lotto.generateLottoNTrials(Ntrials, 1, 10);
    console.log("numberAry", this.lotto.randomNumbers);
  }

  // 랜덤번호에 따라 로또 번호를 출력해주는 메서드

  run() {
    this.printIssuedLottoTickets();
  }
}

export default LottoGenerator;
