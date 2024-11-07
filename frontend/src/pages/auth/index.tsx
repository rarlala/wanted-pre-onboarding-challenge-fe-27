import { Link, Outlet, useLocation } from "react-router-dom";
import style from "./index.module.scss";
import cn from "classnames";

const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.auth}>
      <div className={style.tabs}>
        {[
          { path: "/auth/login", title: "Login" },
          { path: "/auth/signup", title: "Sign Up" },
        ].map(({ path, title }) => (
          <Link
            key={path}
            to={path}
            type="button"
            className={cn(pathname === path && style.active)}
          >
            {title}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
