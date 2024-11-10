import { defaultStyles } from '@/constants/Styles';
import { useSignIn, useSignUp } from '@clerk/clerk-expo';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Page = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();
  const [code, setCode] = useState('');
  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();

  useEffect(() => {
    if (code.length === 6) {
      console.log(code);
    }
  }, [code]);

  const verifyCode = async () => {
    console.log(code);
  };

  const verifySignIn = async () => {
    console.log(code);
  };

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>6 digit code</Text>
      <Text style={defaultStyles.descriptionText}>
        Code sent to {phone} unless you already have an account
      </Text>
      <Link href={'/login'} asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;
