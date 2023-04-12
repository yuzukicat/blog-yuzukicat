import { ReactElement } from 'react';
import { DEFAULT_PATH_PROPS } from '../../helpers/utils';

export const CaretSlimIcon = ({ className }: { className?: string }): ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 8L12 16L20 8" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};
