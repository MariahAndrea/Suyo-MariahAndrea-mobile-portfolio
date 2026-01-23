import {  Text, View, StyleSheet, FlatList } from 'react-native';
import { Colors, globalStyles } from '../styles/style';
import { Data } from '../components/data';

export const Skills = ({ theme }: { theme: any }) => (
  <View style={styles.container}>
    <Text style={[globalStyles.sectionTitle, { color: theme.text }]}>SKILLS</Text>

    <View style={styles.skillList}>
      {Data.skills.map((skill, index) => (
        <View key={index} style={[styles.skillTag, { backgroundColor : theme.card}]}>
          <Text style={{ color : theme.text }}>{skill}</Text>
        </View>
      ))}
    </View>
  
  </View>
);

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    
  },
  skillTag: {
    padding: 10,
    borderRadius: 20,
  }
});