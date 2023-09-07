import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import SidebarContent from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout ({ children } : any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box minH="100vh" backgroundImage={"linear-gradient(to bottom,#0A0C17, #0A1E2F)"}>
        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            {/* sidebar */}
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* navbar */}
        <Navbar onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} mt={20}>
          {children}
        </Box>
      </Box>
    )
};