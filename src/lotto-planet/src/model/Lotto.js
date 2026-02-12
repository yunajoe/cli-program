import Random from "#src/utils/random.js";

// 로또 넘버를 발행  &&  관리하는 클래스
class Lotto {
  constructor() {
    this.random = new Random();
  }

  // 중복된 숫자가 있는지 체크
  static #validateDuplicatedNumbers(numbers) {
    if (new Set(number).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자는 허용되지 않습니다.");
    }
  }
  // 오름차순 정렬ㅌㅈ
  static #sortAscending(numbers) {
    return numbers.sorted((a, b) => a - b);
  }
  // 로또 출력
  static generateLotto(min, max) {
    return this.random.generateNumbers(min, max);
  }
}

export default Lotto;
