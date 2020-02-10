import React from 'react';
import keyboardIcon from '../../assets/keyboard.svg';
import {
  KeyboardShortcuts,
  Keyboard,
  Info,
} from './styles';

export default () => (
  <KeyboardShortcuts>
    <Keyboard>
      <img width={25} src={keyboardIcon} alt="" />
    </Keyboard>
    <Info>
      <p>Keyboard shortcuts are available:</p>
      <br />
      <p>D, Right Arrow - Previous slide</p>
      <p>A, Left Arrow - Next slide</p>
      <p>M - Toggle background music</p>
    </Info>
  </KeyboardShortcuts>
);
