export const LOTTO_RULES = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  COUNT: 6,
  WINNING_PRIZES: {
    5: { match: 3, prize: 5000 },
    4: { match: 4, prize: 50000 },
    3: { match: 5, prize: 1500000 },
    2: { match: 5, bonus: true, prize: 30000000 },
    1: { match: 6, prize: 2000000000 },
  },
  RANK_ORDER: [5, 4, 3, 2, 1],
});

export const ERROR_MESSAGES = Object.freeze({
  PREFIX: '[ERROR]',
  INVALID_AMOUNT: '로또 구입 금액은 1,000원 단위여야 합니다.',
  INVALID_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_NUMBER_COUNT: '로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBERS: '로또 번호는 중복될 수 없습니다.',
  DUPLICATE_BONUS_NUMBER: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
});

export const OUTPUT_MESSAGES = Object.freeze({
  AMOUNT_INPUT: '구입금액을 입력해 주세요.\n',
  PURCHASE_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_NUMBERS_INPUT: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_INPUT: '\n보너스 번호를 입력해 주세요.\n',
  RESULT_START: '\n당첨 통계\n---',
  MATCH_THREE: '3개 일치 (5,000원) - ',
  MATCH_FOUR: '4개 일치 (50,000원) - ',
  MATCH_FIVE: '5개 일치 (1,500,000원) - ',
  MATCH_FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_SIX: '6개 일치 (2,000,000,000원) - ',
  RETURN_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});
