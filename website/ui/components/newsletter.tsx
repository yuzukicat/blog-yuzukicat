import { ReactElement } from 'react';
import clsx from 'clsx';

export const Newsletter = ({
  className,
  hideLinkToIssues,
}: {
  className?: string;
  hideLinkToIssues?: boolean;
}): ReactElement => {
  return (
    <div
      className={clsx(
        'my-12 flex max-w-3xl flex-col gap-2 rounded bg-gray-100 p-6 dark:bg-zinc-900 sm:mx-auto',
        className,
      )}
    ></div>
  );
};