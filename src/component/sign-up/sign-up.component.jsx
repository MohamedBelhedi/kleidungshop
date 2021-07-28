import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,benutzerProfil} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayname:'',
            email:'',
            passwort:'',
            passwortBestätigung:''
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const{displayname,email,passwort,passwortBestätigung}=this.state
        if(passwort!=passwortBestätigung){
            alert('Passwort stimmt nicht Überein')
            return;
        }
        try{
            const{user}=await auth.createUserWithEmailAndPassword(
                email,
                passwort);

                await benutzerProfil(user,{displayname});
                this.setState({
                    displayname:'',
                    email:'',
                    passwort:'',
                    passwortBestätigung:''
                })


        }catch(error){

            // console.error(error)
            alert("Passwort Stimmt nicht überein",error)
        }
    };

    handleChange=event=>{
        const{name,value}=event.target;
        this.setState({[name]:value});
    }

    render(){
        const{displayname,email,passwort,passwortBestätigung}=this.state
        return(
            <div className="sign-up">
                <h2 className="title">Ich habe kein Account 😋</h2>
                <span>Melde dich mit deiner Email und Passwort an</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput

                    type="text"
                    name="displayname"
                    value={displayname}
                    onChange={this.handleChange}
                    label="Name Anzeigen"
                    required
                    />
                    <FormInput

                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />
                    <FormInput

                    type="password"
                    name="passwort"
                    value={passwort}
                    onChange={this.handleChange}
                    label="Passwort"
                    required
                    />
                    <FormInput

                    type="password"
                    name="passwortBestätigung"
                    value={passwortBestätigung}
                    onChange={this.handleChange}
                    label="Passwort Bestätigung"
                    required
                    />
                  
                   <CustomButton>Registrieren</CustomButton>

                </form>
            </div>
        )
    }
}












export default SignUp;