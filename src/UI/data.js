import { RxDashboard } from "react-icons/rx";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineBorderStyle } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineLuggage } from "react-icons/md";



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
]