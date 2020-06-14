import React from 'react';
import MaterialTable from 'material-table';
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Day', field: 'day' , type:'date' },
      { title: 'kG', field: 'Kg'  },
      { title: 'TreatmentandProgress', field: 'TreatmentandProgress', type: 'Text' },
      { title: 'LL', field: 'LL', type: 'numeric' },

    ],
    data: [
      { Day: '5/15/2020', kG: '7', TreatmentandProgress: 'good', LL: '20000' },
      {
        Day: ' 5/15/2020',
        kG: '9',
        TreatmentandProgress: 'good bad ',
        LL: '100000',
      },
    ],
  });

  return (
    <MaterialTable
    options={{search:false}}
      title="Animal"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
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
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}