import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import me from '../../assets/meDesc.svg';

const About: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.aboutMe}>About Me</Text>
      </View>
      <View style={[styles.descriptionContainer, {backgroundColor: '#ACE2EE', height: 310}]}>
        <View>
          <Image source={me} style={styles.me}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.desc}>
            Hello! I'm Prabod Munasinghe, a passionate web developer with
            expertise in HTML, CSS, and JavaScript. I take pride in crafting
            captivating and user-friendly websites. Collaboration fuels my
            creativity, and I thrive in team environments where innovation
            thrives.
          </Text>
          <Text style={styles.desc}>
            Beyond coding, I'm an avid explorer of the latest web development
            trends and seek inspiration from fellow developers. I'm excited
            about new opportunities and eager to contribute my skills to
            impactful projects. Thank you for visiting my portfolio, and I look
            forward to connecting with you!
          </Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailColumn}>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fisrt Name:</Text>
            <Text style={{fontSize: 18}}> Prabod</Text>
          </View>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Birthday:</Text>
            <Text style={{fontSize: 18}}> 03/04/96</Text>
          </View>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Address:</Text>
            <Text style={{fontSize: 18}}> Kottawa, Pannipitiya</Text>
          </View>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Freelance:</Text>
            <Text style={{fontSize: 18}}> Available</Text>
          </View>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Languages:</Text>
            <Text style={{fontSize: 18}}> English, Sinhala</Text>
          </View>
        </View>
        <View style={styles.detailColumn}>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Last Name:</Text>
            <Text style={{fontSize: 18}}> Munasinghe</Text>
          </View>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Study:</Text>
            <Text style={{fontSize: 18}}> University of Colombo</Text>
          </View>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Degree:</Text>
            <Text style={{fontSize: 18}}>
              {' '}
              Bachelor of Science Hons. in EIT (Reading)
            </Text>
          </View>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Email:</Text>
            <Text style={{fontSize: 18}}> prabodmunasinghe@gmail.com</Text>
          </View>
          <View style={styles.singleDetail}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Phone:</Text>
            <Text style={{fontSize: 18}}> +94756137398</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailColumn}>
          <Text style={{fontSize: 24, fontWeight: '700', marginBottom: 20}}>Education</Text>
          <View style={{marginTop: 25}}>
            <Text style={{fontSize:18, fontWeight: '600'}}>Primary Education</Text>
            <Text style={{fontSize:18, fontWeight: '400'}}>Kottawa North Dharmapala Vidyalaya</Text>
            <Text style={{fontSize:18, fontWeight: '300'}}>Passed Scholarship Exam</Text>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={{fontSize:18, fontWeight: '600'}}>Secondary Education</Text>
            <Text style={{fontSize:18, fontWeight: '400'}}>Royal College - Colombo</Text>
            <Text style={{fontSize:18, fontWeight: '300'}}>Passed G.C.E. O/L Exam & G.C.E. A/L Exam</Text>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={{fontSize:18, fontWeight: '600'}}>University</Text>
            <Text style={{fontSize:18, fontWeight: '400'}}>University of Colombo</Text>
            <Text style={{fontSize:18, fontWeight: '300'}}>Bachelor of Science</Text>
          </View>
        </View>
        <View style={styles.detailColumn}>
          <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 20}}>Experience</Text>
          <View style={{marginTop: 25}}>
            <Text style={{fontSize:18, fontWeight: '600'}}>Quality Assurance Technician</Text>
            <Text style={{fontSize:18, fontWeight: '400'}}>GSS International Pvt. Ltd</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 610,
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
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  me: {
    height: 265,
    width: 265,
    marginLeft: 65,
    marginTop: 20,
    borderRadius: 15,
  },
  textContainer: {
    width: '60%',
    marginLeft: 30,
  },
  desc: {
    fontSize: 18,
    marginLeft: 26,
    marginTop: 25,
    textAlign: 'justify',
    justifyContent: 'center',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  detailColumn: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 90,
    marginRight: 30,
    marginTop: 40,
    marginBottom: 15,
  },
  singleDetail: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  eduContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default About;
