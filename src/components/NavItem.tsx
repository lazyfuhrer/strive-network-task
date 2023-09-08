import { Flex, FlexProps, Icon, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import { motion } from "framer-motion";

interface NavItemProps extends FlexProps {
  icon: any;
  to: string;
  children: React.ReactNode;
}

export default function NavItem({ icon, to, children, ...rest }: NavItemProps) {
  return (
    <Link
      as={NextLink}
      href={to}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <motion.div
        whileTap={{ opacity: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          mt="1"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: '#0A1E2F',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              color={'#00CDAC'}
              _groupHover={{
                color: 'rgba(2, 170, 176, 1)',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </motion.div>
    </Link>
  );
};