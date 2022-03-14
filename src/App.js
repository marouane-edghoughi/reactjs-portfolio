import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { useSpring } from 'react-spring';

import LoadingScreen from './Components/Splash/LoadingScreen';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import PageNotFound from './Components/NotFound/PageNotFound';
import RestoreScroll from './Components/RestoreScroll';


function App() {

  const state = {
    title: "Marouane Edghoughi",
    home: {
      greetings: "Hello 👋🏻, I'm",
      title: "Marouane Edghoughi"
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

  if (isLoading) {
    return (
      <LoadingScreen loading={isLoading} style={splashStyle} />
    );
  }

  return (
    <Router>
      <Container className="theme p-0" fluid={true}>
          {/*   Restore scroll to top after each route because React doesn't do that by default   */}
        <RestoreScroll />
        <Navbar />
          {/*  Routes enables React to load one Component at a time  */}
        <Routes>
          <Route path='/' exact element={<HomePage greetings={state.home.greetings} title={state.home.title} job_title={state.home.job_title} />}/>
          <Route path='/projects' element={<ProjectsPage title={state.projects.title} />}/>
          <Route path='/about' element={<AboutPage title={state.about.title} />}/>
          <Route path='/contact' element={<ContactPage title={state.contact.title} />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy title={state.privacy_policy.title} />}/>

            {/*  Render the 404 page if the requested path does not exist  */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;