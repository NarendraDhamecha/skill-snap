export const generateUniqueSlug = (input = "") => {
  return input
    .toLowerCase() // Convert the string to lowercase
    .trim() // Remove whitespace from both ends of the string
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric characters except hyphens
};

export const removeSpaces = (input = "") => {
  return input?.trim()?.replace(/\s+/g, " ");
};
