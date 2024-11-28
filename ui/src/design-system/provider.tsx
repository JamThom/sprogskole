import { ChakraProvider } from "@chakra-ui/react";
import config from "./style-config";
import { PropsWithChildren } from "react";
import { Toaster } from "./components/toaster";

const DesignSystemProvider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider value={config}>
      <Toaster />
      {children}
    </ChakraProvider>
  );
};

export default DesignSystemProvider;
