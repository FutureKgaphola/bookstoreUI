
import { StyleSheet } from 'react-native';
import './ignoreWarnings';
import * as Font from "expo-font";
import Stack from './navigation/Stack.js';
import { useEffect, useState } from 'react';
import { Portal, PaperProvider } from 'react-native-paper';

export default function App() {
  const [fontsLoaded, setfont] = useState(null);
  let customFonts = {
    CroissantOne: require("./assets/fonts/Croissant_One/CroissantOne-Regular.ttf"),
    InclusiveSans_Italic: require("./assets/fonts/Inclusive_Sans/InclusiveSans-Italic.ttf"),
    InclusiveSans_Regular: require("./assets/fonts/Inclusive_Sans/InclusiveSans-Regular.ttf"),
  };
  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setfont(true);
  }
  useEffect(() => {
    loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <PaperProvider>
        <Portal>
          <Stack />
        </Portal>
      </PaperProvider>
    </>
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
