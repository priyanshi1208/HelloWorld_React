import React from 'react';
import { Link } from 'react-router-dom';
import "C:\\Users\\ayuanshi\\React\\helloworld\\src\\css\\home.css";
import logo from 'C:\\Users\\ayuanshi\\React\\helloworld\\src\\logo.png';
class home extends React.Component{
  url="https://www.bridgelabz.com/";
 constructor(){
   super()
   this.state={
     userName:'Priyanshi',
     nameError:''
   }
 }
 onClick= ($event) =>{
   console.log('save button is clicked!',$event);
   window.open(this.url,"_blank");
 }
 onNameChange=(event)=>{
   console.log("value is",event.target.value);
   const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
   this.setState({userName:event.target.value})
   if(nameRegex.test(event.target.value)){
     this.setState({nameError:''})
   }else{
     this.setState({nameError:'Name is Incorrect'})
   }
 }
 render(){
    return(
      <div>
        <div>
          <h1>Hello {this.state.userName} from BridgeLabz</h1>
          <img src={logo} onClick={this.onClick}
          alt="The BridgeLabz Logo"></img>
        </div>
        <div>
          <input className="input" onChange={this.onNameChange}></input><br></br>
          <span className="error-output">{this.state.nameError}</span>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}
export default home