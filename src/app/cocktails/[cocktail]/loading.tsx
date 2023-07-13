export default function CocktailLoading() {
  return (
    <div className='flex flex-col items-center w-2/3 p-4 py-24 mx-auto'>
      <h2 className='pb-20 text-5xl'>Cocktails found:</h2>
      <div className='md:gap-10 gap-5 grid grid-cols-[repeat(auto-fill,200px)] md:justify-between justify-around w-full'></div>
    </div>
  )
}
