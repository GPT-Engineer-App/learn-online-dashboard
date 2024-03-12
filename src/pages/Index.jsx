import { Box, Button, Container, Flex, Heading, Input, Stack, Text, Textarea, useColorModeValue, VStack, HStack, Progress, List, ListItem, ListIcon, FormControl, FormLabel, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaRegCheckCircle, FaRegTimesCircle, FaUsers, FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleCreateCourse = () => {
    toast({
      title: "Course Created.",
      description: "We've created your course for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      {/* Dashboard Header */}
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          Learning Management System Dashboard
        </Heading>
        <Text>Welcome back, Educator!</Text>
      </VStack>

      {/* Main Content */}
      <Flex mt={10} gap={10}>
        {/* Sidebar */}
        <Box w="20%" p={5} bg={useColorModeValue("gray.100", "gray.700")} borderRadius="md">
          <VStack align="stretch" spacing={4}>
            <Button leftIcon={<FaChalkboardTeacher />} w="full">
              Courses
            </Button>
            <Button leftIcon={<FaUsers />} w="full">
              Enrollments
            </Button>
            <Button leftIcon={<FaClipboardList />} w="full">
              Assignments
            </Button>
            <Button leftIcon={<FaPlus />} w="full" colorScheme="blue" onClick={handleCreateCourse}>
              Create Course
            </Button>
          </VStack>
        </Box>

        {/* Main Panel */}
        <Box w="80%" p={5} bg={useColorModeValue("gray.50", "gray.800")} borderRadius="md">
          {/* Course Creation Form */}
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="lg">
              Create a New Course
            </Heading>
            <FormControl>
              <FormLabel>Course Title</FormLabel>
              <Input placeholder="Introduction to React" />
            </FormControl>
            <FormControl>
              <FormLabel>Course Description</FormLabel>
              <Textarea placeholder="This course will cover all the fundamentals of React..." />
            </FormControl>
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleCreateCourse}>
              Create Course
            </Button>
          </VStack>

          {/* Course List */}
          <Box mt={10}>
            <Heading as="h3" size="md">
              Your Courses
            </Heading>
            <List spacing={3} mt={4}>
              <ListItem>
                <HStack justify="space-between">
                  <Text>Web Development Fundamentals</Text>
                  <IconButton aria-label="Edit course" icon={<FaEdit />} />
                </HStack>
                <Progress value={60} mt={2} />
              </ListItem>
              <ListItem>
                <HStack justify="space-between">
                  <Text>Advanced JavaScript</Text>
                  <IconButton aria-label="Edit course" icon={<FaEdit />} />
                </HStack>
                <Progress value={80} mt={2} />
              </ListItem>
              {/* More courses can be added here */}
            </List>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
