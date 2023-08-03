import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import me from '../../assets/me.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const Home: React.FC = () => {
  return (
    <View style={styles.subContainer}>
      <View style={styles.imageContainer}>
        <Image source={me} style={styles.image}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 50}}>
          PRABOD MUNASINGHE
        </Text>
        <Text style={{fontWeight: '600', fontSize: 30}}>Web Developer</Text>
        <Text style={{fontWeight: '400', fontSize: 20, marginTop: 20}}>
          I am a Web Developer at heart and create features that are best
        </Text>
        <Text style={{fontWeight: '400', fontSize: 20}}>
          suited for the job at hand.
        </Text>
        <View style={styles.iconContainer}>
          <Image source={facebook} style={styles.socialIcon}></Image>
          <Image source={twitter} style={styles.socialIcon}></Image>
          <Image source={linkedin} style={styles.socialIcon}></Image>
          <Image source={github} style={styles.socialIcon}></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  subContainer: {
    height: 620,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d6eaf2',
    width: 1180,
  },
  image: {
    width: 250,
    height: 250,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  socialIcon: {
    height: 35,
    width: 35,
    marginTop: 20,
    marginLeft: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    marginLeft: 110,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 50,
    backgroundColor: '#d6eaf2',
  },
});

export default Home;
