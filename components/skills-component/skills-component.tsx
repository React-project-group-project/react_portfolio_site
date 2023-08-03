import React from 'react';
import {View, StyleSheet, Text,} from 'react-native';

const Skills: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>My Skills</Text>
      </View>
      <View>
        <View style={styles.iconContainer}></View>
      </View>
      <View style={{marginTop: 20, marginLeft: 65 }}>
        <Text style={{fontSize: 22, fontWeight: '400',}}>Languages</Text>
        <Text style={{fontSize: 18, fontWeight: '300', marginTop:15, marginLeft:35, }}>English</Text>
        <Text style={{fontSize: 18, fontWeight: '300', marginTop:5, marginLeft:35,}}>Sinhala</Text>
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
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',

  },
});

export default Skills;