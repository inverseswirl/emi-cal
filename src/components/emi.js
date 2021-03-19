import React from 'react';
import { GiHourglass} from "react-icons/gi";



class EMI extends React.Component{
    constructor(props){
        super(props)

       

      this.state={
                left: '-5%'
            }
  

            this.changeValue=this.changeValue.bind(this);
    }


changeValue(e){
   this.props.onSliderChange(e.target.value);
   var target =e.target;
 
    if(target.value==='5'){
      this.setState({ left: '-5%'})
    }else if(target.value==='10'){
       this.setState({left: '12%'})
    }else if(target.value==='15'){
        this.setState({left: '30%'})
    }else if(target.value==='20'){
       this.setState({left: '49%'})
    }else if(target.value==='25'){
        this.setState({left: '64%'})
    }else if(target.value==='30'){
     this.setState({ left:'81%'})
    }else{
       this.setState({left:'-4%'})
    }
    e.preventDefault()

}






    render(){
    
   

   return(

       <div className="slider-container">
           <label htmlFor="years" className="slider-label">{this.props.label}<GiHourglass className="slider-label-icon"/> </label>
               <span className='slider-span'style={{left: this.state.left}}>
                   {this.props.sliderValue} </span>
                   
               <input className="slider"
                   id="years"
                   type="range"
                   min="5"
                   max="30"
                   step="5"
                   value={this.props.sliderValue}
                   onChange={this.changeValue}
               /> 

        </div>
    
 )
}
}

export default EMI;

          

           
     
              
               
                
               
            

          
       
          
        




  


