import { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return <div className="pt-20 md:px-20 lg:px-80">{children}</div>;
}

export default HomeLayout;
