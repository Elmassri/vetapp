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
            <CardHeader>VisualInspection</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="Eyes" sm={2}>
                  Eyes
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.eyes}
                    />
                  </Col>
               
              


                  <Label for="Body" sm={2}>
                  Body               </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.body}
                    />
                  </Col>  

                  
                </FormGroup>

<br />
                <FormGroup row>
                  <Label for="Pose" sm={2}>
                  Pose
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.pose}

                  />
                  </Col> 

               
                  <Label for="Mucosa" sm={2}>
                  Mucosa
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.mucosa}
                    />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row>

                <Label for="Teeth" sm={2}>
                Teeth               </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.teeth}

                    />
                  </Col>
                  
                  <Label for="Ears" sm={2}>
                Ears               </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.ears}

                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="Heart" sm={2}>
                  Heart                  </Label>
                  <Col sm={4}>
                    <Input
                      type="textarea"
                      value={props.list.heart}
                    />
                  </Col>
               
              


                  <Label for="Lungs" sm={2}>
                  Lungs                 </Label>
                  <Col sm={4}>
                    <Input
                      type="textarea"
                      value={props.list.lungs}
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
