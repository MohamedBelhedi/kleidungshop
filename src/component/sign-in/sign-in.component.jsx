
import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import {auth,signInWithGoogle}from'../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            passwort:""
        }
    }


handleSubmit=async event=>{
    event.preventDefault();
    const{email,passwort}=this.state
    try{
        await auth.signInWithEmailAndPassword(email,passwort)
        this.setState({email:'',passwort:''})

    }catch(error){
        console.error(error)
    }
   
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

                <div className="buttons">       

                <CustomButton type="submit">Anmelden</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                    {''}
                    Anmelden mit Google
                    {''}
                    </CustomButton>
                
                    </div>
            </form>
        </div>
    )
}}

export default SignIn;