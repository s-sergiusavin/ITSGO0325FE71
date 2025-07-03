function Birthdate({ birthdate, loggerHandler }) {
  const currentDate = new Date();
  const age =
    currentDate.getFullYear() - birthdate.getFullYear() -
    (currentDate < new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate()) ? 1 : 0);

  const doSomething = () => {
   loggerHandler(age);
  };

  return (
    <div className="birthday">
      <p>Birthday: {birthdate.toLocaleDateString()}</p>
      <p>Age: {age}</p>
            <button onClick={doSomething}>Do something</button>
    </div>
  );
}

export default Birthdate;
