function printOwing(invoice) {
  printBanner();

  // 미해결 채무(outstanding) 계산
  let outstanding = 0; // 1. 맨 위에 있던 선언문을 이 위치로 이동 (문장 슬라이드)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outstanding);

  function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  }

  function printBanner() {
    console.log('***********');
    console.log('**고객 채무**');
    console.log('***********');
  }

  function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
  }
}
