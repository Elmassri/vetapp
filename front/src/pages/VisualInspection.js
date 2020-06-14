import React from 'react'
import FormA from '../components/VisualInspectionForm'
import Sidebarr from '../components/Layout/Sidebar'
class VisualInspection extends React.Component{
constructor(props){
    super(props);
    this.state={
        visualInspection:[{
            eyes:'ds',
            body:'df',
            pose:'dg',
            mucosa:'dh',
            teeth:'dj',
            ears:'dk',
            heart:'ddddddddddddddddddddd',
            lungs:'dda',

        }]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormA list={this.state.visualInspection[0]}/>
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default VisualInspection;