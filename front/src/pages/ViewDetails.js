import React from 'react'
import FormOi from '../components/OwnerInfoForm'
import FormPi from '../components/PetInfoForm'
import DateTabForm from '../components/DateTabForm'
import Sidebar from '../components/Layout/Sidebar'
import NewVisit from '../pages/NewVisit'
import FormAh from '../components/AppointmentHistoryForm'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import {
    Button,
}from 'reactstrap';

class ViewDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            petInfo:[
                {
                    petId:1,
                    petName:'fox',
                    species:'hello',
                    coat:'kifak',
                    breed:'waynak',
                    color:'green',
                    gender:'male',
                    birthDate:'30-8-2012',
                    chronicDisease:'hahaha',
                    microchipId:'whwhwh',
                    microchipLocation:'weeeeee',
                    microchipDate:'dadada',
                    status:'varr',

                }
            ],
            ownerInfo:[{
                   firstName:'Abd',
                   lastName:'Ali',
                   email:'asasas@dgshd.vbn',
                   phoneNumber:'91982768',
                   userName:'dedede',
                   address:'Beirut'
                  



                }
            ],
       

        }
    }
    
    
    render(){
        return(
        <>
         <div>
         <Header />   
         <FormPi list={this.state.petInfo[0]}/>
         <FormOi list={this.state.ownerInfo[0]}/>
         <DateTabForm/>
   
         <FormAh />
         <Sidebar />
         <Footer />
         
        </div>
        </>

        )
    }
}
export default ViewDetails;