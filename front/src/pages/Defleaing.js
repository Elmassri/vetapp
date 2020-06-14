import React from 'react'
import FormA from '../components/DefleaingForm'
import Sidebarr from '../components/Layout/Sidebar'
class Defleaing extends React.Component{
constructor(props){
    super(props);
    this.state={
        defleaing:[{
            date:'98/9/98989',
            nextDate:'73627/2/2',

        }]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormA  list={this.state.defleaing[0]}/>
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default Defleaing;