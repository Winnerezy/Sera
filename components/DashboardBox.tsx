import { Box } from "@chakra-ui/react"
import { Children } from "react"

export const DashboardBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='20px' overflow='hidden' className="bg-[--card-bg] w-full h-[300px] xl:h-[500px] flex p-4">
        { children }
    </Box>
  )
}
