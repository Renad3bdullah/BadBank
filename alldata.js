function AllData() {
  const ctx = React.useContext(UserContext);
  return (
      <Card
          bgcolor="secondry"
          header='All Data'
          body={
              <>
                  All users Listed Below: <br />
                  {ctx.users.map(
                      (user, index) => (
                          <p key={index}>
                            {user.name + ' ' 
                            + user.email + ' ' 
                            + user.password + ' ' 
                            + user.balance}</p>
                      )
                  )}
              </>
          }
      />
  )
}