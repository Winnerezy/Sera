import { Card, CardBody, CardHeader } from '@chakra-ui/react'

export const OverviewCard = () => {
  return (
    <Card className='carousel-item relative max-w-[500px] w-full h-[150px] lg:h-[200px] shadow-xl flex rounded-[20px] p-2 items-start justify-center gap-2 cursor-pointer'>
    <CardHeader className='font-semibold text-2xl'>
        Lorem ipsum dolor sit amet.
    </CardHeader>
    <CardBody className='font-light text-sm line-clamp-4'>
        Lorem ipsum dolor, sit amet cons
        ectetur adipisicing elit. Recusandae perspiciatis 
        reprehenderit atque odio necessitatibus accusamus deserunt.
         Eos consectetur modi delectus?
    </CardBody>
</Card>
  )
}
