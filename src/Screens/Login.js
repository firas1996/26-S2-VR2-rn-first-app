import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Login
      </Text>
      <View style={styles.card}>
        <View style={styles.inpV}>
          <Text style={styles.inpT}>Email</Text>
          <TextInput style={styles.inpI} />
        </View>
        <View style={styles.inpV}>
          <Text style={styles.inpT}>Password</Text>
          <TextInput style={styles.inpI} />
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnT}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  card: {
    backgroundColor: "rgba(152, 249, 252, 0.42)",
    width: "65%",
    borderRadius: 12,
    padding: 12,
  },
  inpV: {
    // backgroundColor: "yellow",
    marginBottom: 8,
  },
  inpI: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    height: 36,
    padding: 5,
    marginTop: 8,
  },
  btn: {
    backgroundColor: "blue",
    width: 80,
    padding: 5,
    alignItems: "center",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 20,
  },
  btnT: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
