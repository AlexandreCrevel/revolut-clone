import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Page = () => {
  const [countryCode, setCountryCode] = useState('+33');
  const [phoneNumber, setPhoneNumber] = useState('');
  const onSignup = async () => {
    console.log('onSignup');
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={80}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number and we will send you a verification code
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='+33'
            placeholderTextColor={Colors.gray}
            value={countryCode}
            onChangeText={setCountryCode}
            keyboardType='numeric'
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder='Phone Number'
            placeholderTextColor={Colors.gray}
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <Link href='/login' replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Already have an account?</Text>
          </TouchableOpacity>
        </Link>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}
        >
          <Text style={defaultStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Page;
