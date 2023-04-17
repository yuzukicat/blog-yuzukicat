import { ComponentProps, ReactElement } from 'react';
import clsx from 'clsx';
import { Anchor } from './anchor';

export type ButtonProps = Omit<ComponentProps<'a'>, 'href' | 'ref'> & {
  variant?: 'primary' | 'secondary';
  href: string;
};

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps): ReactElement => {
  return (
    <Anchor
      className={clsx(
        `
        flex-none
        rounded-md
        p-3
        text-center
        text-xs
        font-medium
        hover:shadow-lg
        md:px-5
      `,
        variant === 'primary'
          ? 'bg-cyan-400 text-white hover:shadow-cyan-400/40'
          : 'bg-white text-black hover:shadow-white/40',
        className,
      )}
      {...props}
    >
      {children}
    </Anchor>
  );
};
