class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_reservations.push(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    // 새로 추가한 매개변수를 사용하는지 확인
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}
