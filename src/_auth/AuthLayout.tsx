import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const isAuthenticated = false;

  return (
    <div className="flex">
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10 ">
            <Outlet />
          </section>
          {/* {side image of signup page} */}
          <img
            src="assets\images\side-img.svg"
            alt="Side-Logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </div>
  );
}

export default AuthLayout;
