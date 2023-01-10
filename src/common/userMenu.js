export const userMenus = [
  {
    title: "start Screen",
    icon: "EmojiTransportationIcon",
    routeName: "/",
    childMenus: null,
  },
  {
    title: "test 1",
    icon: "EmojiTransportationIcon",
    routeName: "/test1",
    childMenus: [
      {
        title: "child 1",
        routeName: "/test1",
        component: "Test1",
        noDrawer: false,
      },
    ],
  },
  {
    title: "test 2",
    icon: "EmojiTransportationIcon",
    routeName: "/test2",
    childMenus: [
      {
        title: "child 1",
        routeName: "/test2",
        noDrawer: false,
      },
      {
        title: "child 2",
        routeName: "/test3",
        noDrawer: false,
      },
    ],
  },
];
