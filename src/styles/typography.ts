import {I18nManager} from "react-native";
import {scale} from "./dimensions";

type FontFamilyTypes = {
  REGULAR: number;
  MEDIUM: number;
  BOLD: number;
  SEMIBOLD: number;
  LIGHT: number;
};

type FontSizeTypes = {
  H1: number;
  H2: number;
  H3: number;
  H4: number;
  P: number;
  FS18: number;
  FS14: number;
  FS13: number;
  FS16: number;
  FS11: number;
  FS7: number;
  FS10: number;
  FS8: number;
  FS24:number;
  FS20:number;
  FS22:number;
};

export const REGULAR = I18nManager.isRTL
  ? "IBMPlexSansArabic-Regular"
  : "Inter-Regular";
export const MEDIUM = I18nManager.isRTL
  ? "IBMPlexSansArabic-Medium"
  : "Inter-Medium";
export const SEMIBOLD = I18nManager.isRTL ? "" : "Inter-SemiBold";

export const BOLD = I18nManager.isRTL ? "IBMPlexSansArabic-Bold" : "Inter-Bold";
export const LIGHT = "Inter-Light";

export const H1 = scale(22);
export const H2 = scale(16);
export const H3 = scale(12);
export const H4 = scale(9);
export const P = scale(12);
export const FS18 = scale(18);
export const FS24 = scale(24);
export const FS20 = scale(20);
export const FS22 = scale(22);
export const FS14 = scale(14);
export const FS16 = scale(16);
export const FS11 = scale(11);
export const FS7 = scale(7);
export const FS10 = scale(10);
export const FS13 = scale(13);
export const FS8 = scale(8);

export type {FontSizeTypes, FontFamilyTypes};
