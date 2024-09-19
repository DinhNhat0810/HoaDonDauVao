import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/app.context";
import Header from "./Header";

import Sidebar from "./Sidebar";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const { mst, token } = useContext(AppContext);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={() => setCollapsed(!collapsed)}
      />
      <div className="flex-1 flex flex-col flex-grow-[1] overflow-y-auto relative">
        <Header collapsed={collapsed} />
        <div className="flex-1 p-4 mt-20">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
