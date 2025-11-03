import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test.each([
    [[1, 2, 3, 4, 5, 46], "46이 범위(1~45)를 벗어남"],
    [[0, 2, 3, 4, 5, 6], "0이 범위(1~45)를 벗어남"],
  ])("로또 번호가 범위(1~45)를 벗어나면 예외가 발생한다. (입력: %p)", (invalidNumbers, description) => {
    expect(() => {
      new Lotto(invalidNumbers);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 오름차순으로 정렬된다.", () => {
    const unsortedNumbers = [45, 1, 10, 3, 40, 25];
    const expected = [1, 3, 10, 25, 40, 45];
    
    const lotto = new Lotto(unsortedNumbers);
    
    expect(lotto.getNumbers()).toEqual(expected);
  });
});
