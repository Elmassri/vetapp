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

const FormGr = (props) => {
  return (
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Deworming</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="Date">Date</Label>
                  <Input
                    type="date"
                    onDrop
                    value={props.list.date}
                  disabled={true}
                  
                  />
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
Save                </Button>
                <Button outline color="secondary">
Edit                </Button>
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
