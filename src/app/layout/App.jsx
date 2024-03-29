import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/Eventdetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/testarea/TestComponent';
//import HomePage from '../../features/home/HomePage';

class App extends Component {
  render(){
    return (
     <Fragment>
        <NavBar></NavBar>
        <Container className="main"> 
          <Route exact path='/' component = {HomePage}/>
          <Route path='/events' component = {EventDashboard}/>         
          <Route path='/events/:id' component = {EventDetailedPage}/>
          <Route path='/people' component = {PeopleDashboard}/>
          <Route path='/profile/:id' component = {UserDetailedPage}/>
          <Route path='/settings' component = {SettingsDashboard}/>
          <Route path='/createEvent' component = {EventForm}/>
          <Route path='/test' component = {TestComponent}/>                  
        </Container>        
     </Fragment>
    );
  }
}

export default App;
