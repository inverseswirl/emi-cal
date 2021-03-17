import React from 'react';
import Bank from './components/bank-section';
import EMI from'./components/emi';
import Title from './components/title-bar';
import Interest from './components/interest-rate'
import Result from './components/result';
import Footer from './components/footer';
import House from './style-components/house';




class Calculator extends React.Component  {
   constructor(props){
      super(props)


      this.state={
         loanvalue: "",
         sliderValue: '5',
         interestValue: '0.00'
       
      }
      this.handleLoaninput=this.handleLoaninput.bind(this);
      this.handlesliderValue=this.handlesliderValue.bind(this);
      this.handleInterestchange=this.handleInterestchange.bind(this);
     
   }

handleLoaninput(loanvalue){
  this.setState({loanvalue})
}
handlesliderValue(sliderValue){
   this.setState({ sliderValue})
}
handleInterestchange(interestValue){
   this.setState({interestValue})
}


render(){
  const{sliderValue,loanvalue,interestValue}=this.state

  


  const principal=parseInt(loanvalue);
  var multiply=12*parseInt(sliderValue);
  const calculation= parseFloat(interestValue)/(1200);

  var power =  Math.pow(1 +calculation,multiply);
  
  const num= principal * calculation * power;
  const denominator=power-1;

  const emi= num/denominator
  


      return (
     <React.Fragment>
    
        
            <Title /> 
            <House />
            <Bank loanAmount= {this.handleLoaninput} />
            
            <EMI 
            onSliderChange = {this.handlesliderValue}
            label="Your loan term is for"
            sliderValue={sliderValue} 
            />
            
            <Interest interestRate={this.handleInterestchange}/>
             {/* <Repayment /> */}
             <Result 
             emi={emi}
             />
           
            <Footer />
            
  
       
    
            </React.Fragment>
       
       
     )
   }
   
}

export default Calculator;