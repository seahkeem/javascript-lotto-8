import { Console, Random } from "@woowacourse/mission-utils";
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Lotto from './Lotto.js';
import { LOTTO_RULES } from "./constants/messages.js";

class App {
  #inputView;
  #outputView;
  #purchaseAmount;
  #lottos;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#purchaseAmount = 0;
    this.#lottos = [];
  }

  async run() {

    if (await this.#handlePurchaseAmount()) {
      this.#generateLottos();
      this.#outputView.printPurchaseCount(this.#lottos.length);
      this.#outputView.printLottos(this.#lottos);
    }
  }

  async #handlePurchaseAmount() {
    try {
      const amount = await this.#inputView.readPurchaseAmount();
      this.#purchaseAmount = amount;
      return true;
    } catch (error) {

      Console.print(error.message);
      return false;
    }
  }

  #generateLottos() {
    const count = this.#purchaseAmount / LOTTO_RULES.PRICE;

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_RULES.MIN_NUMBER,
        LOTTO_RULES.MAX_NUMBER,
        LOTTO_RULES.COUNT
      );

      this.#lottos.push(new Lotto(numbers));
    }
  }
}

export default App;
