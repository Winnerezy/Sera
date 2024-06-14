import Link from "next/link"
import { LuCalendar, LuCircleSlash, LuLayoutDashboard, LuPlus, LuPlusCircle, LuSettings } from "react-icons/lu";
export const BottomBar = () => {
  return (
    <section className="flex lg:hidden w-full h-[70px] border border-t-2 bg-[--primary-bg] fixed bottom-0 items-center justify-between px-8 md:px-16">
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
