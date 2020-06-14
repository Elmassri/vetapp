import React from 'react'
import FormS from '../components/Form'
import Sidebarr from '../components/Layout/Sidebar'
class Vaccination extends React.Component{
constructor(props){
    super(props);
    this.state={
        vaccination:[{
            date:'',
            brand:'',
            type:'',
            nextDate:'',

        }]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormS list={this.state.vaccination[0]}/>
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default Vaccination;