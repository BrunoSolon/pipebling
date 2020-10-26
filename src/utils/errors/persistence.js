import ExtendableError from './extendable-error';

export default class PersistenceError extends ExtendableError {
  constructor(err) {
    super();
    this.err = err;
    this.msgErr = 'Parece que houve um problema com o banco de dados, tente novamente.';
  }
}
