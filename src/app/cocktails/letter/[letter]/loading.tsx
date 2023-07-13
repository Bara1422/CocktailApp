export default function LettersCocktailsLoading() {
  return (
    <div className='flex flex-col items-center w-2/3 p-4 py-24 mx-auto'>
      <h2 className='pb-20 text-5xl'>Cocktails found:</h2>
      <div className='flex flex-wrap justify-center gap-20'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className='flex flex-col w-[200px] h-[200px] text-slate-400 hover:text-slate-100 animate-pulse rounded-md bg-slate-800/60'
          ></div>
        ))}
      </div>
    </div>
  )
}
