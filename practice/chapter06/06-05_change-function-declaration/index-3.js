const newEnglanders = someCustomers.filter((c) => isNewEngland(c));
function isNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}
