import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumlah from './components/Penjumlahan/jumlah'
import List from './components/List/List'
import Cardlist from './components/CardList/Card'

class App extends React.Component {

  state = {
    
    dataKu : [

        { id: 1,
          nama : 'andi',
        pekerjaan : 'Front-end',
        ttl : '23-06-1970'},

        { id : 2,
          nama : 'seto',
        pekerjaan : 'back-end',
        ttl : '23-06-1970'},

        { id : 3,
          nama : 'budi',
        pekerjaan : 'Fullstack',
        ttl : '23-06-1970'}
    ]     
}

// function untuk ngepush karena statenya berada disni, disimpan diprops dilempar ke function add item , setelah mendapatkan val
  pushItem  = (e) =>{
          e.id = Math.random()
          let tampung = this.state.dataKu;
          tampung.push(e);
          this.setState({tampung})
}


  render(){
  return (
    <div className="container">
        <Jumlah /> <br/>
        <List submit={this.pushItem}/> <br/>
        <Cardlist showdata={this.state.dataKu}/>
         
       
    </div>
  );
}
}
export default App;
