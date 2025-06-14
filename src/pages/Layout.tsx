import Navbar from "@/components/Navbar"
import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout