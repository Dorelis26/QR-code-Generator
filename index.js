import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
.prompt([
    {message: "type your URL: ",name : "URL"}
])
    /* Pass your questions in here */
  .then((answers) => {
    const url =answers.URL;
    const qr_svg = qr.image(url,);
    qr_svg.pipe(fs.createWriteStream('QR_image.png'));
    fs.writeFile('url.txt',url,(err)=>
    {if (err) throw err;
        console.log('this file has been saved..')
    
    });
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });