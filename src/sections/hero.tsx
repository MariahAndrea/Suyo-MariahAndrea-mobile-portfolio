import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export const Hero = ({ theme }: { theme: any }) => (
    <View style={[styles.hero, { backgroundColor: theme.background }]}>
        <ImageBackground source={require('../../assets/bg_img.png')} resizeMode="cover" style={styles.backgroundImage}>
        
            <View style={ styles.textContainer }>
            <Text style={[ styles.heroText, { color: theme.heroText }]}>PORTFOLIO</Text>
            <Text style={[ styles.heroSubText, { color: theme.heroText }]}>Mariah | Digital Artist | Programmer</Text>
          </View>
        </ImageBackground>
    </View>
  );

const styles = StyleSheet.create({
  hero: {
    paddingTop: 20,
    height: 820,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'left',
    paddingLeft: 20,
    paddingTop: 60,
  },
  heroText: {
    fontSize: 60,
    fontWeight: 900,
  },
  heroSubText: {
    fontSize: 19,
    fontWeight: 400,
    marginTop: -13,
  }
});
