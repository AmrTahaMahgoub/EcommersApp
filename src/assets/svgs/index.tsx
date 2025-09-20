import React from 'react';
import {SvgProps} from 'react-native-svg';
import ActiveStar from './activeStar';
import InactiveStar from './inactiveStar';
import Arrow from './arrow';
import AddCart from './addCart';
import Categories from './categories';
import Products from './products';

export type IconsName =
  | 'activeStar'
  | 'arrow'
  | 'inactiveStar'
  | 'addcart'
  | 'Categories'
  | 'products';

export type RotateTypes = 'left' | 'right' | 'top' | 'bottom';

export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name?: IconsName;
  rotate?: RotateTypes;
  type?: 'image' | 'svg';
}

const getRotate = (rotate: string) => {
  switch (rotate) {
    case 'top':
      return '90deg';
    case 'bottom':
      return '270deg';
    case 'left':
      return '0deg';
    case 'right':
      return '-180deg';
    default:
      return '0deg';
  }
};

function Svgs(props: IconsProps & SvgProps) {
  const style = {transform: [{rotate: getRotate(props.rotate || '')}]};

  switch (props.name) {
    case 'activeStar':
      return (
        <ActiveStar {...props} style={[props.rotate && style, props.style]} />
      );
    case 'inactiveStar':
      return (
        <InactiveStar {...props} style={[props.rotate && style, props.style]} />
      );
    case 'arrow':
      return <Arrow {...props} style={[props.rotate && style, props.style]} />;
    case 'addcart':
      return (
        <AddCart {...props} style={[props.rotate && style, props.style]} />
      );
    case 'Categories':
      return (
        <Categories {...props} style={[props.rotate && style, props.style]} />
      );
    case 'products':
      return (
        <Products {...props} style={[props.rotate && style, props.style]} />
      );

    default:
      return <Arrow {...props} />;
  }
}

export default Svgs;
