import { Box, Button, ButtonGroup, Flex, FormControl, Input, Stack, StackDivider, Text, Textarea } from '@chakra-ui/react'

export default function Push() {
  return (
    <Box pl={10} pr={10} pt={7} pb={{base: 5, md: 0}}>
      <Text fontSize={{base: '31px', md: '40px'}} fontWeight={700} style={{ background: 'linear-gradient(90deg, #02AAB0 30.18%, #00CDAC 95.88%)', WebkitBackgroundClip: 'text', color: 'transparent'}}>Push Notifications</Text>
      <Stack mt={10} direction='column' spacing={19} divider={<StackDivider borderColor='rgba(255, 255, 255, 0.3)' />}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box flex={1} pr={{ base: 0, md: 10 }}>
            <Text fontSize={['20px', '24px']} fontWeight={700} mb={1}>
              Channel
            </Text>
            <Box maxW="316px">
              <Text fontSize={['10px', '12px']} fontWeight={500}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
              </Text>
            </Box>
          </Box>
          <Box flex={{ base: 1, md: 'none' }} pl={{ base: 0, md: 10 }}>
            <FormControl mb={3}>
              <Input
                border={'1.5px solid rgba(255, 255, 255, 1)'}
                _placeholder={{ color: 'rgba(255, 255, 255, 1)' }}
                placeholder='Channel Address'
                w={['100%', '100%', '304px', '504px']}
                h='47px'
              />
            </FormControl>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize={'14px'} fontWeight={500} w={'159px'}>Don’t have the channel? Create one here...</Text>
              <Button borderRadius={'8px'} w={'148px'} h={'35px'} bgColor={'rgba(2, 170, 176, 0.3)'} _hover={{ bg: "rgba(0, 120, 126, 1)" }}>Create</Button>
            </Flex>
          </Box>
        </Stack>
    
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box flex={1} pr={{ base: 0, md: 10 }}>
            <Text fontSize={['20px', '24px']} fontWeight={700} mb={1}>
              Collection
            </Text>
            <Box maxW="316px">
              <Text fontSize={['10px', '12px']} fontWeight={500}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
              </Text>
            </Box>
          </Box>
          <Box pl={{ base: 0, md: 10 }}>
            <FormControl mb={6}>
              <Input
                border={'1.5px solid rgba(255, 255, 255, 1)'}
                _placeholder={{ color: 'rgba(255, 255, 255, 1)' }}
                placeholder='Collection Name'
                w={['100%', '100%', '304px', '504px']}
                h='47px'
              />
            </FormControl>
          </Box>
        </Stack>

        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box flex={1} pr={{ base: 0, md: 10 }}>
            <Text fontSize={['20px', '24px']} fontWeight={700} mb={1}>
              Notifications
            </Text>
            <Box maxW="316px">
              <Text fontSize={['10px', '12px']} fontWeight={500}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
              </Text>
            </Box>
          </Box>
          <Box pl={{ base: 0, md: 10 }}>
            <FormControl mb={6}>
              <Input
                border={'1.5px solid rgba(255, 255, 255, 1)'}
                _placeholder={{ color: 'rgba(255, 255, 255, 1)' }}
                placeholder='Notification Title'
                w={['100%', '100%', '304px', '504px']}
                h='47px'
              />
            </FormControl>
            <FormControl>
              <Textarea
                border={'1.5px solid rgba(255, 255, 255, 1)'}
                _placeholder={{ color: 'rgba(255, 255, 255, 1)' }}
                placeholder='Notification Body'
                w={['100%', '100%', '304px', '504px']}
                h='98px'
              />
            </FormControl>
          </Box>
        </Stack>
        
        <Flex mt={1} minWidth='max-content' alignItems='center' justifyContent='flex-end' gap='2'>
          <ButtonGroup gap='2'>
            <Button border={'1px'} borderColor={'rgba(255, 255, 255, 0.3)'} color={'rgba(255, 255, 255, 0.8)'} variant={'outline'}>Cancel</Button>
            <Button bgColor={'rgba(2, 170, 176, 1)'} _hover={{ bg: "rgba(0, 120, 126, 1)" }}>Send Notifications</Button>
          </ButtonGroup>
        </Flex>
      </Stack>
    </Box>
  );
};