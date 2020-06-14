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
            <CardHeader>Surgery
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                <Label for="exampleText" sm={6}>
                   Info
                  </Label>
                  <Col sm={20}>
                    <Input type="textarea" name="text" 
                    value={props.list.info}
                                          />
                    
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset:0 }}>
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
