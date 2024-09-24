async function signup(req, res) {
  res.status(200).json({ message: "Sign up route" });
}

async function login(req, res) {
  res.status(200).json({ message: "Login route" });
}

async function logout(req, res) {
  res.status(200).json({ message: "Logout route" });
}

export { signup, login, logout };