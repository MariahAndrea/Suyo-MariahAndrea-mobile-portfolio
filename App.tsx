import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import React, { useState } from 'react';
import { Colors, globalStyles } from './src/styles/style';
import { Hero } from './src/sections/hero';
import { ToggleButton } from './src/components/ToggleButton';
import { About } from './src/sections/about';
import { Skills } from './src/sections/skills';
import { Projects } from './src/sections/projects';
import { Contact } from './src/sections/contact';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? Colors.dark : Colors.light;

  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      
      
      <ToggleButton isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <ScrollView contentContainerStyle={globalStyles.container}>
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
        
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
