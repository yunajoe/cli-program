// 사용자에게 입력받은 금액을 토대로 로또를 발행하는
class LottoGenerator {
  // private field 는 외부에서 call 하면은 undefined가 나온당
  #purchasedAmount;
  #lottoNumber;
  #bonusNumber;
  constructor(purchasedAmount, lottoNumber, bonusNumber) {
    this.#purchasedAmount = purchasedAmount;
    this.lottoNumber = lottoNumber;
    this.#bonusNumber = bonusNumber;
  }

  // amount 에 맞게 로또 복권 장수를 발행해주는 메서드
  printIssuedLottoTickets(purchasedAmount) {
    console.log("purchased", purchasedAmount);
  }

  // 랜덤번호에 따라 로또 번호를 출력해주는 메서드

  run() {
    this.printIssuedLottoTickets(this.#purchasedAmount);
  }
}

export default LottoGenerator;
