import React from 'react';
import { Box, Text, Button, Center } from '@chakra-ui/react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

interface UploadBoxProps {
  title: string;
  mt?: any;
}

export default function SmallUpload ({ title, ...rest }: UploadBoxProps) {
  return (
    <Box
      w={{ base: '100%', md: '268px' }}
      h={{ base: '200px', md: '248px' }}
      mb={{ base: '16px', md: '0' }}
      mr={{ base: '0', md: '16px' }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius="24px"
      {...rest}
    >
      <Text fontSize={{ base: '20px', md: '20px' }} fontWeight={500}>{title}</Text>
      <Box
        mt={3}
        w={{ base: '100%', md: '100%' }}
        h={{ base: '200px', md: '220' }}
        style={{
          background: `
            linear-gradient(162.34deg, #161A42 22.61%, rgba(22, 26, 66, 0) 118.29%),
            linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))
          `,
        }}
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="24px"
        padding="16px"
      >
        <Center flexDirection="column" w={{ base: '100%', md: '100%' }} h="250px" borderRadius="12px" border="2px dashed rgba(47, 128, 236, 1)">
          <Text mb={2} fontSize={{ base: '12px', md: '16px' }} color={'rgba(47, 128, 236, 1)'}>Drag or Drop files here</Text>
          <Text mb={2} fontSize={{ base: '10px', md: '12px' }} color={'rgba(47, 128, 236, 1)'}>OR</Text>
          <Button display="flex" alignItems="center" fontSize={{ base: '12px', md: '16px' }} variant="unstyled" bg={'rgba(47, 128, 236, 1)'} leftIcon={<AiOutlinePlusCircle />} w={{ base: '90px', md: '128px' }} h={{ base: '25px', md: '35px' }}>Add File</Button>
        </Center>
      </Box>
    </Box>
  );
};