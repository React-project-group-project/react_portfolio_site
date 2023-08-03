import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import MenuButton from '../menu-button-component/menu-button-component';

const ContactMe: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Contact Me</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.itemContainer}>
          <Text style={{fontSize: 22, fontWeight: '400', marginBottom: 12}}>
            Email
          </Text>
          <Text style={{fontSize: 18, fontWeight: '300'}}>
            prabodmunasinghe@gmail.com
          </Text>
          <Text style={{fontSize: 18, fontWeight: '300'}}>
            sandaruwanprabod@gmail.com
          </Text>
        </View>
        <View style={[styles.itemContainer, {marginLeft: 80}]}>
          <Text style={{fontSize: 22, fontWeight: '400', marginBottom: 12}}>
            Phone
          </Text>
          <Text style={{fontSize: 18, fontWeight: '300'}}>+94756137398</Text>
          <Text style={{fontSize: 18, fontWeight: '300'}}>+94112896034</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={{fontSize: 22, fontWeight: '400'}}>Address</Text>
          <Text style={{fontSize: 18, fontWeight: '300', marginTop: 12}}>
            1143/7, Liyanagoda Rd, Kottawa, Pannipitiya.
          </Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={{fontSize: 22, fontWeight: '400', marginTop: 40,}}>
          I am always open to disussing your new product.
        </Text>
        <View>
          <Text style={styles.labelContainer}>Name*</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <Text style={styles.labelContainer}>Email*</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <Text style={styles.labelContainer}>Message*</Text>
          <TextInput style={[styles.input, {height: 100}]}></TextInput>
        </View>
        <View></View>
        <MenuButton text="Submit" ></MenuButton>
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
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 120,
  },
  itemContainer: {
    width: '25%',
  },
  formContainer: {
    marginLeft: 120,
  },
  labelContainer: {
    fontSize: 18,
    fontWeight: '300',
    marginTop:15,
  },
  input: {
    width: '65%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    height: 25,
  },
});

export default ContactMe;
