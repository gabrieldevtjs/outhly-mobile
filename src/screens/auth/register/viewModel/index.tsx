import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterType, SchemaRegister } from "../model/zod";
import { AuthServiceHttp } from "../../../../api/auth/http";
import { AuthStorage } from "../../../../infrastructure/storage/keychan/user";
import { useAuthStore } from "../../../../common/stores/auth";
import { notify } from "../../../../common/notify";
import { setupBiometrics } from "@common/hooks/useBiometric";
import { BiometricStorage } from "../../../../infrastructure/storage/keychan/biometric";

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

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (body: RegisterType) => AuthServiceHttp.register.queryFn(body),
  });

  const onSubmit = async (body: RegisterType) => {
    try {
      const response = await mutateAsync(body);

      const {
        data: { user, tokens },
      } = response;

      await AuthStorage.save(tokens.accessToken, tokens.refreshToken);

      useAuthStore.getState().setUser(user);
      await BiometricStorage.clear();
      await setupBiometrics();
      notify("success", "Usuário criado com sucesso");
    } catch (error: any) {
      notify("success", error.message);
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
    goToLogin: () => navigation.navigate("Login"),
  };
}
