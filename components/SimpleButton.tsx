import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Href, Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type SimpleButtonProps = {
  href: Href<string | object>;
  text: string;
  variant?: 'light' | 'dark';
};

const SimpleButton = ({ href, text, variant }: SimpleButtonProps) => {
  return (
    <Link
      href={href}
      style={[
        defaultStyles.pillButton,
        {
          flex: 1,
          backgroundColor: variant === 'dark' ? Colors.dark : 'white',
        },
      ]}
      asChild
    >
      <TouchableOpacity>
        <Text
          style={{
            color: variant === 'dark' ? 'white' : 'black',
            fontSize: 16,
            fontWeight: '500',
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default SimpleButton;
