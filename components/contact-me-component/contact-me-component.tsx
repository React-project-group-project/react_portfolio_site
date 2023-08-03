import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const ContactMe: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.aboutMe}>Contact Me</Text>
      </View>
      <View style={styles.detailsContainer}>
        
      </View>
      <View></View>
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
  aboutMe: {
    fontSize: 24,
    backgroundColor: '#a0d2e4',
    paddingBottom: 10,
    margin: 20,
    height: 35,
    width: 140,
    textAlign: 'center',
    borderRadius: 5,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default ContactMe;