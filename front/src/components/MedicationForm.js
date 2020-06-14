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
            <CardHeader>Medication
            </CardHeader>
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
                  <Label for="Name">Name</Label>
                  <Input
                    type="text"
                    onDrop
                    value={props.list.name}

                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Dose">Dose</Label>
                  <Input
                    type="text"
                    onDrop
                    value={props.list.dose}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Concentration">Concentration</Label>
                  <Input
                    type="text"
                    onDrop
                    value={props.list.concentration}
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
