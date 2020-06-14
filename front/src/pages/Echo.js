import React from 'react'
import FormA from '../components/EchoForm'
import Sidebarr from '../components/Layout/Sidebar'
class Echo extends React.Component{
constructor(props){
    super(props);
    this.state={
        echo:[{
        date:'2018-01-08',
        nextDate:'2019-01-08',
    }
]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormA list={this.state.echo[0]} />
         <Sidebarr />
         
        </div>
        </>

        )
    }
}
export default Echo;