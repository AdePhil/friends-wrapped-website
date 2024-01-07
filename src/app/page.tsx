import Image from "next/image";
import { Box, Stack, Text, Button, VStack } from "@chakra-ui/react";

import Footer from "@/components/footer";

export default function Home() {
  return (
    <Box w="100%" display="flex" flexDir="column" justifyContent="center">
      <Box
        minH="100vh"
        as="main"
        bg="#008BFF"
        position="relative"
        overflow="hidden"
        h="100%"
        flex="1"
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Box mt="-100px">
          <Box
            bg="#f16806"
            right="-83px"
            top="-18px"
            position="absolute"
            justifyContent="center"
            color="white"
            fontSize="lg"
            fontWeight="semibold"
            px="90px"
            pb="6"
            pt="12"
            transform="rotate(45deg)"
          >
            <Text>
              EARLY <br />
              ACCESS
            </Text>
          </Box>
          <Stack dir="vertical" align="center" mt="10">
            <Image
              src="/fw-white.svg"
              alt="friend wrapped logo"
              width="150"
              height="150"
            />
            <Text fontSize="xl" fontWeight="bold" color="white" mb="12">
              See your friend wrapped
            </Text>
            <VStack spacing="4" mt="7">
              <Button
                w="165px"
                h="50px"
                justifyContent="flex-start"
                leftIcon={
                  <Image
                    src="/apple-store.svg"
                    alt="Play Store"
                    width="29"
                    height="33"
                  />
                }
              >
                <VStack align="start" spacing="0">
                  <Text fontSize="10px" fontWeight="light">
                    Download on the
                  </Text>
                  <Text>App Store</Text>
                </VStack>
              </Button>
              <Button
                w="165px"
                h="50px"
                justifyContent="flex-start"
                leftIcon={
                  <Image
                    src="/icon.svg"
                    alt="Play Store"
                    width="29"
                    height="33"
                  />
                }
              >
                <VStack align="start" spacing="0">
                  <Text fontSize="10px" fontWeight="light">
                    Get it on
                  </Text>
                  <Text>Google Play</Text>
                </VStack>
              </Button>
            </VStack>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
