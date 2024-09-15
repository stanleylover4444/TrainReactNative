// ThemedComponent.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <View style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <Text style={theme === 'light' ? styles.lightText : styles.darkText}>
        Current theme: {theme}
      </Text>
      <Button
        title="Toggle Theme"
        onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default ThemedComponent;
