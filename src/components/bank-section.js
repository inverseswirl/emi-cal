import React from 'react';
import { FaPiggyBank} from "react-icons/fa"


class Bank extends React.Component{
   constructor(props){
       super(props)
       
       
       this.input=this.input.bind(this);
    }


   input(e){
   this.props.loanAmount(e.target.value)
       e.preventDefault()
      
   }

   render(){
       return(
   
        <div className="bank-section">
            <label htmlFor="" className="loan-amount-title">Loaned Amount <FaPiggyBank className="loan-amount-title-icon"/> </label> 
            <div className="input">
                <span className="input-dollar">$</span>
                <input className="input-style"
                placeholder="0"
                type="tel"
                maxLength="8"
                min="50,000"
                max="999,999"
                onInput={this.input}
                />
            </div>
           
        </div>
       

  
       
       
      
     )
  }
}
       
       
       
export default Bank;
           

   
