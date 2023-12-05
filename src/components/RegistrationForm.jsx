import { Component } from "react";
import { Container } from "react-bootstrap";

export class RegistrationForm extends Component{
    constructor(){
        super();
        this.state={
            fname:"",
            lname:"",
            phone:"",
            email:""
        }
    }
    handleFirstNameChange=(e)=>{
       this.setState({fname:e.target.value});
    }
    handleLastNameChange=(e)=>{
        this.setState({lname:e.target.value});
    }
    handleChange=(e)=>{
        // this.setState({:e.target.value});
    }
    render(){
        return (
            <Container className="mt-5">
                <div>
                <form>
                    <input type="text" placeholder="Enter first name" onKeyUp={this.handleFirstNameChange}></input>
                    <input type="text" placeholder="Enter last name" onKeyUp={this.handleLastNameChange}></input>
                    <input type="text" placeholder="Enter phone"></input>
                    <input type="email" placeholder="Enter email"></input>
                    <div>
                        <input type="submit" value='Register'></input>
                    </div>
                </form>
            </div>
            </Container>
            
        );
    }
}