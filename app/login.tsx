import LoginButton from '@/components/LoginButton';
import OrSeparaor from '@/components/OrSeparaor';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { LoginType } from '@/types/LoginType';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
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
  const router = useRouter();
  const { signIn } = useSignIn();
  const onSignIn = async (type: LoginType) => {
    try {
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      const { supportedFirstFactors } = await signIn!.create({
        identifier: fullPhoneNumber,
      });
      const firstPhoneFactor: any = supportedFirstFactors?.find(
        (factor) => factor.strategy === 'phone_code'
      );

      const { phoneNumberId } = firstPhoneFactor;

      await signIn!.prepareFirstFactor({
        strategy: 'phone_code',
        phoneNumberId,
      });

      router.push({
        pathname: '/verify/[phone]',
        params: { phone: fullPhoneNumber, signin: 'true' },
      });
    } catch (error) {
      console.error('Error Signing In', JSON.stringify(error, null, 2));
      if (isClerkAPIResponseError(error)) {
        if (error.errors[0].code === 'form_identifier_not_found') {
          Alert.alert('Error', error.errors[0].message);
        }
      }
    }
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
          type={LoginType.github}
          text='Continue with Github'
          icon='logo-github'
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
