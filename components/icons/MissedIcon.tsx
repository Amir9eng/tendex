import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const MissedIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#E28888"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m11.62 11.462-4.8-4.8m0 4.8 4.8-4.8"
    />
    <Path
      stroke="#E28888"
      strokeWidth={1.2}
      d="M17.22 9.063a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"
    />
  </Svg>
);
export default MissedIcon;
