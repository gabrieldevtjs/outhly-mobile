import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterType, SchemaRegister } from "../model/zod";


export function useRegisterViewModel() {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterType>({
    resolver: zodResolver(SchemaRegister),
  });

  async function onSubmit(data: RegisterType) {
    try {
      // await authStore.signUp(data)
      console.log(data);
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  }

  return {
    control,
    errors,
    isSubmitting,
    showPassword,
    toggleShowPassword: () => setShowPassword((prev) => !prev),
    handleSubmit: handleSubmit(onSubmit),
    goToLogin: () => navigation.navigate("Login"),
  };
}