import LoginButton from '@/components/LoginButton';
import OrSeparaor from '@/components/OrSeparaor';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { LoginType } from '@/types/LoginType';
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
  const onSignIn = async (type: LoginType) => {
    console.log('onSignup');
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={80}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
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
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={() => onSignIn(LoginType.phoneNumber)}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <OrSeparaor />
        <LoginButton
          onSignIn={onSignIn}
          type={LoginType.email}
          text='Continue with Email'
          icon='mail'
        />
        <LoginButton
          onSignIn={onSignIn}
          type={LoginType.google}
          text='Continue with Google'
          icon='logo-google'
        />
        <LoginButton
          onSignIn={onSignIn}
          type={LoginType.apple}
          text='Continue with Apple'
          icon='logo-apple'
        />
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
