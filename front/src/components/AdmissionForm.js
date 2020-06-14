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
            <CardHeader>Admission</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                <Label for=" Food Intake" sm={2}>Food Intake </Label>
                  <Col sm={4}>
                  <Input type="select" name="select" value={props.list.foodIntake}>
                    <option>Increased</option>
                    <option>Normal</option>
                    <option>Decreased</option>

                  
                  </Input>
                  </Col>
                 
                 
                  <Label for="Water Intake" sm={2}>Water Intake </Label>
                  <Col sm={4}>
                  <Input type="select" name="select" value={props.list.waterIntake}>
                    <option>Increased</option>
                    <option>Normal</option>
                    <option>Decreased</option>

                  
                  </Input>
                  </Col> 

                  
                </FormGroup>

<br />
                <FormGroup row>
                  <Label for="Main Complaint" sm={2}>
                  Main Complaint                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textarea"
                      value={props.list.mainComplaint}

                  />
                  </Col> 
               
               
                  
                </FormGroup>
                <br />
                
                <FormGroup row>
                <Label for="Onset of Problem" sm={2}>
                  Onset of Problem                  </Label>
                  <Col sm={4}>
                    <Input
                      type="textarea"
                      value={props.list.onsetofProblem}
                    />
                  </Col>
               
                
                  <Label for="Duration of Problem" sm={2}>
                  Duration of Problem                  </Label>
                  <Col sm={4}>
                    <Input
                      type="textarea"
                      value={props.list.durationofProblem}
                    />
                  </Col>  

                  
                </FormGroup>

                <FormGroup row>

<Label for="Pet Activity" sm={2}> Pet Activity </Label>
  <Col sm={4}>
  <Input type="select" name="select" value={props.list.petActivity}>
    <option>Increased</option>
    <option>Normal</option>
    <option>Decreased</option>

  
  </Input>
  </Col>

  <Label for="Systems Affected" sm={2} >
  Systems Affected </Label>
  <Col sm={4}>
    <Row>
        <Col lg={20}>
        <Input   value={props.list.systemAffected}
        disabled={true}
       type="checkbox"/>Integumentary sys (Skin, Mucosa, Claw, Hair)
         
        </Col>
        <Col lg={20}>
        <Input
        value={props.list.systemAffected}         disabled={true}

        type="checkbox"/>Digestive sys (Dental/ Pharynx/ Larynx / Esophagus/ Stomach Intestines / Liver / Pancreas)
        </Col>
        <Col lg={20}>
        <Input
         value={props.list.systemAffected}         disabled={true}

         type="checkbox"/>Respiratory sys (Upper/ Lower)
        </Col>  <Col lg={20}>
        <Input
         value={props.list.systemAffected}         disabled={true}

         type="checkbox"/>Urinary sys (Kidney/ Bladder)
        </Col>  <Col lg={20}>
        <Input
                disabled={true}

      type="checkbox"/>Musculoskeletal sys ( Bone, Ligament, Tendon, Muscle, Cartilage)
        </Col>  <Col lg={20}>
        <Input
          value={props.list.systemAffected}        disabled={true}

          type="checkbox"/>Nervous sys (CNS/ Peripheral)
        </Col>  <Col lg={20}>
        <Input        disabled={true}

          value={props.list.systemAffected}
          type="checkbox"/>Circulatory sys (Heart/ Vx/ Spleen)
        </Col>  <Col lg={420}>
        <Input
           value={props.list.systemAffected}         disabled={true}

           type="checkbox"/> Reproductive sys (Gonads, Uterus, Vagina, Vulva, Penis, Prostate, Prepuce, Scrotum)
        </Col>  <Col lg={20}>
        <Input
          value={props.list.systemAffected}         disabled={true}

          type="checkbox"/>Eye and ear (Outer /Middle /Inner)
        </Col>  <Col lg={20}>
        <Input
           value={props.list.systemAffected}         disabled={true}
 
           type="checkbox"/> Endocrine sys (Adrenal/ Thyroid/ Parathyroid/ 
        hypothalamic-pituitary complex)
        </Col>
        <Col lg={20}>
        <Input
          value={props.list.systemAffected}         disabled={true}

          type="checkbox"/> Immune sys (Ganglia / Vx, Immunodeficiency, Hypersensitivity, Autoimmune dis)
        </Col>
        <Col lg={20}>
        <Input
         value={props.list.systemAffected}
         disabled={true}
         type="checkbox"/>Limbic sys (Behavioral problems)
        </Col>
        </Row>
      

   
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
