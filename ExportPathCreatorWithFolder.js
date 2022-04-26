/*
 * node ExportPathCreatorWithFolder.js komutu terminalde
 * çalıştırıldığında klasördeki tüm jsx | tsx | ts | js dosyaları için export işleminin
 * yapıldığı bir index.ts dosyası oluşturur.
 * */

/* eslint-disable unicorn/no-empty-file */


const testFolder = '../components/icons';
const fs = require('fs');
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
      var a = file.split(".")[0];
      console.log(`export {default as Svg${a}} from './${file}'`);
      fs.writeFileSync("index.ts", `'${a}' | `, {
      encoding: "utf8",
      flag: "a+",
      mode: 0o666
    });
  });
});

