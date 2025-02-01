import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

export default function User() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Top Banner with Image */}
      <View style={styles.topBanner}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaWFsfGVufDB8fDB8fHww',
          }}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Your Finance Plan</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Finance Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            Learn about investment opportunities and finance plans tailored to your needs.
          </Text>
        </View>

        {/* Horizontal Scrollable Cards */}
        <ScrollView
          horizontal
          contentContainerStyle={{ alignItems: 'center' }}
          style={styles.cardContainer}
          showsHorizontalScrollIndicator={false}
        >
          {['Wedding', 'StartUp', 'Construction', 'Education'].map((cardTitle, index) => (
            <View key={index} style={styles.card}>
              <TouchableOpacity onPress={() => navigation.navigate(cardTitle)}>
                <Text style={styles.cardText}>{cardTitle}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Additional Information Section */}
        <View style={styles.additionalInfoSection}>
          <Text style={styles.additionalInfoText}>
            Explore top finance management tools to make smart decisions for your future.
          </Text>
        </View>

        {/* More Information Cards */}
        <ScrollView style={styles.infoCardsScroll} showsVerticalScrollIndicator={false}>
          {['Investment Options', 'Loan Plans', 'Financial Guidance'].map((title, index) => (
            <View key={index} style={styles.infoCard}>
              <Text style={styles.infoCardTitle}>{title}</Text>
              <Text style={styles.infoCardDescription}>
                Find the best {title.toLowerCase()} to secure your financial future.
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Bottom Navigation Buttons */}
        <View style={styles.buttonRow}>
          {['Wedding', 'Construction'].map((buttonTitle, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate(buttonTitle)}
            >
              <Text style={styles.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
  topBanner: {
    width: '100%',
    height: 250,
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slight background for text
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  infoSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  cardContainer: {
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#003C43',
    paddingVertical: 25,
    paddingHorizontal: 30,
    marginHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: 150,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalInfoSection: {
    marginBottom: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  additionalInfoText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    lineHeight: 24,
  },
  infoCardsScroll: {
    marginBottom: 30,
  },
  infoCard: {
    backgroundColor: '#f4f4f4',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoCardTitle: {
    fontSize: 18,
    color: '#003C43',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoCardDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#003C43',
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    flex: 0.48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
