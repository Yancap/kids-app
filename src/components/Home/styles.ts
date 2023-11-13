import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12
  },
  menu: {
    height: "100%",
    backgroundColor: "#846955",
    width: "70%",
    position: "absolute",
    top: 0,
    left: 0,
    paddingVertical: 16,
    paddingHorizontal: 12
  },
  menuLink: {
    fontSize: 20,
    color: "#fff",
    paddingVertical: 4
  },
  menuLinkActive: {
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  menuBtn: {
    display: "flex",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  }
})

