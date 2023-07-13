import ButtonBack from '@/components/ButtonBack'

export default function DrinksLoading() {
  return (
    <main className='w-full pt-20'>
      <div className='container flex flex-col gap-5 mx-auto max-w-7xl'>
        <div className='container w-full px-4 bg-slate-900'>
          <div className='flex flex-col justify-between gap-4 py-4 border-b md:px-4 border-slate-700 md:flex-row'>
            <div>
              <div className='py-4 text-5xl text-center animate-pulse bg-slate-800/60'>
                <div className='min-h-[400px] min-w-[400px] h-[400px] w-[400px] animate-pulse bg-slate-800/60' />
              </div>
            </div>

            <div className='flex flex-col self-end md:w-1/2 '>
              <h5 className='mb-1 text-xl font-semibold'>Ingredients:</h5>
              <div className='flex flex-col w-full h-6 gap-1 pb-3 mb-3 animate-pulse bg-slate-800/60' />

              <h5 className='mb-1 text-xl font-semibold border-t border-slate-700'>
                Instructions:
              </h5>
              <div className='flex flex-col w-full h-6 gap-1 pb-3 mb-3 animate-pulse bg-slate-800/60' />

              <div className='flex flex-col justify-between border-t md:flex-row border-slate-700'>
                <div className='w-full pb-3 mb-3 border-b md:w-1/2 border-slate-700 md:border-none md:pb-0 sm:mb-0'>
                  <h5 className='mb-1 text-xl font-semibold'>Glass</h5>
                  <div className='flex flex-col gap-1 pb-3 mb-3 animate-pulse bg-slate-800/60 w-[100px] h-6' />
                </div>

                <div className='text-start md:w-1/2'>
                  <h5 className='mb-1 text-xl font-semibold'>Tags</h5>
                  <div className='flex flex-col gap-1 pb-3 mb-3 animate-pulse bg-slate-800/60 w-[100px] h-6' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonBack />
      </div>
    </main>
  )
}
