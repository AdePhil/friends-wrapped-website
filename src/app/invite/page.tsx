"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Linden_Hill } from "next/font/google";
import Footer from "@/components/footer";

const font = Linden_Hill({
  subsets: ["latin"],
  weight: ["400"],
});

export default function InvitePage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/download");
    }, 1000);
  }, []);
  return (
    <Box w="100%" bg="#008BFF" display="flex" flexDir="column">
      <Box as="main" position="relative" overflow="hidden" minH="100vh">
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
        <Stack dir="vertical" align="center" mt="12" spacing="16">
          <Image
            src="/fw-white.svg"
            alt="friend wrapped logo"
            width="150"
            height="150"
          />
          <Text
            fontFamily={font.style.fontFamily}
            fontSize="8xl"
            textAlign="center"
            color="white"
            lineHeight="144px"
          >
            YOU’RE IN
          </Text>
          <Text fontWeight="light" color="white" textTransform="uppercase">
            Redirecting...
          </Text>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
