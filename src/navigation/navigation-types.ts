import {Product} from '../@types';

export type MainAppStackTypes = {
  Splash: undefined;
  Details: {ProductDetails: Product};
  Products: undefined;
  BottomTabs: undefined;
};

export type MainNavigationKeys = keyof MainAppStackTypes;
