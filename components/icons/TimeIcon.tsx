import * as React from 'react';
import Svg, { SvgProps, Rect, Circle, Path } from 'react-native-svg';
const TimeIcon = (props: SvgProps) => (
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
    <Circle
      cx={13.5}
      cy={13.005}
      r={7.65}
      stroke="#677CE4"
      strokeWidth={1.147}
    />
    <Path
      fill="#677CE4"
      d="M14.074 9.18a.574.574 0 0 0-1.148 0h1.148Zm.98 4.566a.574.574 0 1 0-.812.812l.811-.812Zm.335 1.96a.574.574 0 1 0 .812-.812l-.812.811ZM12.926 9.18v2.677h1.148V9.18h-1.148Zm1.316 5.378 1.147 1.147.812-.811-1.148-1.148-.811.812Zm-.168-1.553a.574.574 0 0 1-.574.573v1.148c.95 0 1.721-.77 1.721-1.721h-1.147Zm-.574.573a.574.574 0 0 1-.574-.573H11.78c0 .95.77 1.72 1.72 1.72v-1.147Zm-.574-.573c0-.317.257-.574.574-.574v-1.148c-.95 0-1.721.771-1.721 1.722h1.147Zm.574-.574c.317 0 .574.257.574.574h1.147c0-.95-.77-1.722-1.721-1.722v1.148Z"
    />
  </Svg>
);
export default TimeIcon;
