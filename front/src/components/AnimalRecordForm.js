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
import MaterialTableDemo from '../components/AnimaleTable'
const FormGr = (props) => {
  return (
      <Row>
       <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>AnimalRecord</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="Owner" sm={2}>
                  Owner
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.owner}
                    />
                  </Col>
               
              


                  <Label for="Phone Number" sm={2}>
                  Phone Number                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.phoneNumber}
                    />
                  </Col>  

                  
                </FormGroup>


                <FormGroup row>
                  <Label for="Patient's Name" sm={2}>
                  Patient's Name                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.patientsName}

                  />
                  </Col> 

               
                  <Label for="Gender" sm={3}>
                  Gender                  </Label>
                  <Col sm={2}>
                    <Row>
                        <Col lg={4}>
                        <Input
                        value={props.list.gender} disabled={true}
                      type="checkbox"/>F
                   

                     
                        </Col>
                        <Col lg={4}>
                        <Input
                         value={props.list.gender} disabled={true}
                      type="checkbox"/>M
                       
                     
                        </Col>
                        <Col lg={4}>
                        <Input value={props.list.gender} disabled={true}
                      type="checkbox"/>N
                        
                     
                        </Col>
                    </Row>
                      

                   
                  </Col>
                  
                </FormGroup>
                <FormGroup row>
                  <Label for="Breed" sm={2}>
                  Breed                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.breed}

                  />
                  </Col> 

               
                  <Label for="MicroChip" sm={2}>
                  MicroChip                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.microChip}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Color&Markings" sm={2}>
                  Color&Markings                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.colorMarkings}

                  />
                  </Col> 

               
                  <Label for="ChronicDiseases" sm={2}>
                  ChronicDiseases                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.chronicDiseases}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>

                <Label for="Species" sm={2}>
                Species                 </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.species}
                   

                    />
                  </Col>
                  
          
                  <Label for="date" sm={2}>
                  Date Of Birth                  </Label>
                  <Col sm={4}>
                    <Input
                      type="date"
                      value={props.list.dateofBirth}
                      disabled={true}
                    />
                  </Col>
                </FormGroup>
                
                <FormGroup row>
             
                </FormGroup>
                
              </Form>
            </CardBody>
          </Card>
        </Col>
        
        <Col xl={12} lg={12} md={12}>
        <MaterialTableDemo/>
        </Col>
      </Row>
     
  );
};


export default FormGr;

