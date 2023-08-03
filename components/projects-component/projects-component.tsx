import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import me from '../../assets/images/meDesc.svg';

const Projects: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>My Projects</Text>
      </View>
      <View style={{marginTop: 25}}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTitle}>ESP32 based Weather Station</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View>
              <Image source={me} style={styles.prjectImage}></Image>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={{fontSize: 18, fontWeight: '300'}}>Access github repository here</Text>
              <Text style={{fontSize: 18, marginTop: 15}}>
                This is an IoT device designed using esp-32 microcontroller. It
                will get simple weather readings such as temperature, humidity,
                pressure and upload them to the a cloud storage via device's
                built-in WiFi. Special feature of this device is, to reduce
                power consumption deep sleep option has been used.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 620,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#d6eaf2',
    width: 1210,
  },
  title: {
    fontSize: 24,
    backgroundColor: '#a0d2e4',
    paddingBottom: 10,
    margin: 20,
    height: 35,
    width: 140,
    textAlign: 'center',
    borderRadius: 5,
  },
  projectContainer: {
    width: '85%',
    height: 'auto',
    backgroundColor: '#69A4B2',
    marginLeft: 65,
    borderRadius: 5,
  },
  projectTitle: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: '400',
    marginTop: 10,
  },
  prjectImage: {
    height: 180,
    width: 180,
    margin: 20,
  },
  detailsContainer: {
    marginTop: 20,
    fontSize: 30,
    width: '75%',
  },
});

export default Projects;
