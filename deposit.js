function Deposit() {
  const ctx                   = React.useContext(UserContext);
  const [status, setStatus]   = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const [balance, setBalance] = React.useState(null);

  function findCurrentUser() {
      return ctx.users.find((user) =>
      user.email === ctx.currentUser);
  }

  function initialieBalance() {
      setBalance(findCurrentUser().balance)
      return balance
  }

  function validate(field) {
      if (!field) {
          setStatus('Error!: No amount entered');
          setTimeout(() => setStatus(''), 3000);
          return false
      }
      return true;
  }

  function handleDeposit() {
      if (!validate(deposit, 'deposit')) return;

      if (isNaN(deposit)) {
          setStatus('Error!: deposit must be number');
          return;
      }

      const depositNum = Number(deposit);
      if (depositNum <= 0) {
          setStatus('Error: despoit must be positive number');
          return;
      }

      setBalance(balance + depositNum);
      findCurrentUser().balance += depositNum;
      setStatus('deposite sucessful');
  }

  return (
      <Card
          bgcolor="secondary"
          header='Deposit'
          status={status}
          body={ctx.currentUser !== null ? (
              <>
                  Balance <br /> {balance === null ? initialieBalance() : balance} <br />
                  Deposit Amount<br />
                  <input type="input" className="form-control" id="deposit" placeholder="Enter Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br />
                  <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={deposit === ''}>Deposit</button>
              </>
          ) : (
              <>
                  <h5>Please Login</h5>
                  <button type="submit" className="btn btn-light"><a href='#/login/' >
                  Click to Login Page</a></button>
              </>
          )}
      />
  )
}