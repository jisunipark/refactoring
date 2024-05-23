function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice); // 함수 추출 완료. 추출한 함수가 반환한 값을 원래 변수에 저장한다.
  recordDueDate(invoice);
  printDetails(invoice, outstanding);

  function calculateOutstanding(invoice) {
    let outstanding = 0; // 추출할 코드 복사
    for (const o of invoice.orders) {
      outstanding += o.amount;
    }
    return outstanding; // 수정된 값 반환
  }

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
