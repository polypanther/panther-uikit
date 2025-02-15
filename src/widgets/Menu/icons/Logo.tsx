import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 174 26" {...props}>
      <image width="205" height="26" href="/images/egg/LogoTextNewDark.png"/>
    </Svg>
  );
};

export default Logo;
