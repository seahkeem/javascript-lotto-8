import { Console, Random } from "@woowacourse/mission-utils";
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Lotto from './Lotto.js';
import LottoValidator from './validator/LottoValidator.js';
import { LOTTO_RULES } from "./constants/messages.js";

class App {
  #inputView;
  #outputView;
  #purchaseAmount;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#purchaseAmount = 0;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  async run() {

    if (await this.#handlePurchaseAmount()) {
      this.#generateLottos();
      this.#outputView.printPurchaseCount(this.#lottos.length);
      this.#outputView.printLottos(this.#lottos);

      if (await this.#handleWinningNumbers()) {
        await this.#handleBonusNumber();
      }
    }
  }

  async #handleInput(handler) {
    try {
      const result = await handler();
      return { success: true, result };
    } catch (error) {
      Console.print(error.message);
      return { success: false };
    }
  }

  async #handlePurchaseAmount() {
    const { success, result: amount } = await this.#handleInput(
      this.#inputView.readPurchaseAmount.bind(this.#inputView)
    );
    if (success) {
      this.#purchaseAmount = amount;
      return true;
    }
    return false;
  }

  async #handleWinningNumbers() {

    const { success, result: numbers } = await this.#handleInput(async () => {
      const winningNumbers = await this.#inputView.readWinningNumbers();

      LottoValidator.validateLottoNumbers(winningNumbers);
      return winningNumbers;
    });

    if (success) {
      this.#winningNumbers = numbers;
      return true;
    }
    return false;
  }

  async #handleBonusNumber() {
    const { success, result: bonusNumber } = await this.#handleInput(async () => {
      const bonus = await this.#inputView.readBonusNumber();

      LottoValidator.validateBonusNumber(bonus, this.#winningNumbers);
      return bonus;
    });

    if (success) {
      this.#bonusNumber = bonusNumber;
      return true;
    }
    return false;
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
