import React from 'react';
import MaterialTable from 'material-table';
import {Link, withRouter} from 'react-router-dom'

import '../components/Table.css'
class TableForm extends React.Component {
    constructor(props){
        super(props);
        this.state={

            
            search:true,
            data: [
              { id: '601', name: 'ali', petname:'fox',petId:'602'},
              { id: '602', name: 'ahmad', petname:'fox',petId:'555'},  
              { id: '602', name: 'ahmad', petname:'kjjsj', petId: '454'},
              { id: '602', name: 'ahmad', petname:'pst',petId:'457'},
              { id: '602', name: 'ahmad', petname:'ssdy', petId: '712'},

        
        
            ]}

    }
  
render(){
  return (
    <div>
     <div   className="chbx"><lable style={{color:'#fc5c7d'}} >Search by pet Id</lable>
      <input type="checkbox" onClick={()=>{
        this.setState({
          search:!this.state.search
        })
      }}  ></input></div> 
    <MaterialTable
      title="Pet Info"
      columns={[
        { title: 'Owner id', field: 'id' ,type:'numeric', searchable:this.state.search},
        { title: 'Pet id', field: 'petId' ,type:'numeric', searchable:!this.state.search},

        {title:'Owner Name',field:'name',searchable:false},
         
        { title: 'Pet name', field: 'petname',searchable:false },
      
      ]}
      data={this.state.data}
      onRowClick={(event, rowData, togglePanel) => this.props.history.push(
        {pathname: '/petDetail',
  
      state: { data: rowData }})}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);

          }),
            

      }}
   
    /> </div>
  )};
}
export default withRouter(TableForm);