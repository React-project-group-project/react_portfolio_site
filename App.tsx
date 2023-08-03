import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Menu from './components/menu-component/menu-component';

import MenuButton from './components/menu-button-component/menu-button-component';
import Home from './components/home-component/home-component';
import About from './components/about-component/about-component';
import Projects from './components/projects-component/projects-component';
import Skills from './components/skills-component/skills-component';
import ContactMe from './components/contact-me-component/contact-me-component';

const {height} = Dimensions.get('screen');

const App = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const setScroll = (section: string) => {
    setActiveSection(section);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <MenuButton text="Download CV"></MenuButton>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.menuContainer}>
          <Text style={{fontFamily: 'Roboto', fontSize: 24, fontWeight: '200', paddingStart: 30, marginTop: 50, marginBottom: 70}}>
            PRABOD MUNASINGHE
          </Text>
          <Menu onMenuButtonPress={setScroll}></Menu>
          <Text style={{fontFamily: 'Roboto', fontSize: 20, fontWeight: '100', paddingStart: 15, marginTop: 100}}>
            prabodmunasinghe@gmail.com
          </Text>
        </View>
        <View style={styles.subContainer}>
          {activeSection=='Home'&& <Home></Home>}
          {activeSection=='About'&& <About></About>}
          {activeSection=='Skills'&& <Skills></Skills>}
          {activeSection=='Projects'&& <Projects></Projects>}
          {activeSection=='Contact Me'&& <ContactMe></ContactMe>}
        </View>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    height: 650,
    flexDirection: 'column',
  },
  bodyContainer: {
    height,
    display: 'flex',
    flexDirection: 'row',
  },
  topContainer: {
    height: 45,
    alignItems: 'flex-end',
  },
  subContainer: {
    height: 630,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d6eaf2',
    width: 1210,
  },
  menuContainer: {
    justifyContent: 'center',
    fontFamily: 'Roboto',
    height: 630,
  },
  bottomContainer: {
    height: 30,
  },
});

export default App;
