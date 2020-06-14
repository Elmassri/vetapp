import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const tableTypes = ['Blood2'];

const TablePage = (props) => {
  return (
    <Page
      className="TablePage"
    >
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>{tableType || 'default'}</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Test</th>
                            <th>Result</th>
                            <th>Unit</th>
                            <th>Reference In Dogs</th>
                            <th>Reference In Cats</th>
                          </tr>
                        </thead>
                        <tbody>
                      
                        {props.blood_data&&props.blood_data.map(data=>
                             <tr>
                            <th scope="row">1</th>
                            <td>{data.test}</td>
                            <td>{data.result}</td>
                            <td>{data.unit}</td>
                            <td>{data.referenceDogs}</td>
                            <td>{data.referenceCats}</td>
                            </tr>
                            )} 
                        </tbody>
                      </Table>
                    </Card>
                  </Col>

                  </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}

      
    
     </Page>
  );
};

export default TablePage;
