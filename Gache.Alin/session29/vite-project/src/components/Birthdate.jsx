function Birthdate({ birthdate, loggerHandler }) {
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  const doSomething = () => {
    console.log("Clicked");
    loggerHandler(age)
  };

  return (
    <div>
      <p>Birthday:{birthdate.toLocaleDateString()}</p>
      <p>Age: {age}</p>
      <button onClick={doSomething}>Do something</button>
    </div>
  );
}

export default Birthdate;
