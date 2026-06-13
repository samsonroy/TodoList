import { useCallback } from 'react';
import { Alert } from 'react-native';
import { TextConstants } from '../constants/text';
import * as LocalAuthentication from 'expo-local-authentication';

type AuthenticationOptions = {
  promptMessage: string;
  fallbackLabel?: string;
};

// This is custom hook that provides functions for handling local authentication using biometrics (like Face ID or Touch ID) in a React Native app.
// It abstracts away the logic for checking hardware availability, enrollment, and performing authentication, making it easier to use these features across the app.
const useLocalAuthentication = () => {
  const showBiometricUnavailableAlert = useCallback(() => {
    Alert.alert(
      TextConstants.BIOMETRIC_UNAVAILABLE_TITLE,
      TextConstants.BIOMETRIC_UNAVAILABLE_MESSAGE,
    );
  }, []);

  const authenticate = useCallback(
    async (options: AuthenticationOptions) => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();

      // If the device doesn't support biometric authentication, we show an alert and return false
      if (!hasHardware) {
        showBiometricUnavailableAlert();
        return false;
      }

      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      // If the device doesn't have any enrolled biometrics, we show an alert and return false
      if (!isEnrolled) {
        showBiometricUnavailableAlert();
        return false;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: options.promptMessage,
        fallbackLabel:
          options.fallbackLabel ?? TextConstants.DEFAULT_FALLBACK_LABEL,
        disableDeviceFallback: false,
      });

      return result.success;
    },
    [showBiometricUnavailableAlert],
  );

  const authenticateAndRun = useCallback(
    async (
      action: () => void,
      options: AuthenticationOptions,
    ): Promise<boolean> => {
      const isAuthenticated = await authenticate(options);

      if (!isAuthenticated) {
        return false;
      }

      action();

      return true;
    },
    [authenticate],
  );

  return { authenticate, authenticateAndRun };
};

export default useLocalAuthentication;
