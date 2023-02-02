import React from 'react';
import './index.css';
import atm from './ATM.jpg';

const ATMDeposit = ({ onChange, isDeposit }) => {
    const choice = ["Deposit", "Withdraw"];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (   
    <table>
    <label className="label huge">
    <tr>
      <td><h5> {choice[Number(!isDeposit)]}</h5></td>
       <td> <input type="number" style={{width:"82px"}} onChange={onChange}></input></td>
      <td><button type="submit" width="100" >*</button></td>
        </tr>
      </label>
  </table>
    );
  };

export default function ATMproject () {


    

    let deposit = 0; 
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
  
    let status = `$ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      deposit = Number(event.target.value);
    };
    const handleSubmit = (e) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
       setTotalState(newTotal);
      if (deposit > newTotal) 
      return document.getElementById('total').innerText="insufficient funds";
      e.preventDefault();
       
      
    };


return(

<>

<div className="card">

  <div class="card2"> 
<img class="img1" src={atm}  alt=""  />
  <div className='overlay'>
 
<form onSubmit={handleSubmit}>
       <div><h5>Balance:</h5>
        <h5 id="total">{status}</h5></div>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
        <button onClick={() => setIsDeposit(true)}>Deposit</button>
        <button onClick={() => setIsDeposit(false)}>Withdraw</button>

      </form>

  </div>
</div>


      </div>


</>
)
}


