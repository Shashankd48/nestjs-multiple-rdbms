export function generateRandomCode(): number {
  const min = 100000; // Minimum 6-digit number
  const max = 999999; // Maximum 6-digit number

  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;

  // Convert the random code to a string
  return randomCode;
}
