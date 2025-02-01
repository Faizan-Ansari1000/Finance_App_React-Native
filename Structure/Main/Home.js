import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ImageBackground 
      source={{ uri: 'https://example.com/your-background-image.jpg' }} 
      style={styles.container}
      blurRadius={10}
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>Welcome to Our App</Text>
        <Text style={styles.subHeading}>Start your amazing journey with us</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => alert('Sign Up')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.signInButton]} 
          onPress={() => alert('Sign In')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker overlay
    padding: 30,
    borderRadius: 20,
    width: '100%',
    maxWidth: 400, // Limit max width for better UX
    textAlign: 'center',
  },
  heading: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#ff6f61', // Vibrant red
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  signInButton: {
    backgroundColor: '#4caf50', // Green color
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
