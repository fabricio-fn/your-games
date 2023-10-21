import { FaWindows, FaXbox, FaPlaystation, FaLinux } from "react-icons/fa"
import { BsAndroid2, BsNintendoSwitch, BsApple } from "react-icons/bs"
import { ImMobile } from "react-icons/im"
import { ReactNode } from 'react';

export const platformIcons: { [key: string]: ReactNode } = {
  pc: <FaWindows size={20} />,
  xbox: <FaXbox size={20} />,
  playstation: <FaPlaystation size={20} />,
  nintendo: <BsNintendoSwitch size={20} />,
  mac: <BsApple size={20} />,
  linux: <FaLinux size={20} />,
  android: <BsAndroid2 size={20} />,
  ios: <ImMobile size={20} />,
};