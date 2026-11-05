import { Link, Outlet } from "react-router-dom";

function ServiceLayout() {
  return (
    <div className="flex w-full p-5">
      <div className="w-1/5 flex flex-col h-full bg-gray-200 rounded p-3">
        <Link
          to="/services/service1"
          className="text-lg border-b border-gray-400 p-2"
        >
          Service 1
        </Link>
        <Link
          to="/services/service2"
          className="text-lg border-b border-gray-400 p-2"
        >
          Service 2
        </Link>
        <Link to="/services/service3" className="text-lg p-2">
          Service 3
        </Link>
      </div>
      <div className="w-4/5 p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default ServiceLayout;
