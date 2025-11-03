import { Console } from "@woowacourse/mission-utils";
import InputView from './view/InputView.js';

class App {
  #inputView;
  #purchaseAmount;

  constructor() {
    this.#inputView = new InputView();
    this.#purchaseAmount = 0;
  }

  async run() {
    await this.#handlePurchaseAmount();
  }

  async #handlePurchaseAmount() {
    try {
      const amount = await this.#inputView.readPurchaseAmount();
      this.#purchaseAmount = amount;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
