import readline from "readline";

class Console {
  static async readLine(input) {
    return new Promise((resolve, reject) => {
      if (arguments.length !== 1) {
        reject(new Error("질문은 하나여야 합니다"));
      }

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      // rl.question은 비동기 함수
      rl.question(input, (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }

  static print(input) {
    console.log(input);
  }
}

export default Console;
