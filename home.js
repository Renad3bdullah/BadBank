function Home(){
  return (
    <Card 
    bgcolor="secondary"
      txtcolor="light"
      header={<>
        <h1>BadBank Landing Page</h1>
        </>}
        title={<>
        <span>
        <h1>"Welcome to bad bank"!</h1></span>
        </>}
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}