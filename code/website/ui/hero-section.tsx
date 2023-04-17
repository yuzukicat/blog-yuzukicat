import { ReactElement, ReactNode } from 'react';

export const HeroSection = ({
  children,
}: {
  children: ReactNode;
  hideCirclesOnMobile?: boolean;
}): ReactElement => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <div
          className="
          z-[1]
          mt-20
          flex
          max-w-[700px]
          flex-col items-center
          px-2
          md:px-2
          lg:mt-44"
        >
          {children}
        </div>
      </div>
    </div>
  );
};