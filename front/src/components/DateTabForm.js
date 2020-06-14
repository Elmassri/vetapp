import React , {Component}from 'react';
import Defleaing from '../pages/Defleaing'
import Deworming from '../pages/Deworming'
import Vaccine from '../pages/Vaccination'
import Shot from '../pages/Echo'


import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class DateTabForm extends Component {
    state={
        tab:"tab1", 
        blood_data:[{
            test:"WBC",
            result:" ",
            unit:"mg",
            referenceDogs: 200,
            referenceCats:300
        },
        {
            test:"RWC",
            result:" ",
            unit:"mg",
            referenceDogs: 230,
            referenceCats:130
        },
        {
            test:"HDL",
            result:"    ",
            unit:"ng",
            referenceDogs: 120,
            referenceCats:50
        }
    ]
    }
    

    changeToTab1 = () =>{
        this.setState({
            tab:"tab1"
        });
    }

    changeToTab2 = () =>{
        this.setState({
            tab:"tab2"
        });
    }

    changeToTab3 = () =>{
        this.setState({
            tab:"tab3"
        });
    }
    changeToTab4= () =>{
        this.setState({
            tab:"tab4"
        });
    }

    render(){
        if(this.state.tab ==="tab1"){
            return (
                <div >  
                    <button onClick={this.changeToTab1}>Defleaing</button>
                    <button onClick={this.changeToTab2}>Deworming</button>
                    <button onClick={this.changeToTab3}>Vaccine</button>
                    <button onClick={this.changeToTab4}>Shot</button>
                    <Defleaing blood_data={this.state.blood_data} />                
                </div>
            );
        }else{
            if(this.state.tab ==="tab2"){
                return (
                    <div>
                        <button onClick={this.changeToTab1}>Defleaing</button>
                        <button onClick={this.changeToTab2}>Deworming</button>
                        <button onClick={this.changeToTab3}>Vaccine</button>
                        <button onClick={this.changeToTab4}>Shot</button>
                        <Deworming/>
                    </div>
                );
            }else{
                if(this.state.tab ==="tab3"){
                return (
                    <div>
                        <button onClick={this.changeToTab1}>Defleaing</button>
                        <button onClick={this.changeToTab2}>Deworming</button>
                        <button onClick={this.changeToTab3}>Vaccine</button>
                        <button onClick={this.changeToTab4}>Shot</button>
                        <Vaccine />  
                    </div>
                );
                }else{
                    return (
                        <div>
                            <button onClick={this.changeToTab1}>Defleaing</button>
                            <button onClick={this.changeToTab2}>Deworming</button>
                            <button onClick={this.changeToTab3}>Vaccine</button>
                            <button onClick={this.changeToTab4}>Shot</button>
                            <Shot/>  
                        </div>
                    );
                }
            }
        }
    }
};

export default DateTabForm ;
