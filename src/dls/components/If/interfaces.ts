export interface IfProps {
  condition: boolean;
  children: React.ReactNode | React.ReactNode[];
  elseRender?: React.ReactNode | React.ReactNode[];
}
