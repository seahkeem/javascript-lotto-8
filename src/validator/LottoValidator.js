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

  static validateLottoNumbers(numbers) {
    if (numbers.length !== LOTTO_RULES.COUNT) {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== LOTTO_RULES.COUNT) {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`);
    }

    numbers.forEach(number => this.#validateSingleNumber(number));
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.#validateSingleNumber(bonusNumber);

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER}`);
    }
  }
}

export default LottoValidator;
