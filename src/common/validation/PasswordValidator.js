export const passwordValidator = (password) => {
  if (!password.trim()) return "Password can't be empty.";
  if (password.length < 5)
    return "Password must be at least 5 characters long.";
  return "";
};
