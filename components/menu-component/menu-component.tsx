import React from 'react';
import MenuButton from '../menu-button-component/menu-button-component';
import './menu-component.css';

interface MenuProps {
  onMenuButtonPress: (data: string) => void;
}

const Menu: React.FC<MenuProps> = ({onMenuButtonPress}) => {

  const handleButtonPress = (section: string) => {
    onMenuButtonPress(section);
  }; 

  return (
    <div className="menu-container">
      <MenuButton text="Home" onMenuButtonPress={handleButtonPress}></MenuButton>
      <MenuButton text="About" onMenuButtonPress={handleButtonPress}></MenuButton>
      <MenuButton text="Skills" onMenuButtonPress={handleButtonPress}></MenuButton>
      <MenuButton text="Projects" onMenuButtonPress={handleButtonPress}></MenuButton>
      <MenuButton text="Contact Me" onMenuButtonPress={handleButtonPress}></MenuButton>
    </div>
  );
};

export default Menu;