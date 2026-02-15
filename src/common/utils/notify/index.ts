import Toast from "react-native-toast-message"
import { AxiosError } from "axios"

export const notify = (
  type: "success" | "error",
  message?: string,
  error?: any
) => {
  Toast.hide()

  const TIME_DURATION_TOAST = 5000

  if (error instanceof AxiosError) {
    const errorMessage =
      error.response?.data?.message ?? message ?? "Erro ao processar requisição"
    Toast.show({
      type: "error",
      text1: "Erro",
      text2: errorMessage,
      visibilityTime: TIME_DURATION_TOAST,
    })
  } else {
    Toast.show({
      type,
      text1: type === "success" ? "Sucesso" : "Erro",
      text2: message ?? "Operação realizada",
      visibilityTime: TIME_DURATION_TOAST,
    })
  }
}
