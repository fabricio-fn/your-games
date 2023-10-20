import { FaWindows, FaXbox, FaPlaystation, FaLinux } from "react-icons/fa"
import { BsAndroid2, BsNintendoSwitch, BsApple } from "react-icons/bs"
import { ImMobile } from "react-icons/im"
import { ReactNode } from 'react';

export const platformIcons: { [key: string]: ReactNode } = {
  PC: <FaWindows size={20} />,
  Xbox: <FaXbox size={20} />,
  PlayStation: <FaPlaystation size={20} />,
  Nintendo: <BsNintendoSwitch size={20} />,
  Mac: <BsApple size={20} />,
  Linux: <FaLinux size={20} />,
  Android: <BsAndroid2 size={20} />,
  iOS: <ImMobile size={20} />,
};