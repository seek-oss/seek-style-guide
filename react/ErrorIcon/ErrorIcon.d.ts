import { SFC } from 'react';

export type ErrorIconProps = React.HTMLProps<HTMLSpanElement> & {
  filled?: boolean
}

declare const ErrorIcon: SFC<ErrorIconProps>

export default ErrorIcon;