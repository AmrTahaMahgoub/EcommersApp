import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AddCart = (props: SvgProps) => (
  <Svg
  
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 5-2 7H7.377M20 16H8L6 3H3m13 2.5h-2.5m0 0H11m2.5 0V8m0-2.5V3M9 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
)
export default AddCart
