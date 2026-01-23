import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../styles/style';

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ToggleButton = ({ isDark, toggleTheme }: Props) => {
  const theme = isDark ? Colors.dark : Colors.light;

  return (
    <View style={[styles.nav, { backgroundColor: theme.background, borderBottomColor: theme.card }]}>
      <TouchableOpacity onPress={toggleTheme} style={styles.button}>
        <View style={styles.content}>
          <Text style={styles.icon}>{isDark ? '☀️' : '🌙'}</Text>
          <Text style={[styles.label, { color: theme.text }]}>{isDark ? 'Light' : 'Dark'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: { 
    flex: 1,
    position: 'absolute', 
    bottom: 20,           
    right: 20, 
    width: 100,
    height: 50,
    borderRadius: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,         
    elevation: 5,         
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    fontSize: 16,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 18,
  },
});