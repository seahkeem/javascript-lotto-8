import { LOTTO_RULES } from "./constants/messages.js";

class LottoResult {
  #results;
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #totalPrize;
  #purchaseAmount;

  constructor(lottos, winningNumbers, bonusNumber, purchaseAmount) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchaseAmount = purchaseAmount;
    this.#results = this.#initializeResults();
    this.#totalPrize = 0;
    this.#calculateResults();
  }

  #initializeResults() {
    return LOTTO_RULES.RANK_ORDER.reduce((acc, rankKey) => {
      acc[rankKey] = 0;
      return acc;
    }, {});
  }

  #calculateResults() {
    this.#lottos.forEach(lotto => {
      const { matchCount, bonusMatch } = this.#checkLotto(lotto.getNumbers());
      this.#determineRank(matchCount, bonusMatch);
    });
  }

  #checkLotto(lottoNumbers) {
    const winningSet = new Set(this.#winningNumbers);
    let matchCount = 0;
    let bonusMatch = false;

    lottoNumbers.forEach(number => {
      if (winningSet.has(number)) {
        matchCount += 1;
      }
    });

    if (matchCount === 5 && lottoNumbers.includes(this.#bonusNumber)) {
      bonusMatch = true;
    }

    return { matchCount, bonusMatch };
  }

  #determineRank(matchCount, bonusMatch) {
    const prizes = LOTTO_RULES.WINNING_PRIZES;

    if (matchCount === prizes[1].match) {
      this.#addResult(1);
      return;
    }

    if (matchCount === prizes[3].match) {
      if (bonusMatch && prizes[2].bonus) {
        this.#addResult(2);
        return;
      }
      this.#addResult(3);
      return;
    }

    if (matchCount === prizes[4].match) {
      this.#addResult(4);
      return;
    }

    if (matchCount === prizes[5].match) {
      this.#addResult(5);
    }
  }

  #addResult(rankKey) {
    this.#results[rankKey] += 1;
    this.#totalPrize += LOTTO_RULES.WINNING_PRIZES[rankKey].prize;
  }

  getReturnRate() {
    if (this.#purchaseAmount === 0) {
      return 0.0;
    }
    const rate = (this.#totalPrize / this.#purchaseAmount) * 100;
    return Math.round(rate * 100) / 100;
  }

  getResults() {
    return this.#results;
  }
}

export default LottoResult;
