import React from 'react'

import Table from '../components/Table'

import SearchInput from '../components/SearchInput'
import '@material-ui/core'
import TableForm from '../components/Table'
import Client from '../components/Client';

import './admin.css'
import { Router, Route } from 'react-router';
import Header from '../components/Layout/Header'

import Footer from '../components/Layout/Footer'

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            list:[],
        };
   }
    async componentDidMount() {
        const token = localStorage.getItem('token');
        if (token !== undefined && token !== null) {
    
          try {
            const response = await fetch(`http://127.0.0.1:8000/api/owners-pets?token=${token}`);
            const json = await response.json();
    
            this.setState({
              list:json.data
              
            })
          } catch (error) {}
        }
      }


    render(){
        return(
            <>
            <Header></Header>
            <TableForm style={{width:'100px'}} list={this.state.list}></TableForm>
            <Footer />
              
            
            </>
        )
    }
}
export default Admin;