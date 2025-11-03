import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES, LOTTO_RULES } from "../constants/messages.js";

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

  printResults(results, returnRate) {
    Console.print(OUTPUT_MESSAGES.RESULT_START);

    LOTTO_RULES.RANK_ORDER.reverse().forEach(rankKey => {
      const messageKey = this.#getOutputMessageKey(rankKey);
      const count = results[rankKey];
      Console.print(`${OUTPUT_MESSAGES[messageKey]}${count}개`);
    });

    Console.print(OUTPUT_MESSAGES.RETURN_RATE(returnRate.toFixed(1)));
  }

  #getOutputMessageKey(rankKey) {
    switch (rankKey) {
      case 5:
        return 'MATCH_THREE';
      case 4:
        return 'MATCH_FOUR';
      case 3:
        return 'MATCH_FIVE';
      case 2:
        return 'MATCH_FIVE_BONUS';
      case 1:
        return 'MATCH_SIX';
      default:
        return '';
    }
  }
}

export default OutputView;
