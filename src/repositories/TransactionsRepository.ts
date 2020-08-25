import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): { transactions: Transaction[]; balance: Balance } {
    const balance = this.getBalance();
    return { transactions: this.transactions, balance };
  }

  public getBalance(): Balance {
    const incomeSum = this.transactions.reduce((accumulator, item) => {
      return item.type === 'income' ? accumulator + item.value : accumulator;
    }, 0);
    const outcomeSum = this.transactions.reduce((accumulator, item) => {
      return item.type === 'outcome' ? accumulator + item.value : accumulator;
    }, 0);
    const balance: Balance = {
      income: incomeSum,
      outcome: outcomeSum,
      total: incomeSum - outcomeSum,
    };
    return balance;
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
