import { ReactElement } from 'react';
import { DEFAULT_PATH_PROPS } from '../../helpers/utils';

export const MoonIcon = ({ className }: { className?: string }): ReactElement => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.75 8.3425C14.4217 11.8944 11.3866 14.5777 7.82131 14.4682C4.256 14.3586 1.39135 11.494 1.2818 7.92867C1.17225 4.36336 3.85562 1.32824 7.40748 1C5.86275 3.08984 6.07942 5.99534 7.91703 7.83295C9.75464 9.67056 12.6601 9.88723 14.75 8.3425Z"
        {...DEFAULT_PATH_PROPS}
      />
    </svg>
  );
};
