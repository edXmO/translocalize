import File from "./File";
import Loader from './Loader';

export default function FileList({ list, loading, onCancel }: { list: {id: string, name: string, size: number}[], loading: boolean, onCancel: (id: string) => void }) {
   return (
      <div className={`${list.length === 1 ? 'flex flex-row self-center' : 'grid grid-cols-2 w-2/3'} mt-10 z-20 max-h-48 overflow-x-hidden`}>
         {      
            loading ? 
               <Loader /> 
               :
               Boolean(list.length) ? 
               (
                  <>
                        {list.map((file, i) => {
                           return <File 
                                 key={`${file.name}-${file.size}-${i}`}
                                 id={file.id}
                                 name={file.name}
                                 size={file.size}
                                 onCancel={() => onCancel(file.id)}
                                 />
                        })}
                  </>
               ) 
            : 
            null
         }      
      </div>
   )
}