export default function amountFor(perf, play) {
  // 값이 바뀌지 않는 변수는 매개변수로 전달

  let thisAmount = 0; // 변수를 초기화하는 코드

  switch (play.type) {
    case 'tragedy':
      thisAmount = 40_000;

      if (perf.audience > 30) {
        thisAmount += 1_000 * (perf.audience - 30);
      }
      break;
    case 'comedy':
      thisAmount = 30_000;

      if (perf.audience > 20) {
        thisAmount += 10_000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;
      break;

    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }

  return thisAmount; // 함수 안에서 값이 바뀌는 변수 반환
}
