import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <button></button>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
