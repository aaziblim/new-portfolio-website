import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotate,
  orbitDuration,
  shouldOrbit = false,
}: PropsWithChildren<{ size: number; rotate: number; orbitDuration?: string; shouldOrbit: boolean }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className={twMerge(shouldOrbit === true && "animate-spin")} style={
        {animationDuration: orbitDuration}}>
<div className="animate-spin [animation-duration: 10s]">
  <div
  className="flex items-start justify-start origin-center"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <div className="">{children}</div>
      </div>
</div>

    </div>
      </div>
      
  );
};
