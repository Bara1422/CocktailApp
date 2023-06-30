export default function LettersCocktailsLoading() {
  return (
    <div className='flex flex-col items-center py-24  w-2/3 mx-auto p-4'>
      <h2 className='text-5xl pb-20'>Cocktails found:</h2>
      <div className='flex flex-wrap gap-20 justify-center'>
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
