import { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return <div className="px-60">{children}</div>;
}

export default HomeLayout;
