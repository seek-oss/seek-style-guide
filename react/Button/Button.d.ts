import { ReactNode, Component } from 'react';

type Props = React.HTMLProps<HTMLButtonElement> & {
  color: 'pink' | 'blue' | 'gray' | 'transparent' | 'white',
  children: ReactNode,
  className?: string,
  component?: string | ReactNode,
  ghost?: boolean,
  loading?: boolean,
  fullWidth?: boolean
};


// export type Button = Component<Props>

declare class RemoveButton extends Component<Props, any> {}

export default RemoveButton;