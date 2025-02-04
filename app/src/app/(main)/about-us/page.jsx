"use client";

import { Box, Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";

function AboutUs() {
  return (
    <Box py={12} px={6} maxW="1200px" mx="auto">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={8}
      >
        {/* Image de présentation */}
        <Box flex="1">
          <Image
            src="/images/studio.jpeg"
            alt="Music Studio"
            borderRadius="lg"
            boxShadow="lg"
            objectFit="cover"
            w="100%"
            maxH="400px"
          />
        </Box>

        {/* Contenu textuel */}
        <VStack flex="1" align="start" spacing={4}>
          <Heading as="h2" size="xl" fontWeight="bold" color="maroon">
            About Our Studio
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Our studio is a creative space for artists, producers, and musicians. 
            We offer high-quality recording, mixing, and mastering services in a 
            professional and inspiring environment.
          </Text>
          <Text fontSize="md" color="gray.600">
            Founded in Moncton, our studio has helped numerous artists achieve 
            their musical dreams with state-of-the-art equipment and a team of 
            dedicated sound engineers.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export default AboutUs;
