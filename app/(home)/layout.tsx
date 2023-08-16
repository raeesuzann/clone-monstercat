import { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return <div className="px-80">{children}</div>;
}

export default HomeLayout;
