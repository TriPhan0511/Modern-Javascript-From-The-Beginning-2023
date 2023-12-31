class Wallet {
  constructor() {
    this._balance = 0
    this._transactions = []
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`)
    this._transactions.push({
      type: 'Deposit',
      amount,
    })
  }
  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`)
    this._transactions.push({
      type: 'Withdraw',
      amount,
    })
  }

  deposit(amount) {
    if (amount > 0) {
      this._processDeposit(amount)
      this._balance += amount
    }
  }
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds.')
      return
    }
    this._processWithdraw(amount)
    this._balance -= amount
  }

  get balance() {
    return this._balance
  }

  get transactions() {
    return this._transactions
  }
}

const myWallet = new Wallet()

myWallet.withdraw(100) // Not enough funds.

myWallet.deposit(100) // Depositing 100

console.log(myWallet.balance) // 100
console.log(myWallet.transactions)
// -> [{type: 'Deposit', amount: 100}]

myWallet.deposit(50) // Depositing 50

console.log(myWallet.balance) // 150
console.log(myWallet.transactions)
// ->
// [

//   {type: 'Deposit', amount: 100},
//   {type: 'Deposit', amount: 50}
// ]

myWallet.withdraw(120) // Withdrawing 120

console.log(myWallet.balance) // 30
console.log(myWallet.transactions)
// ->
// [

//   {type: 'Deposit', amount: 100},
//   {type: 'Deposit', amount: 50},
//   {type: 'Withdraw', amount: 120}
// ]
