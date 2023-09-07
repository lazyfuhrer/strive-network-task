import { Box, BoxProps, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import { Analytics, Bell, Fire, LogOut, Plus, Profile, Rocket } from "@/icons/strive";

interface LinkItemProps {
  name: string
  icon: any
  to: string
}
interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Profile', icon: Profile, to: '/' },
    { name: 'Push Notifications', icon: Bell, to: '/push' },
    { name: 'Gas Fee', icon: Fire, to: '/biconomy' },
    { name: 'Utilities Launchpad', icon: Rocket, to: '/utility' },
    { name: 'Add Utility', icon: Plus, to: '/privilege' },
    { name: 'Analytics', icon: Analytics, to: '/analytics' },
    { name: 'Logout', icon: LogOut, to: '/logout' },
]

export default function SidebarContent ({ onClose, ...rest }: SidebarProps) {
    const router = useRouter();
    const isActive = (pathname : string) => router.pathname === pathname;
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        bottom={0}
        zIndex={10}
        transition="3s ease"
        bg="#0A0C17"
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        h="100vh"
        mt={{ base: 0, md: 20 }}
        {...rest}
      >
        <Flex h={{base: '20', md: '5'}} alignItems="center" mx="8" justifyContent="space-between">
          <CloseButton color={'rgba(2, 170, 176, 1)'} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} to={link.to} bg={isActive(link.to) ? '#0A1E2F' : ''} color={isActive(link.to) ? 'white' : ''}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    )
}