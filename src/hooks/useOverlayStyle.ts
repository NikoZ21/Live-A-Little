// hooks/useOverlayStyle.js
import {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface params {
  translateX: SharedValue<number>;
  threshold: number;
}

export function useOverlayStyle({ translateX, threshold }: params) {
  return useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [0, threshold],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));
}
