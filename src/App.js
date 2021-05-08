import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LoadingScreen from './Components/Splash/LoadingScreen';
import { useSpring } from 'react-spring';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import PageNotFound from './Components/NotFound/PageNotFound';
import RestoreScroll from './Components/RestoreScroll';
import Scrollbars from 'react-custom-scrollbars';


function App() {

  const state = {
    title: "Marouane Edghoughi",
    headerLinks: [
      {title: 'Home', path: '/'},
      {title: 'Projects', path: '/projects'},
      {title: 'About', path: '/about'},
      {title: 'Contact', path: '/contact'}
    ],
    home: {
      greetings: "Hi, I'm",
      title: "Marouane Edghoughi",
      job_title: "I'm a "
    },
    projects: {
      title: "Check out my projects!"
    },
    about: {
      title: "About Me"
    },
    contact: {
      title: "Let's Talk!",
    },
    privacy_policy: {
      title: "Privacy Policy for Edghoughi",
    },
    page_not_found: {
      title: "404 Page Not Found",
      subtitle: "The page you're looking for does not exist, here is what you can do:"
    }
  }


  const [isLoading, setIsLoading] = useState(false);

  const [fade, setFade] = useState(false);

    useEffect(() => {
      setIsLoading(true)
      setFade(true)
      setTimeout(() => {
        setFade(false)
      }, 3600)
      setTimeout(() => {
        setIsLoading(false)
      }, 4000)
    }, [])

    const splashStyle = useSpring({
      opacity: fade ? 1 : 0
    });

  return (
    <Router>
      {
        isLoading ?

          <LoadingScreen loading={isLoading} style={splashStyle} />

        :

        <Scrollbars
          style={{ height: window.innerHeight, backgroundColor: 'rgba(35, 49, 86, 0.8)' }}
        >
          <Container className="theme p-0" fluid={true}>
              {/*   Restore scroll to top after each route because React doesn't do that by default   */}
            <RestoreScroll />
            <Navbar />
              {/*  The Switch statement tells React to render the 404 page if the requested path does not exist   */}
            <Switch>
              <Route path="/" exact render={() => <HomePage greetings={state.home.greetings} title={state.home.title} job_title={state.home.job_title} />}/>
              <Route path="/projects" render={() => <ProjectsPage title={state.projects.title} />}/>
              <Route path="/about" render={() => <AboutPage title={state.about.title} />}/>
              <Route path="/contact" render={() => <ContactPage title={state.contact.title} />}/>
              <Route path="/privacy-policy" render={() => <PrivacyPolicy title={state.privacy_policy.title} />}/>
                {/*  404 Page  */}
              <Route component={PageNotFound} />
            </Switch>
          </Container>
        </Scrollbars>
      }
    </Router>
  );
}

export default App;