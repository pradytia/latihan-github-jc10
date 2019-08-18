import React from 'react';
import './jumlah.css'
class Jumlah extends React.Component{

    state = {
        count1 : 0,
        count2 : 0,
        count3 : 0
    }


    render(){

        return(
            <div className='container' id='test'>
               <div className='row'>
                <div className='col-md-1'>
                    <input type='button' value='-' className='btn btn-secondary ' onClick={()=> this.setState({count1: this.state.count1 -1})}/>
                 </div>  
                 <div className='col-md-2'> 
                     <h6>{this.state.count1}<br/>Counter 1</h6>
                </div>
                <div className='col-md-1'>
                    <input type='button' value='+' className='btn btn-primary ' onClick={()=> this.setState({count1:this.state.count1 +1})}/>
                </div>
                <div className='col-md-1'>
                    <input type='button' value='-' className='btn btn-secondary ' onClick={()=> this.setState({count2: this.state.count2 -1})}/>
                 </div>  
                 <div className='col-md-2'> 
                     <h6>{this.state.count2}<br/>Counter 2</h6>
                </div>
                <div className='col-md-1'>
                    <input type='button' value='+' className='btn btn-primary ' onClick={()=> this.setState({count2:this.state.count2 +1})}/>
                </div>
                <div className='col-md-1'>
                    <input type='button' value='-' className='btn btn-secondary ' onClick={()=> this.setState({count3: this.state.count3 -1})}/>
                 </div>  
                 <div className='col-md-2'> 
                     <h6>{this.state.count3}<br/>Counter 3</h6>
                </div>
                <div className='col-md-1'>
                    <input type='button' value='+' className='btn btn-primary ' onClick={()=> this.setState({count3:this.state.count3 +1})}/>
                </div>
               </div>
                <br/>
               <div className='row'>
                    <div className='col-md-6'>
                        <input type='button' className='btn btn-info btn-block' value='kurang' 
                         onClick={()=> this.setState({count1:this.state.count1 -1,count2:this.state.count2 -1,count3:this.state.count3 -1})}/>
                    </div>
                    <div className='col-md-6'>
                    <input type='button' className='btn btn-info btn-block' value='tambah' 
                    onClick={()=> this.setState({count1:this.state.count1 +1,count2:this.state.count2 +1,count3:this.state.count3 +1})}/>
                    </div>
               </div>
               {/* <div className='row'>
                    <div className='col-md-6 col-centered'>
                        <input type='button' className='btn btn-info btn-block' value='reset' 
                         onClick={()=> this.setState({count1:0,count2:0,count3:0})}/>
                    </div>
                    </div> */}
            </div>
        )
    }
}

export default Jumlah;