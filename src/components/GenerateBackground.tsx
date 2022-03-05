const LANGUAGES = [
   "Ciao",
   "Konnichiwa",
   "Namaste",
   "Hallo",
   "Hola",
   "Cześć",
   "Ni Hao",
   "Marhabaan",
   "Zdravstvuyte",
   "Jambo",
   "Bonjour",
   "Hola",
   "Salaam",
   "Ahn-Young-Ha-Se-Yo"
]

export default function GenerateBackground({}) {
   let str1 = `bg-blue-700 text-white absolute rotate-[10deg] top-[-90px] left-[30px] select-none text-6xl filter bg-clip-text mix-blend-overlay blur-sm animation-delay-100 z-30 animate-word`;
   let str2 = `bg-blue-700 text-white absolute rotate-[-20deg] top-[50px] left-[130px] select-none text-4xl filter bg-clip-text mix-blend-overlay blur-sm animation-delay-200 z-30 animate-word1`;
   let str3 = `bg-blue-700 text-white absolute rotate-[30deg] top-[-80px] left-[150px] select-none text-5xl filter bg-clip-text mix-blend-overlay blur-sm animation-delay-600 z-30 animate-word2`;
   let str4 = `bg-blue-700 text-white absolute rotate-[40deg] top-[90px] left-[15px] select-none text-4xl filter bg-clip-text mix-blend-overlay blur-sm animation-delay-400 z-30 animate-word3`;
   let str5 = `bg-blue-700 text-white absolute rotate-[45deg] top-[-20px] left-[140px] select-none text-5xl filter bg-clip-text mix-blend-overlay blur-sm animation-delay-500 z-30 animate-word4`;
   let str6 = `bg-blue-700 text-white absolute rotate-[-20deg] top-[0px] left-[-30px] select-none text-6xl filter bg-clip-text mix-blend-overlay blur-sm animation-delay-300 z-30 animate-word5`;
   
   let strings = [
      str1, 
      str2, 
      str3,
      str4,
      str5,
      str6,
   ]
   return (
      <div className="absolute">
         {LANGUAGES.slice(0, 6).map((language, i) => { 
            return (
               <p 
                  key={`${language}`} 
                  className={strings[i]}>
                     {language}
                  </p>
               )
         })}
      </div>
   )
}