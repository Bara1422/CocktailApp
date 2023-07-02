export default function DrinksLoading() {
  return (
    <div className=' bg-slate-900 px-4 py-20 container max-w-6xl mx-auto h-[400px] w-[400px] min-h-[400px] min-w-[400px]'>
      <div className='flex justify-between md:px-4 py-4 md:flex-row flex-col gap-4 h-[400px] w-[400px] min-h-[400px] min-w-[400px]'>
        <div className='h-[400px] w-[400px] min-h-[400px] min-w-[400px]'>
          <div className='text-center text-5xl py-4 animate-pulse rounded-md bg-slate-800/60'></div>
          <div className='min-h-[400px] min-w-[400px] h-[400px] w-[400px]'></div>
        </div>
      </div>
    </div>
  )
}
