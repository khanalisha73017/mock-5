import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <VStack>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />

        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <Button onClick={handleSubmit}>Login</Button>
      </FormControl>
    </VStack>
  );
};
