import React from 'react';
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
  return (
      <Row>
       <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>GeneralInfo</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="Weight" sm={2}>
                    Weight (KG)
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.weight}
                      />
                  </Col>
               
              


                  <Label for="Special Marking" sm={2}>
                  Special Marking
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.specialMarking}

                    />
                  </Col>  

                  
                </FormGroup>

<br />
                <FormGroup row>
                  <Label for="Temperature" sm={2}>
                  Temperature
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      placeholder="Degree"
                      value={props.list.temperature}


                  />
                  </Col> 

               
                  <Label for="Heart Rate" sm={2}>
                  Heart Rate
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.heartRate}

                    />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row>

                <Label for="Respiratory Rate" sm={2}>
                  Respiratory Rate                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      placeholder="@@"
                      value={props.list.respiratoryRate}


                    />
                  </Col>
                  
                  



               
                  <Label for="Reproductive Status" sm={2}>
                  Reproductive Status
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.reproductiveStatus}

                    />
                  </Col>
                </FormGroup>
                
                <FormGroup row>
             
                </FormGroup><br ></br>
                <FormGroup check row>
                  <Col sm={{ size: 20, offset:20 }}>
                  <Button outline color="primary">
                   Save</Button>
                <Button outline color="secondary">
                 Edit</Button>
                  </Col>
                </FormGroup>
              
               
               
               
               
            
              </Form>
            </CardBody>
          </Card>
        </Col>
        
      </Row>
     
  );
};

export default FormGr;
