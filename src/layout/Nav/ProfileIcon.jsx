import React from 'react';
import style from './ProfileIcon.module.css';
// React Icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown} from "react-icons/io";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { GrShop, GrTransaction } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";

    const ProfileIcon = () => {
  return (
        <>
            <div className={style.profileIcon}>
                <FaUserAlt />
                <IoMdArrowDropdown />
                <div className={style.profileIconDropdown} >
                    <span>
                        <MdOutlineDashboard size={15} />
                        My Dashboard
                    </span>
                    <span>
                        <LiaShippingFastSolid size={15} />
                        Ship Now
                    </span>
                    <span>
                        <GrTransaction />
                        Transactions
                    </span>
                    <span>
                        <GrShop size={15} />
                        Personal Shopper
                    </span>
                    <span>
                        <TbSettings size={15} />
                        Settings
                    </span>
                    <span>
                        <MdLogout size={15} />
                        Logout
                    </span>
                </div>
            </div>
        </>
  )
}

    export default ProfileIcon