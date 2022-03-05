import { useEffect, useRef } from "react";
import { readFiles} from '../utils/readFiles';

type IFileInput = {
   value: any,
   onChange: (metaFiles: FileList) => void,
   setEncodedFiles: (files: any) => void
   setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FileInput(
   { 
      value, 
      onChange, 
      setLoading, 
      setEncodedFiles,
      ...rest
   } 
   : 
   IFileInput) {

   const inputRef = useRef<HTMLInputElement>(null);

   async function handleFileInputChange(evt: React.ChangeEvent<HTMLInputElement>){
      setLoading(true)
      const files = evt.target.files
      if(!files) return
      readFiles(files, setEncodedFiles)
      onChange(files);
      setLoading(false)
   }

   useEffect(() => {
      if(typeof value === 'object'){
         inputRef?.current?.value === "";
      } else if(inputRef.current) {
         inputRef.current.files = value;
      }
   }, [value])

   return (
      <div className="flex md:w-48 bg-transparent rounded-lg mb-4 md:mr-4">
         <label className="flex w-full filter  bg-gradient-to-b from-teal-400  to-blue-800 z-2 items-center h-8 w-22 pl-4 py-6 rounded-xl cursor-pointer shadow-md z-10">
            <p className="text-white text-left text-md z-20 font-medium">Select files</p>
            <input 
               {...rest} 
               accept="application/JSON"
               type="file"
               multiple
               style={{ display: "none" }}
               ref={inputRef}
               onChange={handleFileInputChange}
               />
         </label>
         
      </div>
   )
}