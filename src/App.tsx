import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  Sidebar,
  sidebarClasses,
  SubMenu,
} from "react-pro-sidebar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="learning" element={<Layout />}>
          <Route path="your-first-component" element={<YourFirstComponent />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="docs" element={<Layout />}>
          <Route path="use-state" element={<UseState />} />
          <Route path="use-memo" element={<UseMemo />} />
          <Route path="use-ref" element={<UseRef />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <NavSidebar />
        <Outlet />
      </div>
    </div>
  );
}

function NavSidebar() {
  return (
    <div className="sticky h-96 top-0 flex flex-col gap-4">
      <Link to="/">
        <div className="min-h-4 p-5 flex-row flex items-center justify-start gap-2">
          React-Vite <FaReact size={30} color={"#61dbfb"} />
        </div>
      </Link>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "unset",
          },
          borderRightStyle: "none",
        }}
      >
        <div>
          <div className="px-5">
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
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "unset",
          },
          borderRightStyle: "none",
        }}
      >
        <div>
          <div className="px-5">
            <h3 className="text-[#4b5c61]">Docs</h3>
          </div>
          <Menu>
            <MenuItem component={<Link to="/docs/use-state" />}>
              UseState
            </MenuItem>
            <MenuItem component={<Link to="/docs/use-memo" />}>
              UseMemo
            </MenuItem>
            <MenuItem component={<Link to="/docs/use-ref" />}>UseRef</MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
}

function YourFirstComponent() {
  return <div>Your First Component</div>;
}

function UseState() {
  return <div>Use State</div>;
}

function UseMemo() {
  return <div>Use Memo</div>;
}

function UseRef() {
  return <div>Use Ref</div>;
}

function Home() {
  return (
    <div className="p-24 grow">
      <div className="flex flex-col justify-center align-center max-w-5xl m-auto">
        <h1 className="border-b  border-b-[#4b5c61] pb-4 text-center">
          React Documentation Course
        </h1>
        <br />
        <div>
          The goal here is for me to go through the new updated React.js docs
          and make sure I'm review each concept by doing.
        </div>
        <br />
        <div>I'm using TypeScript and Tailwind for this project.</div>
        <br />
        <div className="flex items-center justify-center gap-12">
          <svg
            xmlns="http://www.w5.org/2000/svg"
            fill="none"
            viewBox="0 0 262 33"
            width={400}
            height={300}
          >
            <g
              fillRule="evenodd"
              clipPath="url(#prefix__clip0)"
              clipRule="evenodd"
            >
              <path
                fill="#38bdf8"
                d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              />
              <path
                fill="#0f172a"
                d="M80.996 13.652h-4.712v9.12c0 2.432 1.596 2.394 4.712 2.242V28.7c-6.308.76-8.816-.988-8.816-5.928v-9.12h-3.496V9.7h3.496V4.596l4.104-1.216V9.7h4.712v3.952zM98.958 9.7h4.104v19h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V9.7zm-6.004 15.58c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm16.948-18.43c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zM107.85 28.7v-19h4.104v19h-4.104zm8.854 0V.96h4.104V28.7h-4.104zm30.742-19h4.332l-5.966 19h-4.028l-3.952-12.806-3.99 12.806h-4.028l-5.966-19h4.332l3.686 13.11 3.99-13.11h3.914l3.952 13.11 3.724-13.11zm9.424-2.85c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zm-2.052 21.85v-19h4.104v19h-4.104zm18.848-19.494c4.256 0 7.296 2.888 7.296 7.828V28.7h-4.104V17.452c0-2.888-1.672-4.408-4.256-4.408-2.698 0-4.826 1.596-4.826 5.472V28.7h-4.104v-19h4.104v2.432c1.254-1.976 3.306-2.926 5.89-2.926zM200.418 2.1h4.104v26.6h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V2.1zm-6.004 23.18c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm23.864 3.914c-5.738 0-10.032-4.37-10.032-9.994 0-5.662 4.294-9.994 10.032-9.994 3.724 0 6.954 1.938 8.474 4.902l-3.534 2.052c-.836-1.786-2.698-2.926-4.978-2.926-3.344 0-5.89 2.546-5.89 5.966 0 3.42 2.546 5.966 5.89 5.966 2.28 0 4.142-1.178 5.054-2.926l3.534 2.014c-1.596 3.002-4.826 4.94-8.55 4.94zm15.314-14.25c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014zm17.518 0c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014z"
              />
            </g>
            <defs>
              <clipPath id="prefix__clip0">
                <path fill="#fff" d="M0 0h262v32.4H0z" />
              </clipPath>
            </defs>
          </svg>
          <svg
            fill="none"
            height="200"
            viewBox="0 0 512 512"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#3178c6" height="512" rx="256" width="512" />
            <path
              clipRule="evenodd"
              d="m278.939 319.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
