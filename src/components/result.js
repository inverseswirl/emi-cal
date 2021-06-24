import React from 'react';


const  Result =({emi})=>{
    

  return(
         
      <div className="result">
         
        <p className="result-details"> Your Monthly Repayments are 
         <em style={emi? {color: '#28242B'} :{color: '$text-color'}}>${ emi ? Math.round(emi) : 0 }</em></p>
        
       </div>
           
           
  )
}
    
export default Result;



          



  
           
    
      
         
             
            


    