import SimpleButton from '@/components/SimpleButton';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Page = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);
  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.buttons}>
        <SimpleButton href='/login' text='Login In' variant='dark' />
        <SimpleButton href='/signup' text='Sign Up' variant='light' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    fontSize: 36,
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontWeight: '900',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    color: 'red',
    paddingHorizontal: 20,
  },
});

export default Page;
