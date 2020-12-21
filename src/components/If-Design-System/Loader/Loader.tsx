import React from 'react';

const colors = {
  white: "#faf9f7",
  blue: "#0054f0",
  brown: "#331e11",
}

interface IProps {
  isLoading?: boolean,
  size?: "small" | "large" | "largest",
  color?: "white" | "blue" | "brown",
  [x: string]: any
}

export const Loader: React.FC<IProps> = ({
  isLoading = true,
  size = "small",
  color = "brown",
  ...props
}) => {
  return (
    <svg
      className={`if loader dots horizontal ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props}>
      <g className="if svg g">
        <circle className="if svg circle" fill={colors[color]} cx="8" cy="32" r="8" />
        <circle className="if svg circle" fill={colors[color]} cx="32" cy="32" r="8" />
        <circle className="if svg circle" fill={colors[color]} cx="56" cy="32" r="8" />
      </g>
    </svg>
  );
}

export default Loader;
