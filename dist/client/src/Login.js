"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_hook_form_1 = require("react-hook-form");
const LoginForm_1 = __importDefault(require("../src/forms/LoginForm"));
const puthenPally_jpeg_1 = __importDefault(require("../src/assets/puthenPally.jpeg"));
const Final_Logo_Orthodox_jpg_1 = __importDefault(require("./assets/Final-Logo-Orthodox.jpg"));
// import { useLogin } from "./hooks/useAuthentication";
const subTitleStyles = {
    fontSize: { base: "lg", sm: "md", md: "lg", lg: "xl" },
    fontWeight: "semibold",
};
const Login = () => {
    // const { mutate } = useLogin()
    const { control, register, 
    // handleSubmit,
    formState: { errors }, } = (0, react_hook_form_1.useForm)();
    const [isMobile] = (0, react_1.useMediaQuery)("(max-width: 425px)");
    return (<react_1.Flex width={"100vw"} height={"100vh"}>
        <react_1.HStack w="100%" bgSize={"cover"} bgPosition={"-50px"} bgImage={isMobile ? puthenPally_jpeg_1.default : "transparent"}>
            <react_1.Box bgImage={puthenPally_jpeg_1.default} h="100%" bgSize={"cover"} w={{ base: "70%", sm: "0%", md: "50%", lg: "60%" }} display={isMobile ? "none" : "unset"}>
            <react_1.Center h="full" bgColor={"rgba(0, 0, 0, 0.4)"} alignItems={"flex-start"} pt={{ base: "36", "2xl": "52" }}>
            </react_1.Center>
          </react_1.Box>
          <react_1.Center h="100%" w={{ base: "100%", sm: "100%", md: "50%", lg: "40%" }}>
              <react_1.VStack w="100%" bgColor={isMobile ? "rgba(255, 255, 255, 0.4)" : "transparent"} py="10">
                <react_1.Image w="240px" h="200px" src={Final_Logo_Orthodox_jpg_1.default}/>
                <react_1.Box borderRadius={8} bg="white" p={"8"} boxShadow={"cardShadow"}>
                  <react_1.VStack px={{ base: 0, lg: 4 }}>
                    <react_1.Text {...subTitleStyles}>Log in</react_1.Text>
                    <form>
                      <react_1.HStack w="100%">
                        <LoginForm_1.default control={control} register={register} errors={errors}/>
                      </react_1.HStack>
                    </form>
                  </react_1.VStack>
                </react_1.Box>
                <react_1.Text mt={2} fontWeight={"semibold"}>
                  Powered by
                </react_1.Text>             
            </react_1.VStack>
          </react_1.Center>
        </react_1.HStack>
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
      </react_1.Flex>);
};
exports.default = Login;
