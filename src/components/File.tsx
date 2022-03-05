type IFile = {
   id: string
   name: string
   size: number
   onCancel: (id : string) => void; 
}

export default function File({ id, name, size, onCancel }: IFile) {
   return (
      <div className="flex flex-row justify-between items-center w-96 pr-4 py-2 px-4 rounded-lg bg-slate-200 shadow-lg mb-4 place-self-center">
         <p>{name}</p>
         <p>{`${size / 1000}KB`}</p>
         <button
            className="flex backdrop-filter items-center justify-center bg-red-500 h-8 w-12 text-white rounded-md " 
            onClick={() => onCancel(id)}>
               <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
         </button>
      </div>
   )
}