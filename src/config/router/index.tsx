import MyComponent from "../../components/MyComponent";

export const router = [
  {
    icon: "",
    label: "Inbox",
    path: "/inbox",
    template: "dashboard",
    component: <MyComponent title={"Inbox"} />,
  },
  {
    icon: "",
    label: "Mail",
    path: "/mail",
    template: "dashboard",
    component: <MyComponent title={"Mail"} />,
  },
  {
    icon: "",
    label: "Spam",
    path: "/spam",
    template: "dashboard",
    component: <MyComponent title={"Spam"} />,
  },
  {
    icon: "",
    label: "Trash",
    path: "/trash",
    template: "dashboard",
    component: <MyComponent title={"Trash"} />,
  },
];
