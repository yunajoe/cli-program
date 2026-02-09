class Random {
  // array 확인
  static #validateArray;

  // 숫자 확인

  // 최소, 최대 수

  /**
   *
   * 범위가 최소 min, 최대 max까지의 숫자를 return
   *
   *
   */
  static pickNumbers(min, max) {
    return Math.random(min, max + 1);
  }
}
