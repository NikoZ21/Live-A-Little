import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

const SWIPE_THRESHOLD = 105; // from your design tokens
const FLY_OFF = 520;

export interface SwipeableProps {
  onAccept: () => void;
  onPass: () => void;
  children: React.ReactNode;
}

export default function Swipeable({
  onAccept,
  onPass,
  children,
}: SwipeableProps) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange((e) => {
      translateX.value += e.changeX;
      translateY.value += e.changeY;
    })
    .onEnd(() => {
      if (translateX.value > SWIPE_THRESHOLD) {
        // fly off right -> accept
        translateX.value = withTiming(FLY_OFF, { duration: 300 }, () => {
          scheduleOnRN(() => {
            onAccept();
          });
        });
      } else if (translateX.value < -SWIPE_THRESHOLD) {
        // fly off left -> pass
        translateX.value = withTiming(-FLY_OFF, { duration: 300 }, () => {
          scheduleOnRN(() => {
            onPass();
          });
        });
      } else {
        // snap back
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${translateX.value * 0.055}deg` }, // your design spec
    ],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
