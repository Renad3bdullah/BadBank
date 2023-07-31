function Withdraw() {
  const ctx                         = React.useContext(UserContext);
  const [status, setStatus]         = React.useState('');
  const [withdrawal, setWithdrawal] = React.useState('');
  const [balance, setBalance]       = React.useState(null);

  function findCurrentUser() {
      return ctx.users.find((user) => user.email === ctx.currentUser);
  }

  function initialieBalance() {
      setBalance(findCurrentUser().balance)
      return balance
  }

  function validate(field) {
      if (!field) {
          setStatus('Error! : No amount entered');
          setTimeout(() => setStatus(''), 3000);
          return false
      }
      return true;
  }


  function handleWithdrawal() {
      if (!validate(withdrawal, 'withdrawal')) return;

      if (isNaN(withdrawal)) {
          setStatus('Error! : withdrawal must be number');
          return;
      }

      const withdrawalNum = Number(withdrawal);
      if (withdrawalNum <= 0) {
          setStatus('Error!: withdrawal must be positive number');
          return;
      }

      if (withdrawalNum > balance) {
          setStatus('Insufficient funds.');
          return;
      }

      setBalance(balance - withdrawalNum);
      findCurrentUser().balance -= withdrawalNum;
      setStatus('withdrawal sucessful')
  }

  return (
      <Card
          bgcolor="secondary"
          header='Withdrawal'
          status={status}
          body={ctx.currentUser !== null ? (
              <>
                  Balance <br /> {balance === null ? initialieBalance() : balance} <br />
                  Amount<br />
                  <input type="input" className="form-control" id="" placeholder="Enter Amount" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)} /><br />
                  <button type="submit" className="btn btn-light" onClick={handleWithdrawal} disabled={withdrawal === ''}>Withdraw</button>
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