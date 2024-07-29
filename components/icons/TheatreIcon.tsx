import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const LocationIcon = (props: SvgProps) => (
  <Svg width={27} height={26} fill="none" {...props}>
    <Rect
      width={25.628}
      height={25.628}
      x={0.686}
      y={0.191}
      fill="#E9ECFB"
      rx={12.814}
    />
    <Rect
      width={25.628}
      height={25.628}
      x={0.686}
      y={0.191}
      stroke="#BEC7F4"
      strokeWidth={0.383}
      rx={12.814}
    />
    <Path
      stroke="#677CE4"
      strokeWidth={1.147}
      d="M14.738 20.17a1.81 1.81 0 0 1-1.237.485 1.81 1.81 0 0 1-1.237-.485c-3.038-2.861-7.11-6.058-5.124-10.7 1.074-2.51 3.65-4.115 6.36-4.115 2.711 0 5.288 1.606 6.362 4.115 1.983 4.636-2.079 7.848-5.124 10.7Z"
    />
    <Path
      stroke="#677CE4"
      strokeWidth={1.147}
      d="M16.177 12.24a2.678 2.678 0 1 1-5.355 0 2.678 2.678 0 0 1 5.355 0Z"
    />
  </Svg>
);
export default LocationIcon;
