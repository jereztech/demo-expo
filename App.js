import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { usePreventScreenCapture } from 'expo-screen-capture';
import { AppRegistry, LogBox, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import * as Sentry from 'sentry-expo';
import * as Localization from 'expo-localization';

import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Provider as PaperProvider, DarkTheme, Snackbar } from 'react-native-paper';

import { useNetInfo } from "@react-native-community/netinfo";

import { useFonts, Roboto_400Regular, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Prompt_400Regular, Prompt_600SemiBold, Prompt_700Bold } from '@expo-google-fonts/prompt';
import { SourceCodePro_700Bold } from '@expo-google-fonts/source-code-pro';
import { Orbitron_500Medium, Orbitron_700Bold } from '@expo-google-fonts/orbitron';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
