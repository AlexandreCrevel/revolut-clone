import { defaultStyles } from '@/constants/Styles';
import { LoginType } from '@/types/LoginType';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type LoginButtonProps = {
  onSignIn: (type: LoginType) => void;
  type: LoginType;
  text: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const LoginButton = ({ onSignIn, type, text, icon }: LoginButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        defaultStyles.pillButton,
        {
          backgroundColor: 'white',
          flexDirection: 'row',
          gap: 16,
          marginTop: 20,
        },
      ]}
      onPress={() => onSignIn(type)}
    >
      <Ionicons name={icon} size={24} color='#000' />
      <Text style={(defaultStyles.buttonText, { color: '#000' })}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
