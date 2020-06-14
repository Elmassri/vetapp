import React from 'react'

import {  Button,Input, } from 'reactstrap'
import UserRole from '../components/Layout/Dropdown'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

class AddUser extends React.Component{
    constructor(props){
super(props);
this.state={
        userName:'',
        userPassword:'',
        phoneNumber: '',
        address:'',
        UserRole:''



}

    }
    onNameChange(event)
    {
        this.setState({userName:event.target.value})
    }
    onPassChange(event)
    {
        this.setState({userPassword:event.target.value})
    }
    onPhoneChange(event)
    {
        this.setState({phoneNumber:event.target.value})
    }
    onAddressChange(event)
    {
        this.setState({address:event.target.value})
    }
    onRoleChange(event)
    {
        this.setState({UserRole:event.target.value})
    }
  

    render(){
        return(
            <div>
                <Header></Header>
            <div style={{maxWidth:'100%',margin:'50px',height:'100%'}}>
                
              <form style={{alignItems:'center',textAlign:'center'}}>  <label>Add user Name</label><Input onChange={this.onNameChange}></Input>
                <lable>Generate a password</lable><Input onChange={this.onPassChange}></Input>
                <lable>Phone Number</lable><Input onChange={this.onPhoneChange}></Input>
                <lable>Address</lable><Input onChange={this.onAddressChange}></Input>
               
                <UserRole></UserRole>
                <Button style={{width:'50%'}}>Create</Button></form>
                
            </div>
            <Footer></Footer>
            </div>
        )
    }


}
export default AddUser