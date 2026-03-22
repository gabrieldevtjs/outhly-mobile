import { View, StyleSheet, ScrollView } from "react-native";
import { HeaderBack } from "../../../../common/components/HeaderBack";
import { Card } from "@components/Card";
import { CardSenha } from "../components/card";
import { Fab } from "@components/Fab";
import { useTheme } from "@common/hooks/useTheme";
import { Theme } from "@common/theme";

const SenhaViewSection = () => {
  const { theme } = useTheme();
  const styles = makeStyles(theme.colors);

  const mockData = [
    { id: "teste1", icon: "", title: "Google", subtitle: "jose.gabriel@gmai.com" },
    { id: "teste2", icon: "", title: "Netflix", subtitle: "familia_gabriel" },
    { id: "teste3", icon: "", title: "Instagram", subtitle: "@jose_gabriel" },
    { id: "teste4", icon: "", title: "Spotify", subtitle: "jose.g_premium" },
    { id: "teste5", icon: "", title: "GitHub", subtitle: "gabriel-dev" },
  ];

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {mockData.map((item) => (
            <CardSenha
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </ScrollView>
      </View>
      <Fab />
    </>
  );
};

const makeStyles = (colors: Theme["colors"]) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 24,
      borderRadius: 40,
      gap: 16,
    },
  });

export { SenhaViewSection };
