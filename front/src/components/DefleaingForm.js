import React ,{useState}from 'react';
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
  const [predate,setPredate]=useState('')
  const [nextDate,setNextdate]=useState('2020-06-08')
  console.log(predate)
  return (
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Defleaing
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label  for="date" >Date</Label>
                  <Input
                  type="date"
                     value={predate}
                      disabled={controler}
                      onChange={(e)=>{
                        
                        setPredate(e.target.value)}}
                      />
                  
                </FormGroup>
      

               

                <FormGroup>
                  <Label for="nextDate">NextDate</Label>
                  <Input
                    type="date"
                    value={nextDate}
                    disabled={controler}
                   onChange={(e)=>{
                    
                     setNextdate(e.target.value)
                   }}
                  />
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 20, offset:20 }}>
                  <Button outline color="primary" onClick={()=>{
                    setControler(true)
                  }}>
                   Save</Button>
                <Button outline color="secondary" onClick={(e)=>{
                    e.preventDefault();
                    setControler(false)
                  }}>
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
