import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home",
    },
    {
        title:"Item",
        icon:<LocalMallOutlinedIcon/>,
        link:"/item",
    },
    {
        title:"Additem",
        icon:<LocalMallOutlinedIcon/>,
        link:"/additem",
    },
    {
        title:"Invoice",
        icon:<DescriptionOutlined/>,
        link:"/invoice",
    },
    {
        title:"Register",
        icon:<PersonOutlineOutlinedIcon/>,
        link:"/register",
    },
    {
        title:"Party",
        icon:<GroupOutlinedIcon/>,
        link:"/party",
    },
    {
        title:"Profile",
        icon:<AddCircleOutlinedIcon/>,
        link:"/profile",
    },
    {
        title:"Service",
        icon:<AddCircleOutlinedIcon/>,
        link:"/service",
    },
]

export default SidebarData
