import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index(props) {
    console.log('home props ', props);
    var onBtnClicked = () => {
        props.history.push('/users');
    }
    var onBtnClickedWithData = () => {
        props.history.push('/users', {id: 1, name: 'yahooo', age: 16});
    }

    return (
        <div>
            <h2>Home Route</h2>
            <Link to="/users/">Go to User Page</Link> <br /><br />
            <button onClick={onBtnClicked}>Goto User Route using JavaScript</button> <br /><br />
            <button onClick={onBtnClickedWithData}>Goto User Route with passing Some User Data</button>
        </div>
    );
}

function About() {
    return <h2>About Route</h2>;
}


function User(props) {
    console.log('Users props ', props.match.params);
    return (
        <div>
            <h2>Single User Route</h2>
        </div>
    );
}

function Users(props) {
    console.log('Users Passing Data From Other Route ', props.location.state);
    return (
        <div>
            <h2>Users Route</h2>
        </div>
    );
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/user/id-8986">User id-8986</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics (Nested Routes)</Link>
                        </li>
                        <li>
                            <Link to="/topics/high-alert">Topic (HIGH ALERT)</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
                <Route path="/user/:id" component={User} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    );
}

export default AppRouter;




















function Topic({ match }) {

    const showTopicComponents = () => {
        return (<h2>Showing Topic Component</h2>)
    }

    const showPropsVsState = () => {
        return (<h2>Showing Props Vs State From Component</h2>)
    }

    const showSpecificTopicDetails = (id) => {
        return (<h2>Showing Specific Topic Id: {id}</h2>)
    }

    const showRelativeComponent = (str) => {
        console.log('str ', str)
        if(str == 'components') {
            return showTopicComponents();
        } else if(str == 'props-v-state') {
            return showPropsVsState();
        } else {
            return showSpecificTopicDetails(str);
        }
    }

    return (
        <div>
            { showRelativeComponent(match.params.id) }
        </div>
    );
  }
  
  function Topics({ match }) {



    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  