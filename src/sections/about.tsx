import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, globalStyles } from '../styles/style';

export const About = ({ theme }: { theme: any }) => (
  <View style={[styles.container, {backgroundColor : theme.aboutContainer}]}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/profile.png')} style={styles.profile}/>
      </View>

      <View style={styles.title}>
        <Text style={[styles.titleText, { color: theme.text }, { backgroundColor: theme.card }]}>⟡ Digital Artist | Programmer ⟡</Text>
      </View>

      <Text style={[styles.name, { color: theme.name }]}>Mariah Andrea Suyo</Text>

      <View style={styles.textContainer}>
        <Text style={[globalStyles.bodyText, { color: theme.text }]}>
        I’m a self-taught digital artist who enjoys drawing as a hobby, focusing on digital illustration, character design, and occasional UI design to bring creativity to life.
        </Text>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
  },
  imageContainer: {

  },
  profile: {
    height: 435,
    width: 350,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyConten: 'center',
    margin: 5,
  },
  titleText: {
    fontSize: 17,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 20,
  },
  textContainer: {
    marginTop: 10,
    paddingHorizontal: 28,
  },
});