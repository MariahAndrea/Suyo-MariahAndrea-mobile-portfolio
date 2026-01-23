import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Colors, globalStyles } from '../styles/style';
import { Data } from '../components/data';

export const Projects = ({ theme }: { theme: any }) => (
  <View style={styles.container}> 
    <Text style={[globalStyles.sectionTitle, { color: theme.text }]}>MY WORKS</Text>

    <View style={styles.projectList}>
      <FlatList
        data={Data.projects}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Image source={item.img} style={styles.projectImage} />
            <View style={styles.cardText}>
              <Text style={[styles.projectTitle, { color: theme.text }]}>
                {item.projTitle}
              </Text>
              <Text style={[styles.description, { color: theme.text }]}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  </View>
);

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    padding: 10
  },
  projectList: {
    gap: 10,
  },
  card: {
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  projectImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardText: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  projectTitle: {
    fontSize: 20
  }
});