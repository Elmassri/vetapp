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
            

        };
    }


    render(){
        return(
            <>
            <Header></Header>
            <TableForm style={{width:'100px'}} ></TableForm>
            <Footer />
              
            
            </>
        )
    }
}
export default Admin;