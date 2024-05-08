export default function statement(invoice, plays) {
  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playId];
  }

  function amountFor(aPerformance) {
    // 값이 바뀌지 않는 변수는 매개변수로 전달

    let result = 0; // 변수를 초기화하는 코드

    switch (playFor(aPerformance).type) {
      case 'tragedy':
        result = 40_000;

        if (aPerformance.audience > 30) {
          result += 1_000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30_000;

        if (aPerformance.audience > 20) {
          result += 10_000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;

      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }

    return result; // 함수 안에서 값이 바뀌는 변수 반환
  }

  function volumeCreditsFor(perf) {
    let result = 0;

    // 포인트를 적립한다.
    result += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === playFor(perf).type) result += Math.floor(perf.audience / 5);

    return result;
  }

  function totalVolumeCredits() {
    let volumeCredits = 0; // 변수 선언(초기화)을 반복문 앞으로 이동
    for (let perf of invoice.performances) {
      // 값 누적 로직을 별도 for문으로 분리
      volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
  }

  let totalAmount = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    // 청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} ${perf.audience}석\n`;
    totalAmount += amountFor(perf);
  }

  result += `총액 ${usd(totalAmount)}\n`;
  result += `적립 포인트 ${totalVolumeCredits()}점\n`; // 변수 인라인

  return result;
}
