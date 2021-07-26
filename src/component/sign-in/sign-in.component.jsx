import { render } from '@testing-library/react';
import React from 'react'
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            passwort:""
        }
    }


handleSubmit=event=>{
    event.preventDefault();
    this.setState({email:'',passwort:''})
}
handleChange=event=>{
    const{value,name}=event.target;
    this.setState({[name]:value})
}
render(){
    return(
        <div className="sign-in">
            <h2>Ich Habe ein Konto</h2>
            <span>Melde dich mit deiner Email und Passwort an</span>
            <form onSubmit={this.handleSubmit}>
                <input 
                name="email" 
                type="email" 
                value={this.state.email} 
                onChange={this.handleChange}
                required
                 />
                <label>Email</label>
                
                <input name="passwort" type="password" value={this.state.passwort} required />
                <label>Passwort</label>

                <input type="submit" value="Submit Form"/>
                
                
            </form>
        </div>
    )
}}

export default SignIn;