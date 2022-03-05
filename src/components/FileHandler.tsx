import { IFile } from '.'
import FileInput from './FileInput'

type IFileHandler= {
   uploadedFiles: IFile[],
   onFilesSelect: (metaFiles: FileList) => void
   setEncodedFiles: (files: any) => void
   setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FileHandler(
   { 
      uploadedFiles, 
      onFilesSelect, 
      setEncodedFiles,
      setLoading 
   }
   : 
   IFileHandler) {

   return (
      <>
         <div className="absolute -my-2 shadow-md self-center top-0 -mt-6 rounded-2xl z-30 overflow-show">
            <FileInput 
               value={uploadedFiles}
               onChange={onFilesSelect}
               setEncodedFiles={setEncodedFiles}
               setLoading={setLoading}
               />
         </div>
      </>
   )
}