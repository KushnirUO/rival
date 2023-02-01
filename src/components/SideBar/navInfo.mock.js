import {
    BookOpen,
    BoxSquare,
    Coffee,
    FilePlus,
    HomeIcon,
    ImageIcon,
    PenTool,
    Trash,
    UsersIcon,
    Zap
} from "../../assets/iconJs/";

export const NavInfo = [{
    title: 'Manage',
    info: [
        {
            id: 1,
            icon: <HomeIcon/>,
            link: "/viewSite",
            label: "View site"
        },
        {
            id: 2,
            icon: <FilePlus/>,
            link: "/create",
            label: "Create page"
        },
        {
            id: 3,
            icon: <PenTool/>,
            link: "/blog",
            label: "Blog articles"
        },
        {
            id: 4,
            icon: <ImageIcon/>,
            link: "/fileView",
            label: "Files"
        },
        {
            id: 5,
            icon: <UsersIcon/>,
            link: "/users",
            label: "Users"
        },
        {
            id: 6,
            icon: <Zap/>,
            link: "/subscriptions",
            label: "Subscriptions"
        },
        {
            id: 7,
            icon: <Trash/>,
            link: "/archivedPages",
            label: "Archived pages"
        },
    ]
},
    {
        title: 'Pro features',
        info: [
            {
                id: 1,
                icon: <BookOpen/>,
                link: "/themes",
                label: "Themes"
            },
            {
                id: 2,
                icon: <BoxSquare/>,
                link: "/plugins",
                label: "Plugins"
            },
            {
                id: 3,
                icon: <Coffee/>,
                link: "/upgrade",
                label: "Upgrade plans"
            },
        ]
    }
];

