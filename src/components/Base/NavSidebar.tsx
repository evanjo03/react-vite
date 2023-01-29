import { useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  Sidebar,
  sidebarClasses,
  Menu,
  SubMenu,
  MenuItem,
} from "react-pro-sidebar";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isExpanded) {
    return (
      <div className="sticky drop-shadow-lg bg-[#fff] h-screen w-[50px] br-top-0 flex z-10 flex-col gap-4 justify-between items-center">
        <Link to="/">
          <div className="p-5">
            <FaReact size={30} color={"#61dbfb"} />
          </div>
        </Link>
        <button className="p-5" onClick={() => setIsExpanded(true)}>
          <BsChevronRight size={30} />
        </button>
      </div>
    );
  }

  return (
    <div className="sticky bg-[#fff] drop-shadow-lg absolute left-0 md:w-[400px] h-screen z-10 top-0 flex grow-0 flex-col gap-4 justify-between">
      <div>
        <Link to="/"> 
          <div className="min-h-4 p-5 flex-row flex items-center justify-start gap-2">
            React-Vite <FaReact size={30} color={"#61dbfb"} />
          </div>
        </Link>
        <Sidebar
          width="100%"
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "unset",
            },
            borderRightStyle: "none",
          }}
        >
          <div>
            <div className="p-5">
              <h3 className="text-[#4b5c61]">Learning</h3>
            </div>
            <Menu>
              <SubMenu label="Describing the UI">
                <MenuItem
                  component={<Link to="/learning/your-first-component" />}
                >
                  Your First Component
                </MenuItem>
              </SubMenu>
              <SubMenu label="Managing State">
                <MenuItem component={<Link to="/" />}>Todo</MenuItem>
              </SubMenu>
              <SubMenu label="Adding Interactivity">
                <MenuItem component={<Link to="/" />}>Todo</MenuItem>
              </SubMenu>
              <SubMenu label="Escape Hatches">
                <MenuItem component={<Link to="/" />}>Todo</MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </Sidebar>
        <Sidebar
          width="100%"
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "unset",
            },
            borderRightStyle: "none",
          }}
        >
          <div>
            <div className="p-5">
              <h3 className="text-[#4b5c61]">Docs</h3>
            </div>
            <Menu>
              <MenuItem component={<Link to="/docs/use-state" />}>
                UseState
              </MenuItem>
              <MenuItem component={<Link to="/docs/use-memo" />}>
                UseMemo
              </MenuItem>
              <MenuItem component={<Link to="/docs/use-ref" />}>
                UseRef
              </MenuItem>
            </Menu>
          </div>
        </Sidebar>
      </div>
      <button
        className="flex justify-end p-5"
        onClick={() => setIsExpanded(false)}
      >
        <BsChevronLeft size={30} />
      </button>
    </div>
  );
}
