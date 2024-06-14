import Link from "next/link"
import { NextRequest } from "next/server";
import { LuCalendar, LuCircleSlash, LuLayoutDashboard, LuPlus, LuPlusCircle, LuSettings } from "react-icons/lu";
export const Sidebar = () => {
  return (
    <section className="lg:flex flex-col hidden w-[100px] min-h-screen border border-t-2 bg-[--primary-bg] fixed left-0 items-center justify-center gap-y-16 py-8 md:py-16">
        <Link href={'/dashboard'} className="btn-neutral">
            <LuLayoutDashboard size='25px'/>
        </Link>
        <Link href={'/calendar'} className="btn-neutral">
            <LuCalendar size='25px'/>
        </Link>
        <Link href={'/create'} className="btn-neutral">
            <LuPlusCircle size='25px'/>
        </Link>
        <Link href={'/profile'} className="btn-neutral">
            <LuCircleSlash size='25px'/>
        </Link>
        <Link href={'/settings'} className="btn-neutral">
            <LuSettings size='25px'/>
        </Link>
    </section>
  )
}
