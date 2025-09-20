import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';
const Products = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 100 100" {...props}>
    <Rect width={60} height={16} x={19} y={18.92} rx={4} ry={4} />
    <Rect width={27} height={16} x={19} y={40.92} rx={4} ry={4} />
    <Rect width={27} height={16} x={19} y={62.92} rx={4} ry={4} />
    <Rect width={27} height={16} x={52} y={40.92} rx={4} ry={4} />
    <Rect width={27} height={16} x={52} y={62.92} rx={4} ry={4} />
  </Svg>
);
export default Products;
