"use client";

import { Box, Flex, Link, Text, VStack, Divider } from "@chakra-ui/react";

function FooterApp() {
  return (
    <Box bg="maroon" color="white" py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        {/* Liens du footer */}
        <VStack spacing={4} align={{ base: "center", md: "start" }} fontSize="lg" color="gray.200">
          <Link href="/" _hover={{ color: "gray.300" }}>Home</Link>
          <Link href="/services" _hover={{ color: "gray.300" }}>Services</Link>
          <Link href="/about" _hover={{ color: "gray.300" }}>About Us</Link>
          <Link href="/contact" _hover={{ color: "gray.300" }}>Contact</Link>
        </VStack>

        {/* Informations de contact */}
        <VStack spacing={2} align={{ base: "center", md: "end" }} mt={{ base: 8, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">Studio Music</Text>
          <Text fontSize="md">123 Main Street, Moncton, NB</Text>
          <Text fontSize="md">contact@studiomusic.com</Text>
          <Text fontSize="md">+1 506-123-4567</Text>
        </VStack>
      </Flex>

      <Divider my={6} borderColor="gray.600" />

      <Text textAlign="center" fontSize="sm" opacity={0.7}>
        © {new Date().getFullYear()} Studio Music - All rights reserved. created by <Link target="_blank" href="https://m2atech.com">M2atech</Link>
      </Text>
    </Box>
  );
}

export default FooterApp;
