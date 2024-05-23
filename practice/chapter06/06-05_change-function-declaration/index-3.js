const newEnglanders = someCustomers.filter((c) => inNewEngland(aCustomer.address.state);

function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
