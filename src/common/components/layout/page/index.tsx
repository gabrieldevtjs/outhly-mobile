// common/components/layout/page/index.tsx
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack, YStackProps } from "tamagui";

type PageProps = YStackProps;

const Page = ({ children, ...props }: PageProps) => {
  const insets = useSafeAreaInsets();

  return (
    <YStack flex={1} pt={insets.top} pb={insets.bottom} bg="$bg" {...props}>
      {children}
    </YStack>
  );
};

export default Page;
