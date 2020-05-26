// 1) С помощью module fs необходимо:
//
// создать папку, и 3 файла с любым именем ( предусмотреть папка создавалась если не существует)
// Реалиовать удаление всех файлов в текущей папке( метод unlink)
// cоздать текстовый файл с любым содержимым и считать содержимое и перенести в любой другой файл.

const fs = require('fs');
const util = require('util');
const dir = 'HW21';
const unlink = util.promisify(fs.unlink);
const readDir = util.promisify(fs.readdir);
const mkdirAsync = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

// Creation of folder and 3 files
const filesArr = ['file1.txt', 'file2.txt', 'file3.txt'];
async function createDirAndFiles() {
   if (!fs.existsSync(dir)) {
       await mkdirAsync(dir);
       console.log('Directory is created');
   }

    const newFiles = filesArr.map((el) => {
        writeFile(`${dir}/${el}`, '');
    });
   await Promise.all(newFiles);
   console.log('Files created successfully');
}
createDirAndFiles();

// Rewrite data from file to another
async function reWrite() {
    await writeFile(`${dir}/testFile.txt`, 'Отсыпь кода на забивку');
    const data = String(fs.readFileSync(`${dir}/testFile.txt`));
    const arrayOfFiles = await readDir(dir);
    writeFile(`${dir}/${arrayOfFiles[0]}`, data);
    console.log('File was successfully rewritten');
}
reWrite();

// // File deletion implementation
// async function deleteFiles() {
//     const files = await readDir(dir);
//     const unlinkPromise = files.map((file) => unlink(`${dir}/${file}`));
//     await Promise.all(unlinkPromise);
//     console.log('Files were deleted');
// }
// deleteFiles();


