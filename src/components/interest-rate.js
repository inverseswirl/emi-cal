import React from 'react';
import {FaPercentage} from 'react-icons/fa'

class Interest extends React.Component{
    constructor(props){
        super(props)

        this.changeValue=this.changeValue.bind(this);
}

changeValue(e){
    this.props.interestRate(e.target.value)
    e.preventDefault();
   
}
  render(){

    return(

        <div className="interest">
            <label htmlFor="interest" className="interest-label">Interest rate per annum</label>
            <input className="interest-input"
                id="interest"
                type="number"
                min="0"
                max="10"
                step="0.01"
                onInput={this.changeValue}
            /> 
            <span className="interest-percent"><FaPercentage /></span>
        </div>
                
    
            
           
       
        
       







    )
  }




}

export default Interest;