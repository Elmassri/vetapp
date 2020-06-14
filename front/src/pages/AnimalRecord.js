import React from 'react'
import FormA from '../components/AnimalRecordForm'
import Abd from '../pages/Buttons'
import Sidebarr from '../components/Layout/Sidebar'
class AnimalRecord extends React.Component{
constructor(props){
    super(props);
    this.state={
        animalRecord:[{
            owner:'',
            phoneNumber:'',
            patientsName: '',
            gender:'',
            breed:'',
            microChip:'',
            colorMarkings:'',
            chronicDiseases:'', 
            species:'',
            dateOfBirth:'',

        }]
    }
}
    
    render(){
        return(
        <>
         <div>
         <FormA list={this.state.animalRecord[0]} />
         <Sidebarr />
         <Abd />
        </div>
        </>

        )
    }
}
export default AnimalRecord;