export const LOTTO_RULES = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  COUNT: 6,
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
});
