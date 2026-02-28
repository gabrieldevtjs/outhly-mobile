import * as Keychain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import uuid from "react-native-uuid";
import { BiometricStorage } from "../../infrastructure/storage/keychan/biometric";
import { AuthServiceBiometric } from "../../services/auth/biometric";

const setupBiometrics = async () => {
  const hasHardware = await Keychain.canImplyAuthentication({
    authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
  });

  if (!hasHardware) return;

  const biometryRegistred = await BiometricStorage.getBiometricRegistred();

  if (!biometryRegistred) return;

  const alreadyRegistered = await BiometricStorage.getDeviceToken();

  if (alreadyRegistered) return;

  const deviceId = await DeviceInfo.getUniqueId();
  const deviceToken = uuid.v4() as string;

  try {
    await BiometricStorage.saveDeviceToken(deviceToken);
    // await AuthServiceBiometric.registerDevice.queryFn({
    //   deviceId,
    //   deviceToken,
    // });
  } catch {
    return;
  }
};

const authenticateWithBiometrics = async (): Promise<string | false> => {
  try {
    const deviceToken = await BiometricStorage.getDeviceToken();

    if (!deviceToken) return false;

    return deviceToken;
  } catch {
    return false;
  }
};

export { setupBiometrics, authenticateWithBiometrics };
