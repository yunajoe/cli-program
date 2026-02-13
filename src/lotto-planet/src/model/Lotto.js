import Random from "#src/utils/random.js";

// 로또 넘버를 발행  &&  관리하는 클래스
class Lotto {
  constructor() {
    this.random = new Random();
  }

  // 중복된 숫자가 있는지 체크
  #validateDuplicatedNumbers(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자는 허용되지 않습니다.");
    }
  }
  // 오름차순 정렬
  #sortAscending(numbers) {
    return numbers.sort((a, b) => a - b);
  }
  // 로또 출력
  #generateLotto(min, max) {
    try {
      const arr = this.random.generateRandomNumbers(min, max);
      console.log("arr", arr);
      this.#validateDuplicatedNumbers(arr);
      this.#sortAscending(arr);
    } catch (error) {
      this.#generateLotto(min, max);
    }
  }
  generateLottoNTrials(n, min, max) {
    for (let i = 0; i < n; i++) {
      this.#generateLotto(min, max);
    }
  }
}

export default Lotto;
