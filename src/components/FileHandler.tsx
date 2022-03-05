import { IFile } from '.'
import FileInput from './FileInput'
import SelectLanguage from './SelectLanguage'

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
         <div className="absolute flex md:flex-row flex-col -my-2 self-center top-0 -mt-10 rounded-2xl z-30 overflow-show">
            <FileInput 
               value={uploadedFiles}
               onChange={onFilesSelect}
               setEncodedFiles={setEncodedFiles}
               setLoading={setLoading}
               />
            <SelectLanguage />
         </div>
      </>
   )
}