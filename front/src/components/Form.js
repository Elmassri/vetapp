import Page from 'components/Page';
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

const FormGr = props => {
  return (
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Vaccination</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input
                    type="date"
                    onDrop
                    value={props.list.date}
                    disabled={true}
                   
                  />
                </FormGroup>
             
             
                <FormGroup>
                  <Label for="exampleBrand">Brand</Label>
                  <Input type="select" name="select" value={props.list.date}  disabled={true}
 >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    

                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="Type">Type</Label>
                  <Input type="select" name="select" value={props.list.date}  disabled={true}
 >
                    <option>Mouth</option>
                    <option>Injectable1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                   

                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="nextDate">NextDate</Label>
                  <Input
                    type="date"
                    name="date"
                    value={props.list.nextDate}
                    disabled={true}
                 

                  />
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

export default FormGr;
