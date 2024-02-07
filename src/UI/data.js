import { RxDashboard } from "react-icons/rx";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineBorderStyle } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineLuggage } from "react-icons/md";

import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { RiTodoLine } from "react-icons/ri";
import { BsCalendarEvent } from "react-icons/bs";

import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";


export const sidebarMenuData = [
  {
    icon: <RxDashboard />,
    title: 'Dashboard',
  },

  {
    icon: <MdOutlineBorderStyle />,
    title: 'Products',
  },

  {
    icon: <LuUsers2 />,
    title: 'Customers',
  },

  {
    icon: <MdOutlineLuggage />,
    title: 'Orders',
  },

  {
    icon: <MdOutlineAnalytics />,
    title: 'Analytics',
  },
];


export const cardsData = [
  {
    title: 'Sales',
    amount: '25,970',
    icon: <RiMoneyDollarBoxLine />,
    value: 70,
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
  },

  {
    title: 'Revenue',
    amount: '14,270',
    icon: <BsCalendarEvent />,
    value: 80,
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
  },

  {
    title: 'Sales',
    amount: '4,270',
    icon: <RiTodoLine />,
    value: 60,
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
  },
];

export const UpdatesData = [
  {
    image: image1,
    name: "Andrew Thomas",
    notification: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    image: image2,
    name: "James Bond",
    notification: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    image: image3,
    name: "Iron Man",
    notification: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
