import type { IfProps } from '@dls/components/If/interfaces';

const If = ({ condition, elseRender, children }: IfProps) =>
  condition ? children : elseRender ?? null;

export default If;
