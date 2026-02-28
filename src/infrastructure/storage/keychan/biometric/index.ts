import * as Keychain from "react-native-keychain";

const BiometricStorage = {
  saveDeviceToken: async (deviceToken: string): Promise<void> => {
    await Keychain.setGenericPassword("device", deviceToken, {
      service: process.env.EXPO_BUNDLER_NAME,
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
  },

  getDeviceToken: async (): Promise<string | null> => {
    const credentials = await Keychain.getGenericPassword({
      service: process.env.EXPO_BUNDLER_NAME,
    });
    return credentials ? credentials.password : null;
  },

  getBiometricRegistred: async (): Promise<Keychain.BIOMETRY_TYPE | null> => {
    const biometryRegistred = await Keychain.getSupportedBiometryType();

    if (!biometryRegistred) return null;

    return biometryRegistred;
  },

  clear: async (): Promise<void> => {
    await Keychain.resetGenericPassword({
      service: process.env.EXPO_BUNDLER_NAME,
    });
  },
};

export { BiometricStorage };
