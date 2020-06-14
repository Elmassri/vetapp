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

const FormOi = (props) => {
  return (
      <Row>
       <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Owner-info</CardHeader>
    
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="First Name" sm={2}>
                    First Name
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.firstName}
                      
                    />
                  </Col>
               
              


                  <Label for="Last Name" sm={2}>
                  Last Name
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.lastName}
                    />
                  </Col>  

                  
                </FormGroup>

<br />
                <FormGroup row>
                  <Label for="Email" sm={2}>
                  Email
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.email}
                  />
                  </Col> 

               
                  <Label for="Phone Number" sm={2}>
                  Phone Number
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.phoneNumber}
                    />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row>

                <Label for="Username" sm={2}>
                  Username                </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.userName}
                      

                    />
                  </Col>
                  
                  



               
                  <Label for="Address" sm={2}>
                  Address
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.address}
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

export default FormOi;