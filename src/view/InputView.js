import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, OUTPUT_MESSAGES } from "../constants/messages.js";
import LottoValidator from "../validator/LottoValidator.js";

class InputView {
  async readPurchaseAmount() {
    const amountString = await Console.readLineAsync(OUTPUT_MESSAGES.AMOUNT_INPUT);
    const amount = Number(amountString.trim());

    if (Number.isNaN(amount) || amountString.trim() === '') {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_AMOUNT}`);
    }

    LottoValidator.validatePurchaseAmount(amount);

    return amount;
  }
}

export default InputView;
