import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (   
  <table>
  <label className="label huge">
  <tr>
    <td><h3> {choice[Number(!isDeposit)]}</h3></td>
     <td> <input type="number" width="200" onChange={onChange}></input></td>
    <td><input type="submit" width="200" value="Submit"></input></td>
      </tr>
    </label>
</table>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = event => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    if (deposit > newTotal) return alert('unable to process transaction');
    setTotalState(newTotal);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
     <div> <h2 id="total">{status}</h2></div>
     <button onClick={() => setIsDeposit(true)}>Press to Deposit</button>
<br></br>
      <button onClick={() => setIsDeposit(false)}>Press to get Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));


