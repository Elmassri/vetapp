import React from 'react';
import {
  Button,
  Col,
  FormGroup,
} from 'reactstrap';
const FormGr = () => {
  return (
       <Col xl={12} lg={12} md={12}>
                <FormGroup row>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 20, offset:20 }}>
                  <Button outline color="primary">
                   Save</Button>
                <Button outline color="secondary">
                 Edit</Button>
                  </Col>
                </FormGroup>

             
                
           
              
              
               
               
               
               
       
</Col>     
  );
};


export default FormGr;

