import { isValidElement, ReactElement } from 'react';
import clsx from 'clsx';
import { IHeroGradientProps } from '../types/components';
import { Button } from './button';
import { Image } from './image';

const Shadow = ({ className }: { className: string }): ReactElement => {
  return (
    <span
      className={clsx(
        'absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl',
        className,
      )}
    />
  );
};

export const HeroGradient = ({
  title,
  description,
  link,
  version,
  colors = [],
  image,
  className,
}: IHeroGradientProps): ReactElement => {
  return (
    <section className={clsx('bg-white dark:bg-[#111] md:py-14', className)}>
      <div
        className={clsx(
          'container relative z-0 flex max-w-[90rem] items-center gap-6 px-6 md:px-14',
          image ? 'py-6' : 'py-14',
        )}
      >
        <div
          className="absolute inset-0 z-[-1] overflow-hidden bg-black dark:bg-[#111] md:mx-6 md:rounded-3xl"
          style={{ '--colorA': colors[0], '--colorB': colors[1] }}
        >
          <Shadow className="-top-24 -left-10 [background:var(--colorA)]" />
          <Shadow className="-top-5 hidden [background:var(--colorA)] md:right-[-28rem] md:block" />
          <Shadow className="right-[-22rem] bottom-[-31rem] [background:var(--colorB)]" />
          <Shadow className="-left-12 bottom-[-37rem] hidden [background:var(--colorB)] md:block" />
        </div>
        <div className={clsx('grow md:pl-6')}>
          <h1 className="max-w-lg text-2xl font-bold text-white md:text-3xl">{title}</h1>
          <p className="mt-2.5 mb-4 max-w-md text-base text-white opacity-70 md:text-lg">
            {description}
          </p>
          <div className="flex items-center gap-x-3 text-xs md:mt-9">
            {link &&
              toArray(link).map(link => (
                <Button
                  key={link.href}
                  variant="secondary"
                  {...link}
                  className={clsx('!px-8', link.className)}
                />
              ))}
            {version && isValidElement(version) ? (
              version
            ) : (
              <span className="text-gray-50 opacity-60">{version}</span>
            )}
          </div>
        </div>
        {image && (
          <Image
            {...image}
            className={clsx(
              'hidden w-full max-w-sm select-none sm:max-w-md md:block',
              image.className,
            )}
          />
        )}
      </div>
    </section>
  );
};

function toArray<T>(input: T | T[]) {
  return Array.isArray(input) ? input : [input];
}
