import React from 'react'
import FormA from '../components/DewormingForm'

import Sidebarr from '../components/Layout/Sidebar'
class Deworming extends React.Component{
constructor(props){
    super(props);
    this.state={
        deworming:[{
            date:'',
            nextDate:'',

        }]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormA  list={this.state.deworming[0]}/>
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default Deworming;