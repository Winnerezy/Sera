import { DashboardBox } from '@/components/DashboardBox'
import { FeedPieChart } from '@/components/FeedPieChart'
import { OverviewCard } from '@/components/OverviewCard'
import { Title } from '@/components/Title'
import { Tracker } from '@/components/Tracker'
import { db } from '@/lib/schemas/drizzle'
import { UsersTable } from '@/lib/schemas/schema'
import { PieChart } from '@mui/x-charts'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'

export default async function Dashboard() {

  const userId = headers().get('userId')
  const user = await db.select().from(UsersTable).where(eq(UsersTable.firstname, userId!))
  return (
    <main className='w-full min-h-screen py-8 px-4 lg:px-24 flex flex-col gap-y-8'>
       <Title title={`Welcome ${user[0].firstname}`}/>
        <section className='w-full h-[200px] lg:h-[250px] carousel gap-x-4 px-4 self-center bg-transparent'>
            <OverviewCard/>
            <OverviewCard/>
            <OverviewCard/>
            <OverviewCard/>
            <OverviewCard/>
        </section>
        <section className='w-full flex xl:flex-row flex-col gap-y-8 xl:gap-x-4'>
            <div className='w-full flex  flex-col gap-y-6'>
            <DashboardBox>
              <FeedPieChart/>
                <div className='w-[300px]'>

                </div>
            </DashboardBox>
            <section className='w-full flex lg:flex-col gap-6'>
              <article className='flex flex-col gap-6 w-full'>
                <div className='w-full h-[200px] bg-[--card-bg] rounded-[20px]'>

                </div>
                <div className='w-full h-[70px] bg-[--card-bg] rounded-[20px]'>

                </div>
              </article>
              <div className='w-full h-[300px] bg-[--card-bg] rounded-[20px]'>

              </div>
            </section>
            </div>
            <Tracker/>
        </section>
    </main>
  )
}
