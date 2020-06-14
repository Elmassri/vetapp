import React from 'react'

import '@material-ui/core'

import TabPanel from '../components/NewVisit'

import Header from '../components/Layout/Header'
import GeneralInfo from './GeneralInfo';
import VisualInspection from './VisualInspection';
import AnimalRecord from './AnimalRecord';
import Defleaing from './Defleaing';
import Deworming from './Deworming';
import Echo from './Echo';
import Tests from './Tests'
import Vaccination from './Vaccination';
import Medication from './Medication';
import Admission from './Admission';
import Surgery from './Surgery';
import Footer from '../components/Layout/Footer'
class NewVisit extends React.Component {
    constructor(props) {
      super(props);
      
      this._handleTabChange = this._handleTabChange.bind(this)
    }
    
    _handleTabChange(index) {
      console.log('Selected tab index', index);
    }
  
    render() {
      return (
        <>
        <Header />
       <TabPanel onTabChange={this._handleTabChange}>
          <div title="General Info">
            <GeneralInfo></GeneralInfo>
          </div>
          <div title="Visual Inspection">
            <VisualInspection></VisualInspection>
          </div>
          <div title="Record">
              <AnimalRecord></AnimalRecord>   
                  </div>
          <div title="Defleaing">
              <Defleaing></Defleaing>
                        </div>
          <div title="Deworming">
            <Deworming></Deworming>
          </div>
          <div title="Echococonous Shot">
            <Echo></Echo>
          </div>
          <div title="Tests">
            <Tests></Tests>
          </div>
          <div title="Vaccination">
            <Vaccination></Vaccination>
          </div>
          <div title="Medication">
            <Medication></Medication>
          </div>
          <div title="Admission">
            <Admission></Admission>
          </div>
          <div title="Surgery">
            <Surgery></Surgery>
          </div>
          
 
        </TabPanel>
        <Footer/>
        </>
      );
    }
  }
  

export default NewVisit;