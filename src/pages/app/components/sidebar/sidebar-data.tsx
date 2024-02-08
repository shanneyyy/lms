import { IconBookmark, IconBooks, IconLayout, IconMessageDots, IconUsers } from "@tabler/icons-react"
import { useState } from "react"

const SidebarData = () => {
    const [data, setData] = useState([
        {
            label: "Dashboard",
            to: "/",
            icon: <IconLayout className="h-5 w-5 text-primary stroke-[1.5]"/>
        },
        {
            label: "Books Inventory",
            to: "/books",
            icon: <IconBooks className="h-5 w-5 text-primary stroke-[1.5]"/>
        },
        {
            label: "User Management",
            to: "/users",
            icon: <IconUsers className="h-5 w-5 text-primary stroke-[1.5]"/>
        },
        {
            label: "Borrow",
            to: "/borrow",
            icon: <IconBookmark className="h-5 w-5 text-primary stroke-[1.5]"/>
        },
        {
            label: "Feedback",
            to: "/feedback",
            icon: <IconMessageDots className="h-5 w-5 text-primary stroke-[1.5]"/>
        },
    ])
    
    return {data};
}

export default SidebarData