export const toErrorCode = (value: string) => {
  if (value.length <= 0 || typeof value != 'string') return null;
  // Replace spaces with underscores
  let sanitizedValue = value.trim().replaceAll(' ', '_');

  // Remove special characters using a regular expression
  sanitizedValue = sanitizedValue.replace(/[^\w\s]/gi, '');

  // Convert to lowercase
  return sanitizedValue.toLowerCase();
};
