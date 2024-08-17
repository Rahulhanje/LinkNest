
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'

import { useSignoutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';
import { sidebarLinks } from '@/constants';
import { INavLink } from '@/types';
import { Button } from '../ui/button';

function LeftSidebar() {
    const { pathname } = useLocation();
    const { mutate: signOut, isSuccess } = useSignoutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();
    useEffect(() => {
        if (isSuccess) navigate(0);
    }, [isSuccess])
    return (
        <nav className="leftsidebar h-screen">
            <div className="felx felx-col gap-11">
                <Link to="/" className='flex gap-3 items-center'>
                    {/* logo of app */}
                    <img src='/assets/images/logo.svg' alt='Logo'
                        width={170}
                        height={36}
                    />
                </Link>
                <Link to={`/profile/${user.id}`} className=' flex gap-3 items-center py-5'>
                    <img src={user.imageUrl || "/assets/icons/profile-placeholder.svg"} alt='profileImage' className='w-14 h-14 rounded-full' />
                    <div className='flex flex-col'>
                        <p className='body-bold'>{user.name}</p>
                        <p className='small-regular text-light-3'>@{user.username}</p>
                    </div>
                </Link>
                <ul className='flex flex-col pt-2 gap-6'>
                    {sidebarLinks.map((link: INavLink) => {
                        const isActive = pathname === link.route;
                        return (
                            <li key={link.label} className={`leftsidebar-link group ${isActive && `bg-primary-500`}`}>
                                <NavLink to={link.route} className="flex  gap-4 items-center p-4">
                                    <img src={link.imgURL}
                                        alt={link.label}
                                        className={`group-hover:invert-white ${isActive && `invert-white`
                                            }`} />
                                    {link.label}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

            </div>
            <Button variant='ghost' className='shad-button_ghost' onClick={() => { signOut() }}>
                <img src="\assets\icons\logout.svg" alt='Logout' />
                <p className="small-medium lg:base-medium">logout</p>
            </Button>
        </nav>
    )
}

export default LeftSidebar;