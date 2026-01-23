import { StyleSheet } from 'react-native';

export const Colors = {
  light: {
    background: '#ffffff',
    text: '#1a1a1a',
    card: '#A87CC7',
    accent: '#7c658f',
    heroText: '#724190',
    name: '#A87CC7'
  },
  dark: {
    background: '#1c1321',
    text: '#ffffff',
    card: '#562D72',
    accent: '#7c658f',
    heroText: '#F1E4EE',
    name: '#A87CC7',
  },
};

export const globalStyles = StyleSheet.create({
  container: {
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 24,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#855fb0',
  },
});