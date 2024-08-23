import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./Callout";
import { CompareDemo } from "./CompareDemo";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  CompareDemo
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
