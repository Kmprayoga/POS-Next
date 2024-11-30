import React from 'react';
import SidebarNavs from './SidebarNavs';
import Link from 'next/link';
import sidebarLogo from '../../../public/assets/img/logo/logo1.png'
import sidebarSmallLogo from '../../../public/assets/img/logo/logo1.png'
import Image from 'next/image';
import useGlobalContext from '@/hooks/use-context';
const SidebarMenu = () => {
    const { setShowingNavigationDropdown, showingNavigationDropdown } = useGlobalContext()
    return (
        <div className='inventual-sidebar-area'>
            <div className="inventual-sidebar-main">
                <div className="inventual-sidebar-main-logo-bar">
                    <div className="inventual-sidebar-main-logo-bar-wrap">
                        <div className="inventual-sidebar-main-logo">
                            <div className="sidebar-logo">
                                <Link href="/dashboard">
                                    <Image className='rounded' src={sidebarLogo} style={{ width: '150px', height: "150px" }} alt="logo thimb" />
                                </Link>
                            </div>
                            <div className="sidebar-small-logo">
                                <Link href="/dashboard">
                                    <Image src={sidebarSmallLogo} style={{ width: '40px', height: "auto" }} alt="logo thimb" />
                                </Link>
                            </div>
                        </div>
                        <div className="inventual-sidebar-icon-bar !hidden" onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}>
                            <button type="button">
                                <i className="fa-solid fa-bars-sort"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="inventual-sidebar-navigation mb-6">
                    <nav>
                        <SidebarNavs />
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;