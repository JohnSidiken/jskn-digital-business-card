import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
const App = () => {
  const userInfo = {
    name: "John Samula",
    title: "Software Developer & Designer",
    phone: "+256791855622",
    whatsapp: "256756167064",
    email: "samulajohn8@gmail.com",
    website: "https://github.com/JohnSidiken",
    profileImage: require('./assets/jskn.jpg'),
  };
  const handlePress = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Cannot open", `No app found to handle: ${url}`);
      }
    } catch (err) {
      console.error("Error opening URL", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F8FF" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={userInfo.profileImage} style={styles.profilePic} />
          </View>

          <Text style={styles.nameText}>{userInfo.name}</Text>
          <Text style={styles.titleText}>{userInfo.title}</Text>

          <View style={styles.separator} />

          <View style={styles.buttonGrid}>
            <TouchableOpacity
              style={[styles.button, styles.callButton]}
              onPress={() => handlePress(`tel:${userInfo.phone}`)}
            >
              <Text style={styles.buttonText}>📞 Call Me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.whatsappButton]}
              onPress={() => handlePress(`https://wa.me/${userInfo.whatsapp}`)}
            >
              <Text style={styles.buttonText}>💬 WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.webButton]}
              onPress={() => handlePress(userInfo.website)}
            >
              <Text style={styles.buttonText}>🌐 Website</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.emailButton]}
              onPress={() => handlePress(`mailto:${userInfo.email}`)}
            >
              <Text style={styles.buttonText}>✉️ Email</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footerText}>Tap a button to connect with me!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#87CEEB',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  imageContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#B0E0E6',
    overflow: 'hidden',
    marginBottom: 20,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4682B4',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 16,
    color: '#5F9EA0',
    marginBottom: 20,
    fontWeight: '500',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#F0F0F0',
    marginBottom: 25,
  },
  buttonGrid: {
    width: '100%',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 7.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  callButton: {
    backgroundColor: '#87CEFA',
  },
  whatsappButton: {
    backgroundColor: '#40C351',
  },
  webButton: {
    backgroundColor: '#ADD8E6',
  },
  emailButton: {
    backgroundColor: '#B0C4DE',
  },
  footerText: {
    marginTop: 30,
    color: '#A9A9A9',
    fontSize: 12,
  },
});

export default App;
