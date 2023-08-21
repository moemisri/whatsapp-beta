import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { Feather, FontAwesome } from "@expo/vector-icons";

const SignUpForm = (props) => {
  return (
    <>
      <Input label="First name" icon="user-o" iconPack={FontAwesome} />

      <Input label="Last name" icon="user-o" iconPack={FontAwesome} />

      <Input label="Email" icon="mail" iconPack={Feather} />

      <Input label="Password" icon="lock" iconPack={Feather} />

      <SubmitButton
        title="Sign up"
        onPress={() => console.log("Button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
