import React, { Component } from "react";
import { Route } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/event/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/event/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/event/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import HomePage from "../../features/event/home/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Route exact path="/" component={HomePage} />
          <Route path="/events" component={EventDashboard} />
          <Route path="/events/:id" component={EventDetailedPage} />
          <Route path="/people" component={PeopleDashboard} />
          <Route path="/profile/:id" component={UserDetailedPage} />
          <Route path="/settings" component={SettingsDashboard} />
          <Route path="/createEvent" component={EventForm} />
        </Container>
      </div>
    );
  }
}

export default App;
