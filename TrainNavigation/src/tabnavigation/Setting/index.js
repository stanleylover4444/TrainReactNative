// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { ThemeProvider } from '../../component/theme/ThemeContext';
import ThemedComponent from '../../component/theme/ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <ThemedComponent>
        
          </ThemedComponent> 
        
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
