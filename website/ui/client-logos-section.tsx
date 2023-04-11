import { ReactElement } from 'react';
import { StaticImageData } from 'next/image';
import { Image } from '@theguild/components';

const logos: Record<string, StaticImageData> = {};

export const ClientLogosSection = (): ReactElement => {
  return (
    <div className="container">
      <div className="mx-auto mt-44 flex max-w-[1260px] flex-wrap items-center justify-center gap-12 pb-20">
        {Object.entries(logos).map(([name, logo]) => (
          <Image
            key={name}
            src={logo}
            title={name}
            alt={`${name} logo`}
            placeholder="empty"
            loading="eager"
            className="
            h-8
            w-auto
            opacity-70
            invert
            transition-opacity
            duration-300
            hover:opacity-100
            dark:invert-0
            "
          />
        ))}
      </div>
    </div>
  );
};