import Image from "next/image";
// import styles from './page.module.css'
import {
  Box,
  Stack,
  Text,
  Button,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Instagram from "../../public/Instagram.svg";
import Tiktok from "../../public/Tiktok.svg";

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
      <Box as="footer" bg="#fff" p="10">
        <Stack spacing="7" align="center">
          <HStack
            color="#898f9c"
            justifyContent="space-between"
            w="100%"
            maxW="320px"
          >
            <Link
              as={NextLink}
              href="mailto:help@friendwrapped.com?subject=Email%20Us&body=Please%20describe%20your%20problem%20or%20feedback.%0AAttach%20screenshots%20if%20necessary.%0A------TYPE%20BELOW%20THIS%20LINE-----"
            >
              <Text>Email Us</Text>
            </Link>

            <Link
              as={NextLink}
              href="https://www.notion.so/Terms-b61ed5a7d03d44e38908dfaf0c7ee6dd?pvs=4"
              target="_blank"
            >
              <Text>Terms</Text>
            </Link>

            <Link
              as={NextLink}
              href="https://www.notion.so/Privacy-Policy-dd38245267d9487d9efef85c8757b570?pvs=4"
              target="_blank"
            >
              <Text>Privacy</Text>
            </Link>
          </HStack>
          <HStack spacing="4">
            <Link
              as={NextLink}
              href="https://instagram.com/friendwrapped?igshid=YzAwZjE1ZTI0Zg=="
            >
              <Image
                src={Instagram}
                alt="instagram logo"
                height={20}
                width={20}
              />
            </Link>

            <Link
              as={NextLink}
              href="https://www.tiktok.com/@friendwrapped?_t=8i6dkS5HXDK&_r=1"
            >
              <Image src={Tiktok} alt="Tiktok logo" height={12} width={18} />
            </Link>
          </HStack>
          <Text color="#898f9c">@ friendwrapped2023</Text>
        </Stack>
      </Box>
    </Box>
  );
}
