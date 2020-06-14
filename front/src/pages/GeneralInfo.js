import React from 'react'
import FormA from '../components/GeneralInfoForm'
import Sidebarr from '../components/Layout/Sidebar'
class GeneralInfo extends React.Component{
constructor(props){
    super(props);
    this.state={
        generalInfo:[{
            weight:'33',
            temperature:'17',
            respiratoryRate:'@#@' ,
            specialMarking:'dfdfd',
            heartRate:'65',
            reproductiveStatus:'gfhfyfh', 
        }]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormA  list={this.state.generalInfo[0]}/>
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default GeneralInfo;