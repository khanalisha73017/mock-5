import { Button, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/userReducer/action";

export const SignUp = () => {
  const [username, setusername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const obj = {
      username,
      avatar,
      email,
      password,
    };
    dispatch(registerUser(obj));
  };

  return (
    <VStack>
      <FormControl>
        <FormLabel>User Namme</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <br />
        <FormLabel>Avater</FormLabel>
        <Input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <br />
        <br />
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />

        <FormLabel>Password</FormLabel>
         <FormLabel>Password again</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <Button onClick={handleSubmit}>Register</Button>
      </FormControl>
    </VStack>
  );
};
