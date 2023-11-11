import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    width: "100%",
    height: "100%",
    paddingHorizontal: 12,
    paddingVertical: 16,
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
    gap: 4
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
  }
})

