import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    width: "90%",
    paddingTop: 16
  },
  containerRegister: {
    gap: 8,
    maxWidth: "100%",
    marginBottom: 16
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
    height: 28,
    borderWidth: 1,
    padding: 10,
    flexGrow: 1,
    borderRadius: 4
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
  photoInput: {
    aspectRatio: "1/1",
    maxWidth: "100%",
    height: "auto"
  },
  photo: {
    aspectRatio: "1/1",
    maxWidth: "100%",
    height: "auto"
  }
})

