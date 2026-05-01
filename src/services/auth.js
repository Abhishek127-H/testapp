export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const signupUser = (user) => {
  const users = getUsers();

  const exists = users.find(
    (item) => item.email === user.email
  );

  if (exists) {
    return { success: false, message: "User already exists" };
  }

  users.push(user);
  saveUsers(users);

  return { success: true };
};

export const loginUser = (email, password) => {
  const users = getUsers();

  const found = users.find(
    (item) =>
      item.email === email &&
      item.password === password
  );

  if (found) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", found.name);
    return { success: true };
  }

  return { success: false };
};

export const logoutUser = () => {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
};