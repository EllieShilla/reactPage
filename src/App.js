import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      Surname:"Фамилия",
      Name:"Имя",
      Second:"Отчество"
    }
  }

  ReturnText(event){
    // event.preventDefault();
    this.setState({Surname:"Фамилия"},
                  {Name:"Имя"},
                  {Second:"Отчество"});
                  
  }

  render(){
  return (
    <form>
    <div className="App">
<p><input value={this.state.Surname} onChange={e => this.setState({Surname: e.target.value})}/></p>
<p><input value={this.state.Name} onChange={e => this.setState({Name: e.target.value})}/></p>
<p><input value={this.state.Second} onChange={e => this.setState({Second: e.target.value})}/></p>
<p>Город</p>
<p>Email</p>
<button onChange={this.ReturnText}>Отмена</button>

    </div>
    </form>
  );
  }
}

export default App;
