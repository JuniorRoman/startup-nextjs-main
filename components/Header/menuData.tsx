import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Kontakt",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Kursy",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Kursy Online",
        path: "/courses/courses-online",
        newTab: false,
      },
      {
        id: 62,
        title: "Kursy Offline",
        path: "/courses/courses-offline",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 72,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 73,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 74,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 75,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 76,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 77,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 78,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
