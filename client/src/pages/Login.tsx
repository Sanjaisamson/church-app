import {
  Box,
  Center,
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  TextProps,
  useMediaQuery,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import LoginForm from "../forms/LoginForm";
import background from "../assets/puthenPally.jpeg";
import Logo from "../assets/Final-Logo-Orthodox.jpg";
import { LoginData } from "../types/login.types";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLogin } from "@/hooks/useAuthentication";
// import { useLogin } from "./hooks/useAuthentication";

const subTitleStyles: TextProps = {
  fontSize: { base: "lg", sm: "md", md: "lg", lg: "xl" },
  fontWeight: "semibold",
};

const Login: React.FC = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm<LoginData>();

  // const [isLoading, setLoading] = useState(false);
  // const navigate = useNavigate();
  // const { mutate } = useLogin();

  // const onSubmit = (data: { email: string; password: string }) => {
  //   setLoading(true);
  //   mutate(data, {
  //     onSuccess: () => {
  //       setLoading(false);
  //       if (data?.accessToken) {
  //         navigate("/dashboard");
  //       }
  //     },
  //     onError: () => {
  //       setLoading(false);
  //     }
  //   })
  // }
  const [isMobile] = useMediaQuery("(max-width: 425px)");

  return (
    <Flex width={"100vw"} height={"100vh"}>
      <HStack
        w="100%"
        bgSize={"cover"}
        bgPosition={"-50px"}
        bgImage={isMobile ? background : "transparent"}
      >
        <Box
          bgImage={background}
          h="100%"
          bgSize={"cover"}
          w={{ base: "70%", sm: "0%", md: "50%", lg: "60%" }}
          display={isMobile ? "none" : "unset"}
        >
          <Center
            h="full"
            bgColor={"rgba(0, 0, 0, 0.4)"}
            alignItems={"flex-start"}
            pt={{ base: "36", "2xl": "52" }}
          ></Center>
        </Box>
        <Center h="100%" w={{ base: "100%", sm: "100%", md: "50%", lg: "40%" }}>
          <VStack
            w="100%"
            bgColor={isMobile ? "rgba(255, 255, 255, 0.4)" : "transparent"}
            py="10"
          >
            <Image w="240px" h="200px" src={Logo} />
            <Box borderRadius={8} bg="white" p={"8"} boxShadow={"cardShadow"}>
              <VStack px={{ base: 0, lg: 4 }}>
                <Text {...subTitleStyles}>Log in</Text>
                <form>
                  <HStack w="100%">
                    <LoginForm
                      control={control}
                      register={register}
                      errors={errors}
                    />
                  </HStack>
                </form>
              </VStack>
            </Box>
            <Text mt={2} fontWeight={"semibold"}>
              Powered by
            </Text>
          </VStack>
        </Center>
      </HStack>
      {/* <HStack
          w="100%"
          bgSize={"cover"}
          bgPosition={"-50px"}
          bgImage={isMobile ? background : "transparent"}
        >
          <Box
            bgImage={background}
            h="100%"
            bgSize={"cover"}
            w={{ base: "70%", sm: "0%", md: "50%", lg: "60%" }}
            display={isMobile ? "none" : "unset"}
          >
            <Center
              h="full"
              bgColor={"rgba(0, 0, 0, 0.4)"}
              alignItems={"flex-start"}
              pt={{ base: "36", "2xl": "52" }}
            >
              <VStack>
                <Text color={"white"} {...subTitleStyles}>
                  Welcome to
                </Text>
                <Image w="250px" src={connectLogo} alt="logo" />
              </VStack>
            </Center>
          </Box>
          <Center
            h="100%"
            w={{ base: "100%", sm: "100%", md: "50%", lg: "40%" }}
          >
            <VStack w="100%">
              {isMobile && (
                <VStack pb={"6"}>
                  <Text color={"white"} {...subTitleStyles}>
                    Welcome to
                  </Text>
                  <Image
                    w={{ base: "100px", sm: "80px", md: "80px", lg: "120px" }}
                    src={connectLogo}
                    alt="logo"
                  />
                </VStack>
              )}
              <VStack
                w="100%"
                bgColor={isMobile ? "rgba(255, 255, 255, 0.4)" : "transparent"}
                py="10"
              >
                <Box
                  borderRadius={8}
                  bg="white"
                  p={"8"}
                  boxShadow={"cardShadow"}
                >
                  <VStack px={{ base: 0, lg: 4 }}>
                    <Text {...subTitleStyles}>Log in</Text>
                    <form>
                      <HStack w="100%">
                        <LoginForm
                          control={control}
                          register={register}
                          errors={errors}
                        />
                      </HStack>
                    </form>
                  </VStack>
                </Box>
                <Text mt={2} fontWeight={"semibold"}>
                  Powered by
                </Text>
                <Image w="240px" h="40px" src={BbLogo} />
              </VStack>
            </VStack>
          </Center>
        </HStack> */}
    </Flex>
  );
};

export default Login;
