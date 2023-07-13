export default function LettersCocktailsLoading() {
  return (
    <div className='flex flex-col items-center w-full p-4 py-24 mx-auto max-w-7xl'>
      <h2 className='pb-20 text-5xl'>Cocktails found:</h2>
      <div className='md:gap-10 gap-5 grid grid-cols-[repeat(auto-fill,200px)] md:justify-between justify-around w-full'>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className='flex flex-col w-[200px] h-[200px] text-slate-400 hover:text-slate-100 animate-pulse rounded-md bg-slate-800/60'
          ></div>
        ))}
      </div>
    </div>
  )
}
