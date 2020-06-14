import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';

import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import Admin from './pages/Admin'
import Vaccination from './pages/Vaccination'
import Deworming from './pages/Deworming'
import Defleaing from './pages/Defleaing'
import Echo from './pages/Echo';
import GeneralInfo from './pages/GeneralInfo'
import AnimalRecord from './pages/AnimalRecord'
import Surgery from './pages/Surgery'
import Medication from './pages/Medication'
import Tests from './pages/Tests'
import Admission from './pages/Admission'
import VisualInspection from './pages/VisualInspection'
import NewVisit from './pages/NewVisit'


import AddUser from './pages/AddUser'

import PetDetail from './pages/PetDetail';
import ViewDetails from './pages/ViewDetails'



const DashboardPage = React.lazy(() => import('pages/DashboardPage'));


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      loggedIn: false,
    }}



  async componentDidMount() {
    const token = localStorage.getItem('token');
    if (token !== undefined && token !== null) {

      try {
        const response = await fetch(`http://localhost:8000/api/transactions?token=${token}`);
        const result = await response.json();

        this.setState({
          loggedIn: true,
          
        })
      } catch (error) {}
    
     this.getUser();
    }
  }
   getUser=async()=>{
    try{
      const token = localStorage.getItem('token');
      const response = await fetch(`http://127.0.0.1:8000/api/check-user?token=${token}`, {method:"POST"});
      const json = await response.json();
      if (json.success === true) {
          this.setState({
              UserName: json.data.name
          })
      }
    }
    catch(error){}
  }
  
  handleLogin =  () => {
    
    this.setState({
      loggedIn: true
    })
  }
  handleLogout=()=>{
    localStorage.removeItem("token");
    this.setState({loggedIn: false})
  }
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
          
            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={(props => {
                  return <Admin/>
                })} />

                <Route exact path="/vaccination" component={Vaccination} />
                <Route exact path="/Deworming" component={Deworming} />
                <Route exact path="/Defleaing" component={Defleaing} />
                <Route exact path="/Echo" component={Echo} />
                <Route exact path="/GeneralInfo" component={GeneralInfo} />
                <Route exact path="/AnimalRecord" component={AnimalRecord} />
                <Route exact path="/Surgery" component={Surgery} />
                <Route exact path="/Medication" component={Medication} />
                <Route exact path="/Tests" component={Tests} />
                <Route exact path="/Admission" component={Admission} />
                <Route exact path="/VisualInspection" component={VisualInspection} />
                <Route exact path="/ViewDetails" component={ViewDetails} />











                

                <Route exact path="/NewVisit" component={NewVisit} />

                <Route exact path="/addUser" component={AddUser} />


               
                <Route exact path="/petDetail" component={PetDetail} />
                
              </React.Suspense>
            </MainLayout>
           
            <Redirect to="/" />
          </Switch>
        </GAListener>
     
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
