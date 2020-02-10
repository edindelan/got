import React from 'react';
import loader from '../../assets/loader-spinner.png';
import {
  Loader,
} from './styles';

export default () => (
  <Loader>
    <img src={loader} alt="" />
  </Loader>
);
