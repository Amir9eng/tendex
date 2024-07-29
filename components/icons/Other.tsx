import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Other = (props: SvgProps) => (
  <Svg width={27} height={26} fill="none" {...props}>
    <Rect
      width={25.76}
      height={25.76}
      x={0.5}
      y={0.25}
      fill="#677CE4"
      rx={12.88}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={0.735}
      d="M9.46 9.7h5.88"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.98}
      d="M17.3 9.7h.004M17.3 13.13h.004M17.3 16.56h.004"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={0.735}
      d="M9.46 13.13h5.88M9.46 16.56h5.88"
    />
  </Svg>
);
export default Other;
