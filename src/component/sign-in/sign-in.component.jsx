import { render } from '@testing-library/react';
import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

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
            <br/>
            {/* <label>Email</label> */}
                <FormInput
                name="email" 
                type="email" 
                value={this.state.email} 
                label="Email"
                handleChange={this.handleChange}
                required
                 />
                
                {/* <label>Passwort</label> */}
                <FormInput 
                name="passwort" 
                type="password" 
                value={this.state.passwort}
                label="Passwort" 
                required 
                handleChange={this.handleChange}/>
                

                <CustomButton type="submit">Anmelden</CustomButton>
                
                
            </form>
        </div>
    )
}}

export default SignIn;