import React from 'react'
import './List.css'

class List extends React.Component{

   

    tombolNama = (e) =>{
        this.setState({nama : e.target.value })
    }

    tombolKerja = (e) =>{
        this.setState({pekerjaan: e.target.value})
    }

    tombolLahir = (e) =>{
        this.setState({ttl: e.target.value})
    }

    addItem  = (x) =>{
        x.preventDefault()
        this.props.submit(this.state)
        
    }

    render(){

        return(
            <div className='container' id='list'>
                <div className='row mt-1'>
                 <div className='col-6'>
                    <input type='text' placeholder='Input nama' className='form-control' onChange={this.tombolNama}/>
                </div>
                <div className='col-md-3'>
                <input type='button' value='SUBMIT' className='btn btn-success btn-block' onClick={this.addItem}/>
                </div>
                </div>

                <div className='row mt-1'>
                 <div className='col-9'>
                    <input type='text' placeholder='Input pekerjaan' className='form-control'  onChange={this.tombolKerja}/>
                </div>
                </div>

                <div className='row mt-1'>
                 <div className='col-9'>
                    <input type='text' placeholder='Input tanggal lahir' className='form-control'  onChange={this.tombolLahir}/>
                </div>
                </div>
                        
            </div>
        )
    }
}

export default List;