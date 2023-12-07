import { VStack } from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

export const SignUp = () => {
  return (
    <VStack>
      SignUp
      <FormControl>
        <FormLabel>User Namme</FormLabel>
        <Input type="text" />
        <br />
        <br />
        <FormLabel>Avater</FormLabel>
        <Input type="text" />
        <br />
        <br />
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <br />

        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <br />
      </FormControl>
    </VStack>
  );
};
