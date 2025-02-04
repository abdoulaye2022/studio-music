"use client";

import { Box, Grid, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { FaMusic, FaMicrophone, FaHeadphones } from "react-icons/fa";

function Services() {
  const services = [
    { icon: FaMusic, title: "Recording", description: "Professional recording services with high-quality equipment." },
    { icon: FaMicrophone, title: "Mixing & Mastering", description: "Enhance your tracks with expert mixing and mastering." },
    { icon: FaHeadphones, title: "Music Production", description: "Custom beats and production to bring your music to life." },
  ];

  return (
    <Box py={12} px={6} maxW="1200px" mx="auto" textAlign="center">
      <Heading as="h2" size="xl" fontWeight="bold" mb={8} color="maroon">
        Our Services
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
        {services.map((service, index) => (
          <VStack
            key={index}
            p={6}
            bg="gray.100"
            borderRadius="lg"
            boxShadow="md"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          >
            <Icon as={service.icon} boxSize={12} color="maroon" />
            <Heading as="h3" size="lg" mt={4}>
              {service.title}
            </Heading>
            <Text fontSize="md" color="gray.600">
              {service.description}
            </Text>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
