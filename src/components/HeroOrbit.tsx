import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotate,
}: PropsWithChildren<{ size: number; rotate: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className=""
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};
