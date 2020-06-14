import React from 'react'
import Sidebarr from '../components/Layout/Sidebar'
import TestsTab from '../components/TestsTab'



class Tests extends React.Component{
    render(){
        return(
        <>
         <div>
         <Sidebarr />
         <TestsTab />
        </div>
        </>

        )
    }
}
export default Tests;