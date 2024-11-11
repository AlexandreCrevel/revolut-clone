import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const BackButton = () => {
  const router = useRouter();

  const handlePress = () => {
    router.back();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Ionicons name='arrow-back' size={34} color={Colors.dark} />
    </TouchableOpacity>
  );
};

export default BackButton;
