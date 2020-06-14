import React from 'react'
import FormA from '../components/SurgeryForm'
import Sidebarr from '../components/Layout/Sidebar'
class Surgery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            surgeryInfo:[{
               info:'this pet is 5araaaaaaaaa'
            }]
        }
    }

    
    render(){
        return(
        <>
         <div>
       
         <FormA  list={this.state.surgeryInfo[0]}/>
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default Surgery;