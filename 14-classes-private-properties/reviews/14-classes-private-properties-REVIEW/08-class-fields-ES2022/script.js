class Wallet {
  // Private fields
  #balance = 0
  #transactions = []

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`)
    this.#transactions.push({
      type: 'Deposit',
      amount,
    })
  }
  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`)
    this.#transactions.push({
      type: 'Withdraw',
      amount,
    })
  }

  // Getters
  get balance() {
    return this.#balance
  }
  get transactions() {
    return this.#transactions
  }

  // Instance methods
  deposit(amount) {
    if (amount > 0) {
      this.#processDeposit(amount)
      this.#balance += amount
    }
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough funds.')
      return
    }
    this.#processWithdraw(amount)
    this.#balance -= amount
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
