import React from 'react';
import NavigationBar from './navigationBar';
import Home from './home';
import AboutUs from './aboutUs';
import Products from './products';
import ContactUs from './contactUs';
import SendRequest from './sendRequest';
import PostRequest from './postRequest';
import Footer from './footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/products" component={Products} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/request-form" exact component={SendRequest} />
            <Route path="/post-request" component={PostRequest} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
