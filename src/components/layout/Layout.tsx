import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

// type LayoutType = {
//   Header: any;
//   Content: any;
//   Footer: any;
// };

const PageHeader = ({ children }: LayoutProps): ReactNode => {
  return <div className="flex flex-row">{children}</div>;
};

const PageContent = ({ children }: LayoutProps) => {
  return <div className="flex flex-col">{children}</div>;
};
const PageFooter = ({ children }: LayoutProps) => {
  return <div className="flex flex-row">{children}</div>;
};

const PageLayout = ({ children }: LayoutProps) => {
  return <div className="flex flex-col">{children}</div>;
};

// const Layout: LayoutType = {
//   Header: PageHeader,
//   Content: PageContent,
//   Footer: PageFooter,
// };

export { PageLayout, PageHeader, PageContent, PageFooter };
