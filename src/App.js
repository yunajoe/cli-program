import LottoPlanet from "./lotto-planet/src/lotto-planet.js";

class App {
  async run() {
    console.log("APP 실행합니다.");
    const lottoPlanet = new LottoPlanet();
    lottoPlanet.run();
  }
}

export default App;
