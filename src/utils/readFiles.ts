async function readToB64(file: File) {
   return await new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onerror = error => reject(error);
      resolve(reader.readAsDataURL(file));
      reader.onload = (_) => {
         let res = reader.result;
         return resolve(res);
      }
      return reader.result;
   });
}

async function readFiles(files: FileList, callback: any){
   let allFiles: Promise<unknown>[] = [];
   for await (const file of files){
      allFiles = [...allFiles, readToB64(file)];
   } 
   const filesSettled = await Promise.all(allFiles).then(d => d);
   return callback(filesSettled);
}


export {
   readFiles
};