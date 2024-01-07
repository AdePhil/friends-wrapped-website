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

export default function Footer() {
  return (
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
  );
}
