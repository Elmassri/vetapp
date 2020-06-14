import React from 'react'
import FormA from '../components/AdmissionForm'
import Sidebarr from '../components/Layout/Sidebar'
class Admission extends React.Component{
constructor(props){
    super(props);
    this.state={
        admission:[{
            foodIntake:'qw',
            waterIntake:'we',
            mainComplaint:'er',
            onsetofProblem :'rt',
            durationofProblem:'ty',
            petActivity:'yu',
            systemsAffected:'', 

        }]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormA list={this.state.admission[0]}/>
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default Admission;