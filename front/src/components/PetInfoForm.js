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

const FormPi = (props) => {
  return (
      <Row>
       <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Pet-info</CardHeader>
    
            <CardBody>
              <Form>
              <FormGroup row>
              <Label for="ID" sm={2}>
                   Pet Image
                 </Label>
                  <Col sm={8}>
              <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          
        
        }}  > 
         
         <img src={process.env.PUBLIC_URL + '/img/screenshots/index.jpeg'} />
         </div>   </Col>               </FormGroup>  <br />

         
                <FormGroup row>
                  <Label for="ID" sm={2}>
                    ID
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.petId}

                      
                    />
                  </Col>
               
              


                  <Label for="Name" sm={2}>
                   Name
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.petName}

                    />
                  </Col>  

                  
                </FormGroup>

<br />
                <FormGroup row>
                  <Label for="Species" sm={2}>
                  Species
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.species}

                      

                  />
                  </Col> 

               
                  <Label for="Breed" sm={2}>
                  Breed
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.breed}
                    />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row>

                <Label for="Coat" sm={2}>
                  Coat               </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.coat}
                      

                    />
                  </Col>
                  
                  



               
                  <Label for="Color" sm={2}>
                  Color
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.color}
                    />
                  </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                <Label for="Gender" sm={2}>
                  Gender
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.gender}
                    />
                  </Col>

                  <Label for="Birth date" sm={2}>
                  Birth date
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.birthDate}
                    />
                  </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                <Label for="Chronic Disease" sm={2}>
                Chronic Disease
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.chronicDisease}
                    />
                  </Col>

                  <Label for="Microchip ID" sm={2}>
                  Microchip ID
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.microchipId}
                    />
                  </Col>
                </FormGroup>  
                <br/> 
                <FormGroup row>
                <Label for="Microchip Location" sm={2}>
                  Microchip Location
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.microchipLocation}
                    />
                  </Col>

                  <Label for="Microchip date" sm={2}>
                  Microchip date
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.microchipDate
                      }
                    />
                  </Col>
                </FormGroup>  
                <br/> 
                <FormGroup row>
                <Label for="Status" sm={2}>
                  Status
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="text"
                      value={props.list.status}

                    />
                  </Col>
                  </FormGroup>
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

export default FormPi;