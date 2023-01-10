export const CommonValidator = (text) => {
  const re = /\S+@\S+\.\S+/;
  if (!text) return "Can't be empty.";
  return "";
};
