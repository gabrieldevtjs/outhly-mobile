import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginType, SchemaLogin } from "../model/zod";
import { useMutation } from "@tanstack/react-query";
import { AuthServiceHttp } from "../../../../services/auth/http";
import { useAuthStore } from "../../../../common/stores/auth";
import { AuthStorage } from "../../../../infrastructure/storage/keychan/user";
import { notify } from "../../../../common/notify";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const UseLoginViewModel = () => {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginType>({
    resolver: zodResolver(SchemaLogin),
  });

  const { mutateAsync } = useMutation({
    mutationFn: (body: LoginType) => AuthServiceHttp.signIn.queryFn(body),
  });

  const onSubmit = async (body: LoginType) => {
    try {
      const response = await mutateAsync(body);
      const {
        data: { user, tokens },
      } = response;

      await AuthStorage.save(tokens.accessToken, tokens.refreshToken);
      useAuthStore.getState().setUser(user);

      notify("success", "Usuário logado com sucesso");
    } catch (error: any) {
      notify("error", undefined, error);
      console.error(error);
    }
  };

  return {
    control,
    errors,
    isSubmitting,
    showPassword,
    toggleShowPassword: () => setShowPassword((prev) => !prev),
    handleSubmit: handleSubmit(onSubmit),
    goToRegister: () => navigation.navigate("Register"),
  };
};

export { UseLoginViewModel };
