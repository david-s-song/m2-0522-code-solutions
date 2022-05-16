/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (parseInt(amount) === amount && amount > 0) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var getBalance = 0;
  var deposit = 0;
  var withdraw = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposit += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdraw += this.transactions[i].amount;
    } getBalance = deposit - withdraw;
  } return getBalance;
};
