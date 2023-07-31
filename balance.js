function Balance() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState('');

  function findCurrentUser() {
      return ctx.users.find((user) => user.email === ctx.currentUser);
  }

  return (
      <Card
          bgcolor="secondry"
          header='Balance'
          status={status}
          body={ctx.currentUser !== null ? (
              <>
                  Balance is <br />
                  {findCurrentUser().balance}
              </>
          ) : (
              <>
                  <h5>Login Please</h5>
                  <button type="submit" className="btn btn-light"><a href='#/login/' >Login</a></button>
              </>
          )}
      />
  )
}