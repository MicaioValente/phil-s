import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { ThemeLight, ThemeDark } from '@modules/profile/mobile/assets';

const ToggleTheme = () => {
  const [toogle, setToogle] = useState(false);

  const handlePress = () => {
    setToogle(prev => !prev);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {toogle ? <ThemeDark /> : <ThemeLight />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default ToggleTheme;
