import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type React from "react";

export default async function DashboardLayout({
    children,
    params
}:  { 
    children : React.ReactNode;
    params: {storeId: string}
}) {
    const { userId } = auth();

    if(!userId){
        redirect('/signin');
    }

    const store = await prismadb.store.findFirst({
        where : {
            id: params.storeId,
            userId : userId
        }
    });

    if(!store){
        redirect('/')
    }

    return (
        <>
            <div>This is the Navbar</div>
            {children}
        </>
    )
}