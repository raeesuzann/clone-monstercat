import { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return <div className="px-64">{children}</div>;
}

export default HomeLayout;
