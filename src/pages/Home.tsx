import { useContext, useEffect, useState } from "react";
import ChooseTargetLocales from "../components/ChooseTargetLocales";
import FileHandler from "../components/FileHandler";
import FileList from "../components/FileList";
import { IFile } from "../components";
import { v4 as uuidv4 } from 'uuid';
import GenerateBackground from "../components/GenerateBackground";
import TopShape from "../components/TopShape";
import FirebaseContext from '../context/FirebaseContext';
import { collection, doc } from "firebase/firestore";

export default function Home({}) {

   const { db } = useContext(FirebaseContext);
   const [areFilesReady, setAreFilesReady ] = useState(false);
   const [uploadedFiles, setUploadedFiles] = useState<IFile[]>([]);
   const [base64encodedFiles, setBase64encodedFiles] = useState();
   const [loading, setLoading] = useState(false);

   function onFilesSelect(metaFiles: FileList){
      let newFiles: IFile[] = [];
      for (const file of metaFiles) {
         let uuid = uuidv4();
         let newFile = { id: uuid, name: file.name, size: file.size };
         newFiles = [...newFiles, newFile];
      }

      setUploadedFiles([
            ...uploadedFiles,
            ...newFiles
         ]
      );
   }

   function removeFile(id: string){
      let newFiles = uploadedFiles.filter(file => file.id !== id);
      setUploadedFiles(newFiles);
   }  


   return (
      <div className="bg-gray-900">    
         <TopShape />
         <div className="min-h-screen w-full flex flex-col bg-white overflow-hidden">
            <div className="flex self-center mt-36 mb-auto z-2">
               <GenerateBackground />
               <p className="flex flex-row select-none font-mono font-extrabold text-5xl text-white z-10 self-center">
                  Trans<p className="text-blue-800 filter mix-blend-normal bg-clip-text">Loc</p> JS
               </p>
               <div className="absolute top-16 mt-10 h-32 w-72 px-5 transform -rotate-45 rounded-full filter blur-lg opacity-60 bg-gradient-to-bl from-teal-400  to-teal-800 z-2 mix-blend-normal">Alo!</div>
               <div className="absolute top-16 mt-10 h-32 w-72 px-5 transform rotate-45 rounded-full filter blur-lg opacity-70 bg-gradient-to-bl from-cyan-400  to-cyan-800 z-2 mix-blend-normal">Alo!</div>
               <div className="absolute top-16 mt-10 -ml-10 h-32 w-96 transform -rotate-6 rounded-full filter blur-lg opacity-80 bg-gradient-to-bl from-blue-400  to-blue-800 z-2 mix-blend-normal">Alo!</div>
            </div>
               <div className="flex relative w-full bg-gradient-to-bl bg-[#0E99C0] h-72 mt-auto items-center justify-center">
                  {
                     !areFilesReady && 
                        <>
                           <FileHandler 
                              setLoading={setLoading}
                              uploadedFiles={uploadedFiles}
                              setEncodedFiles={setBase64encodedFiles}
                              onFilesSelect={onFilesSelect}
                           />                  
                           <FileList
                              onCancel={removeFile}
                              loading={loading}
                              list={uploadedFiles}
                           />
                        </>
                  }

                  {
                     (areFilesReady && 
                        uploadedFiles && 
                           base64encodedFiles) && 
                        <ChooseTargetLocales 
                           /> 
                  }
               </div>
         </div>
      </div>   
   )
}