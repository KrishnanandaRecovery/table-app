import { Link, Outlet } from "react-router-dom";

function ServiceLayout() {
  return (
    <>
      <div>
        <Link to="/services/service1"> Service 1 </Link>
        <Link to="/services/service2"> Service 2 </Link>
        <Link to="/services/service3"> Service 3 </Link>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default ServiceLayout;
