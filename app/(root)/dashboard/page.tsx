import { DashboardBox } from '@/components/DashboardBox'
import { OverviewCard } from '@/components/OverviewCard'
import { Title } from '@/components/Title'
import { Tracker } from '@/components/Tracker'

export default function page() {
  return (
    <main className='w-full min-h-screen py-8 px-8 lg:px-24 flex flex-col gap-y-8'>
       <Title title='Overview'/>
        <section className='w-full h-[200px] lg:h-[250px] carousel gap-x-4 px-4 self-center bg-transparent'>
            <OverviewCard/>
            <OverviewCard/>
            <OverviewCard/>
            <OverviewCard/>
            <OverviewCard/>
        </section>
        <section className='w-full flex xl:flex-row flex-col gap-y-4 xl:gap-x-4'>
            <DashboardBox>
                <div>

                </div>
            </DashboardBox>
            <Tracker/>
        </section>
    </main>
  )
}
