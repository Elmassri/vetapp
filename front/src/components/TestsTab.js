import Page from 'components/Page';
import React , {Component}from 'react';
import Blood1 from '../components/Blood1'
import Blood2 from '../components/Blood2'
import Urine from '../components/Urine'


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

class TestsTab extends Component {
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

    render(){
        if(this.state.tab ==="tab1"){
            return (
                <div >  
                    <button onClick={this.changeToTab1}>Blood Test Results1</button>
                    <button onClick={this.changeToTab2}>Blood Test Results2</button>
                    <button onClick={this.changeToTab3}>Urine Analysis Results</button>
                    <Blood1 blood_data={this.state.blood_data} />                
                </div>
            );
        }else{
            if(this.state.tab ==="tab2"){
                return (
                    <div>
                        <button onClick={this.changeToTab1}>Blood Test Results1</button>
                        <button onClick={this.changeToTab2}>Blood Test Results2</button>
                        <button onClick={this.changeToTab3}>Urine Analysis Results</button>
                        <Blood2 />
                    </div>
                );
            }else{
                return (
                    <div>
                        <button onClick={this.changeToTab1}>Blood Test Results1</button>
                        <button onClick={this.changeToTab2}>Blood Test Results2</button>
                        <button onClick={this.changeToTab3}>Urine Analysis Results</button>
                        <Urine />  
                    </div>
                );
            }
        }
    }
};

export default TestsTab ;
