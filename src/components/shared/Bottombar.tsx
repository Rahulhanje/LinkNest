import { bottombarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom"

function Bottombar() {
  const { pathname } = useLocation();

  return (

    <section className='bottom-bar fixed'>
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link key={link.label} className={`bottombar-link group ${isActive && `bg-primary-500 rounded-[10px]`} flex-center flex-col gap-1 p-2 transition`} to={link.route}>
            <img src={link.imgURL}
            width={30}
              alt={link.label}
              className={`${isActive && `invert-white `
                }`} />
          <p className=" tiny-medium text-light-2">{link.label}</p>
          </Link>

        )
      })}

    </section>
  )
}

export default Bottombar


