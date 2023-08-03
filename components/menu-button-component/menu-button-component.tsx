import React from 'react';
import './menu-button-component.css';
import { Pressable, StyleSheet, Text } from 'react-native';

interface MenuButtonProps {
  text: string;
  
  onMenuButtonPress?: (data: string) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({text, onMenuButtonPress}) => {

  const handleScrollToSection = (ref: string) => {
    if (onMenuButtonPress) {
      onMenuButtonPress(ref); // Trigger the custom event with the data
    }
  };

  return (
    <Pressable
      style={styles.button}
      onPress={() => handleScrollToSection(text)}>
      
      <Text >{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    fontSize: 100,
    borderWidth: 2,
    fontWeight:500,
    width: 200,
    height: 30,
    marginLeft: 30,
    marginBottom: 30,
   

  }
});

export default MenuButton;