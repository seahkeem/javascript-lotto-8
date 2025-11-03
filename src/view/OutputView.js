import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants/messages.js";

class OutputView {
  printPurchaseCount(count) {
    Console.print(OUTPUT_MESSAGES.PURCHASE_COUNT(count));
  }

  printLottos(lottos) {
    lottos.forEach(lotto => {
      const numbers = lotto.getNumbers().join(', ');
      Console.print(`[${numbers}]`);
    });
    Console.print('');
  }
}

export default OutputView;
