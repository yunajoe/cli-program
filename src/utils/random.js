class Random {
  // 숫자 확인
  static #isNumber(value) {
    return typeof value === "number";
  }

  // 최소, 최대 수
  static #validateRange(startValue, endValue) {
    if (!Random.#isNumber(startValue) || !Random.#isNumber(endValue)) {
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }
    if (startValue < Number.MIN_SAFE_INTEGER) {
      throw new Error(
        "[ERROR] 최소 숫자는 Number.MIN_SAFE_INTEGER 보다 커야 합니다.",
      );
    }
    if (endValue > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        "[ERROR] 최대 숫자는 Number.MAX_SAFE_INTEGER 보다 커야 합니다.",
      );
    }
  }

  /**
   * 범위가 최소 min, 최대 max까지의 숫자를 return
   */
  static #pickRandomNumbers(min, max) {
    Random.#validateRange(min, max);
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  static #shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * 랜덤으로 5개 나오기
   */
  static generateRandomNumbers(min, max) {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const num = Random.#pickRandomNumbers(min, max);
      result.push(num);
    }
    return Random.#shuffle(result);
  }
}

export default Random;
