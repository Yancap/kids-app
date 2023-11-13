import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12
  },
  containerRegister: {
    gap: 16,
    maxWidth: "100%",
    marginBottom: 32
  },
  formControl: {
    flexDirection: "row",
    gap: 8,
    maxWidth: "100%",
  },
  title: {
    fontSize: 36,
    color: "#846955",
    fontWeight: "700",
    marginBottom: 28,
    textAlign: 'center',
  },
  input: {
    height: 32,
    borderWidth: 1,
    padding: 6,
    borderRadius: 8
  },
  inputControl: {
    flexDirection: "column",
    gap: 4,
    flexGrow: 1,
    flexShrink: 1
  },
  label: {
    fontSize: 22,
    color: "#846955"
  },
  register: {
    fontSize: 24,
    color: "#846955",
    marginTop: 22,
    textAlign: 'center',
  },
  photo: {
    aspectRatio: "1/1",
    maxWidth: "100%",
    height: "auto"
  }
})

