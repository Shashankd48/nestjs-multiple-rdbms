import { randomBytes } from 'crypto';
import { extname } from 'path';

const allowedExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  //   '.pdf',
  //   '.doc',
  //   '.docx',
  //   '.xls',
  //   '.xlsx',
  '.ico',
];

// export function customFilename(
//   file: { originalname: string },
//   callback: (arg0: Error | null, arg1: string | undefined) => void,
// ) {
//   const randomName = randomBytes(8).toString('hex');
//   const fileExtName = extname(file.originalname);
//   if (allowedExtensions.includes(fileExtName.toLowerCase())) {
//     callback(
//       null,
//       `${randomName}.${convertToSlug(
//         file.originalname.split('.')[0],
//       )}${fileExtName}`,
//     );
//   } else {
//     callback(new Error('Invalid file type'), undefined); // Provide both arguments to callback
//   }
// }

export function customFilename(req: any, file: any, callback: any) {
  const randomName = randomBytes(8).toString('hex');
  const fileExtName = extname(file.originalname);
  if (allowedExtensions.includes(fileExtName.toLowerCase())) {
    callback(
      null,
      `${randomName}.${convertToSlug(
        file.originalname.split('.')[0],
      )}${fileExtName}`,
    );
  } else {
    callback(new Error('Invalid file type'));
  }
}

function convertToSlug(inputString: string) {
  // Convert the string to lowercase
  const lowerCaseString = inputString.toLowerCase();

  // Replace spaces and special characters (except '_' and '-') with '-'
  const slug = lowerCaseString.replace(/[^\w-]/g, '-');

  return slug;
}
