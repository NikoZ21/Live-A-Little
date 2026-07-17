import { StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useOverlayStyle } from "@/hooks/useOverlayStyle";

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

  const handleAccept = () => {
    onAccept();
    console.log("accept");
  };

  const handlePass = () => {
    onPass();
    console.log("pass");
  };

  const pan = Gesture.Pan()
    .onChange((e) => {
      translateX.value += e.changeX;
      translateY.value += e.changeY;
    })
    .onEnd(() => {
      if (translateX.value > SWIPE_THRESHOLD) {
        // fly off right -> accept
        translateX.value = withTiming(FLY_OFF, { duration: 300 }, () => {
          scheduleOnRN(handleAccept);
        });
      } else if (translateX.value < -SWIPE_THRESHOLD) {
        // fly off left -> pass
        translateX.value = withTiming(-FLY_OFF, { duration: 300 }, () => {
          scheduleOnRN(handlePass);
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

  const acceptOverlayStyle = useOverlayStyle({
    translateX: translateX,
    threshold: SWIPE_THRESHOLD,
  });

  const skipOverlayStyle = useOverlayStyle({
    translateX: translateX,
    threshold: -SWIPE_THRESHOLD,
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        {children}

        <Animated.View
          style={[styles.overlay, styles.acceptOverlay, acceptOverlayStyle]}
          pointerEvents="none"
        >
          <Text style={styles.overlayText}>ACCEPTED</Text>
        </Animated.View>

        <Animated.View
          style={[styles.overlay, styles.skipOverlay, skipOverlayStyle]}
          pointerEvents="none"
        >
          <Text style={styles.overlayText}>SKIPPED</Text>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 30,
    marginTop: 4,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
  },
  acceptOverlay: {
    backgroundColor: "#2ECC71",
  },
  skipOverlay: {
    backgroundColor: "#E5383B",
  },
  overlayText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: 1,
  },
});
