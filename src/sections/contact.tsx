import { View, Text, StyleSheet } from 'react-native';
import { Colors, globalStyles } from '../styles/style';
import { Data } from '../components/data';

export const Contact = ({ theme }: { theme: any }) => (
  <View style={styles.container}>
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[globalStyles.sectionTitle, { color: theme.text }]}>CONTACT ME</Text>
      
      <View style={styles.infoCard}>
        {Data.contact.map((item) => (
          <View key={item.id} style={styles.contactRow}>
            <item.IconLibrary 
              name={item.iconName as any} 
              size={24} 
              color={theme.text} 
            />
            <Text style={[styles.infoText, { color: theme.text }]}>
              {item.information}
            </Text>
          </View>
        ))}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  card: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  infoText: {
    marginLeft: 15,
    fontSize: 16,
    alignItems: 'left',
  },
});