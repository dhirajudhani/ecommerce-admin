import { UserButton } from "@clerk/nextjs"
import { MainNav } from "./MainNav"
import StoreSwitcher from "./StoreSwitcher"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import prismadb from "@/lib/prismadb"

const Navbar = async () => {
    const {userId} = auth();

    if(!userId) {
        redirect("/signin");
    }

    const stores = await prismadb.store.findMany({
        where:{
            userId: userId
        }
    })

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores} />
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton />
                </div>
            </div>
        </div>
    )
}

export default Navbar