import React, { useState } from 'react';
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




const FormGr = (props) => {
      const [controler,setControler]=useState(true)
  return (
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Echo
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="Date">Date</Label>
                  <Input
                    type="date"
                    onDrop
                  value={props.list.date}
                  disabled={controler}
                  
                  />
                 
                </FormGroup>
      

               

                <FormGroup>
                  <Label for="NextDate">NextDate</Label>
                  <Input
                    type="date"
                    name="date"
                    value={props.list.nextDate}
                    disabled={controler}                   
                  />
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 20, offset:20 }}>
                  <Button outline color="primary" onClick={()=>{
                    setControler(true)
                  }}>
                   Save</Button>
                <Button outline color="secondary" onClick={(e)=>{
                  setControler(false)
                }}>
                   Edit</Button>                  </Col>
                </FormGroup>
               
        
              </Form>
            </CardBody>
          </Card>
        </Col>

        
      </Row>
      
  );
};

export default FormGr;
