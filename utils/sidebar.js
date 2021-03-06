import { ReactComponent as buyurtmalar } from "../assats/icons/buyurtmalar.svg";
import { ReactComponent as maxsulotlar } from "../assats/icons/maxsulotlar.svg";
import { ReactComponent as kategoriyalar } from "../assats/icons/kategoriyalar.svg";
import { ReactComponent as filiallar } from "../assats/icons/filiallar.svg";
import { ReactComponent as mijozlar } from "../assats/icons/mijozlar.svg";
import { ReactComponent as xisobot } from "../assats/icons/xisobot.svg";
import { ReactComponent as setting } from "../assats/icons/setting.svg";
import Generic from "../pages/Generic";
import Buyurtmalar from "../pages/Buyurtmalar";

export const sidebar = [
  {
    id: 1,
    title: "Buyurtmalar",
    path: "/buyurtmalar",
    Icon: buyurtmalar,
    Component: Buyurtmalar,
    hidden: false,
  },
  {
    id: 2,
    title: "Mahsulotlar",
    path: "/mahsulotlar",
    Icon: maxsulotlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 3,
    title: "Kategoriya",
    path: "/kategariya",
    Icon: kategoriyalar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 4,
    title: "Filiallar",
    path: "/filiallar",
    Icon: filiallar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 5,
    title: "Mijozlar",
    path: "/mijorlar",
    Icon: mijozlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 6,
    title: "Hisobot",
    path: "/hisobot",
    Icon: xisobot,
    Component: Generic,
    hidden: false,
  },
  {
    id: 7,
    title: "Hodimlar",
    path: "/hodimlar",
    Icon: setting,
    Component: Generic,
    hidden: false,
  },
  {
    id: 8,
    title: "Katalog",
    path: "/katalog",
    Icon: setting,
    Component: Generic,
    hidden: false,
  },
];
