import { ERROR_MESSAGES, LOTTO_RULES } from "../constants/messages.js";

class LottoValidator {

  static #validateSingleNumber(number) {
    const isOutOfRange = number < LOTTO_RULES.MIN_NUMBER || number > LOTTO_RULES.MAX_NUMBER;

    if (!Number.isInteger(number) || isOutOfRange) {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_RANGE}`);
    }
  }

  static validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_AMOUNT}`);
    }

    if (amount % LOTTO_RULES.PRICE !== 0) {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_AMOUNT}`);
    }
  }

}

export default LottoValidator;
