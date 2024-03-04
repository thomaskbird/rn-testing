import { StyleSheet } from "react-native";

const base: { fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined} = {
  fontWeight: '800',
};

const stylesTypo = StyleSheet.create({
  h1: {
    ...base,
    fontSize: 32,
  },
  h2: {
    ...base,
    fontSize: 24,
  },
  h3: {
    ...base,
    fontSize: 18,
  },
  body1: {
    ...base,
    fontSize: 22,
  },
  button: {
    ...base,
    fontSize: 18,
  },
});

export default stylesTypo;
