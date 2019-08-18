import React from 'react';
import './Card.css';
// import CardSecond from './CardUI'

const Cardlist = (show) => {

   const {showdata} = show
   const x = showdata.map((value)=>{
        return(
            <div key={value.id} style={{border: '1px solid black', marginRight:'100px', textAlign:'center', padding:'25px'}}>
                <ul>
                    <li>Nama : {value.nama}</li>
                    <li>Jobs : {value.pekerjaan}</li>
                    <li>ttl :{value.ttl}</li>
                </ul>
            </div>
        )
   })
        return(
            <div className='container fluid d-flex justify-content-center'>
                 {x}
            </div>
        )
    
}

export default Cardlist;