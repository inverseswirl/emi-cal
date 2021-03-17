import React from 'react';


const  Result =({emi})=>{
    


  return(
         <div className="result">
         
           <p className="result-details"> Your Monthly Repayments are <br/>${ emi ? Math.round(emi) : 0 }</p>
        
           
           

         </div>
       )




  
           
    
      
}
      
export default Result;
           
         
             
            


    