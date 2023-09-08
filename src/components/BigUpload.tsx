import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { Exo } from "next/font/google";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

const exo = Exo({ subsets: ["latin"] });

export default function BigUpload() {
  return (
    <main className={exo.className}>
      <Flex
        justifyContent="center"
        alignItems="center"
        h={{ base: "300px", md: "320px" }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          borderRadius={"24px"}
          w={{ base: "310px", md: "360px" }}
          h={{ base: "300px", md: "340px" }}
          textAlign="center"
          border={"1px solid rgba(255, 255, 255, 0.3)"}
          style={{
            background: `
              linear-gradient(162.34deg, #161A42 22.61%, rgba(22, 26, 66, 0) 118.29%),
              linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))
            `,
          }}
        >
          <Flex>
            <Icon
              as={FiUpload}
              w={{ base: "25px", md: "29px" }}
              h={{ base: "25px", md: "29px" }}
              mr={{ base: "10px", md: "15px" }}
            />
            <Text fontSize={{ base: "18px", md: "20px" }} fontWeight={600}>
              Upload your file
            </Text>
          </Flex>
          <Box
            border="2px dashed rgba(47, 128, 236, 1)"
            mt={6}
            mx={"auto"}
            width={"80%"}
            h={"140px"}
            borderRadius={"24px"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color={"rgba(47, 128, 236, 1)"}
              mb={2}
              fontSize={{ base: "13px", md: "16px" }}
              fontWeight={500}
            >
              Drag or Drop files here
            </Text>
            <Text
              color={"rgba(47, 128, 236, 1)"}
              mb={2}
              fontSize={{ base: "10px", md: "12px" }}
              fontWeight={500}
            >
              OR
            </Text>
            <Button
              display="flex"
              alignItems={"center"}
              fontSize={{ base: "13px", md: "16px" }}
              variant={"unstyled"}
              w={{ base: "110px", md: "128px" }}
              h={{ base: "30px", md: "35px" }}
              leftIcon={<AiOutlinePlusCircle />}
              bg={"rgba(47, 128, 236, 1)"}
              _hover={{ bg: "rgba(0, 85, 160, 1)" }}
            >
              Add File
            </Button>
          </Box>
          <Box mt={6}>
            <Text
              mb={2}
              fontSize={{ base: "10px", md: "12px" }}
              fontWeight={500}
            >
              Supported files - JPG, PNG, GIF
            </Text>
            <Text fontSize={{ base: "10px", md: "12px" }} fontWeight={500}>
              Please select a file to import the collections
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex justifyContent={{ base: "center", md: "flex-end" }} mt={7}>
        <Button
          variant="unstyled"
          bg={"rgba(2, 170, 176, 1)"}
          _hover={{ bg: "rgba(0, 120, 126, 1)" }}
          w={"180px"}
          h={"46px"}
          fontSize={"20px"}
        >
          Next
        </Button>
      </Flex>
    </main>
  );
};