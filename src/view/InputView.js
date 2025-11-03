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

  async readWinningNumbers() {
    const numbersString = await Console.readLineAsync(OUTPUT_MESSAGES.WINNING_NUMBERS_INPUT);
    const numbers = numbersString
      .split(',')
      .map(number => {
        const trimmedNumber = number.trim();
        if (trimmedNumber === '') {
          throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`);
        }
        return Number(trimmedNumber);
      });
    return numbers;
  }

  async readBonusNumber() {
    const numberString = await Console.readLineAsync(OUTPUT_MESSAGES.BONUS_NUMBER_INPUT);
    const number = Number(numberString.trim());

    if (Number.isNaN(number) || numberString.trim() === '') {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_RANGE}`);
    }

    return number;
  }
}

export default InputView;
