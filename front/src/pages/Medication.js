import React from 'react'
import FormA from '../components/MedicationForm'
import Sidebarr from '../components/Layout/Sidebar'
class Medication extends React.Component{
constructor(props){
    super(props);
    this.state={
        medication:[{
            date:'',
            name:'As3ad',
            dose:'overdose',
            concentration:'5ara',
        }]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormA  list={this.state.medication[0]}/>
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default Medication;