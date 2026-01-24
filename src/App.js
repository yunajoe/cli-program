import LottoPlanet from "./lotto-planet/src/lotto-planet.js";

class App {
  async run() {
    // lottoPlanet
    const lottoPlanet = new LottoPlanet();
    lottoPlanet.run();
  }
}

export default App;
