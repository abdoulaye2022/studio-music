"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";

function Bannier() {
  return (
    <Box
      position="relative"
      width="100%"
      height="75vh"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
    >
      {/* Vidéo locale en arrière-plan */}
      <Box
        as="video"
        src="/videos/video.mov"
        autoPlay
        loop
        muted
        playsInline
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex="-1"
      />

      {/* Superposition avec effet de dégradé */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-b, blackAlpha.700, blackAlpha.400, transparent)"
        zIndex="0"
      />

      {/* Contenu stylisé */}
      <Box position="relative" zIndex="1" textAlign="center" px={6}>
        <Heading as="h1" size="3xl" fontWeight="bold" mb={4} textTransform="uppercase">
          Welcome to Our Studio
        </Heading>
        <Text fontSize="xl" fontWeight="light" mb={6} opacity={0.9}>
          First music studio in Moncton - Where Creativity Meets Sound
        </Text>
        <Button
          size="lg"
          bg="maroon"
          color="white"
          px={6}
          py={4}
          fontSize="lg"
          fontWeight="bold"
          borderRadius="full"
          _hover={{ bg: "gray.300", transform: "scale(1.05)" }}
          transition="all 0.3s ease"
        >
          More About Us
        </Button>
      </Box>
    </Box>
  );
}

export default Bannier;
