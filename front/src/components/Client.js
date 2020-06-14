import React from 'react'

import TableForm from '../components/Table'
import { BrowserRouter } from 'react-router-dom'



class Client extends React.Component{
    
        constructor(props){
            super(props);
            this.state={
                list:[{name:'hello',id:3}]
            }
        }


    render(){
        return(
            <div>
                
                <TableForm list={this.state.list}></TableForm>
            </div>
            
        )
    }
}
export default Client