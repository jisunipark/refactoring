import createStatementData from './createStatementData';

export class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    let result = 0;

    switch (this.play.type) {
      case 'tragedy':
        result = 40_000;
        if (this.audience > 30) {
          result += 1_000 * (this.audience - 30);
        }
        break;
      case 'comedy':
        result = 30_000;

        if (this.audience > 20) {
          result += 10_000 + 500 * (this.audience - 20);
        }
        result += 300 * this.audience;
        break;

      default:
        throw new Error(`알 수 없는 장르: ${this.play.type}`);
    }

    return result;
  }
}

export default function statement(invoice, plays) {
  renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `청구내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} ${perf.audience}석\n`;
  }

  result += `총액 ${usd(data.totalAmount)}\n`;
  result += `적립 포인트 ${data.totalVolumeCredits}점\n`;

  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

export function htmlStatement(invoice, plays) {
  renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>청구내역 (고객명: ${data.customer})</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>\n';

  for (let perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td><td>(${usd(perf.amount)} ${perf.audience}석)</td>\n`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }

  result += '</table>\n';
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;

  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(aNumber / 100);
}
