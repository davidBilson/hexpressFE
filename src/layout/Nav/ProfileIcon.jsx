import React, { useState, useRef, useEffect } from 'react';
import style from './ProfileIcon.module.css';
// React Icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown} from "react-icons/io";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { GrShop, GrTransaction } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/useStore'

const ProfileIcon = () => {

    const navigate = useNavigate()
    const { user } = useStore()
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        window.onclick = closeDropdown;

        return () => {
            window.onclick = null;
        };
    }, []);
    
  return (
        <>
            <div className={style.profileIcon} ref={dropdownRef}>
                <div onClick={toggleDropdown}>
                    <FaUserAlt />
                    <IoMdArrowDropdown />
                </div>
                {
                    showDropdown &&
                    <div className={style.profileIconDropdown} >
                        {
                            user &&
                            <span onClick={() => {navigate('/dashboard'), setShowDropdown(false)}}>
                                <MdOutlineDashboard size={15} />
                                My Dashboard
                            </span>
                        }
                        {
                            user &&
                            <span onClick={() => {navigate('/dashboard/ship-now'), setShowDropdown(false)}}>
                                <LiaShippingFastSolid size={15} />
                                Ship Now
                            </span>
                        }
                        {
                            user &&
                            <span onClick={() => {navigate('/dashboard/transactions'), setShowDropdown(false)}}>
                                <GrTransaction size={15} />
                                Transactions
                            </span>
                        }
                        {
                            user &&
                            <span onClick={() => {navigate('/dashboard/personal-shopper'), setShowDropdown(false)}}>
                                <GrShop size={15} />
                                Personal Shopper
                            </span>
                        }
                        {
                            user &&
                            <span >
                                <TbSettings size={15} />
                                Profile Settings
                            </span>
                        }
                        {
                            user ?
                            <span onClick={() => {navigate('/'), setShowDropdown(false)}}>
                                <MdLogout size={15} />
                                Logout
                            </span>
                            :
                            <span onClick={() => {navigate('/sign-in'), setShowDropdown(false)}}>
                                <MdLogout size={15} />
                                Login
                            </span>
                        }
                    </div>
                }
            </div>
        </>
  )
}

    export default ProfileIcon