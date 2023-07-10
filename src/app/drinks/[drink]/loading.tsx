import ButtonBack from '@/components/ButtonBack'

export default function DrinksLoading() {
  return (
    <main className='pt-20 w-full'>
      <div className='container mx-auto max-w-7xl flex flex-col gap-5'>
        <div className='w-full bg-slate-900 px-4 py-20 container max-w-7xl mx-auto'>
          <div className='flex justify-between md:px-4 border-b border-slate-700 py-4 md:flex-row flex-col gap-4'>
            <div>
              <div className='text-center text-5xl py-4 animate-pulse bg-slate-800/60'>
                <div className='min-h-[400px] min-w-[400px] h-[400px] w-[400px] animate-pulse bg-slate-800/60' />
              </div>
            </div>

            <div className='flex flex-col md:w-1/2 self-end '>
              <h5 className='text-xl font-semibold mb-1'>Ingredients:</h5>
              <div className='flex flex-col gap-1 pb-3 mb-3 animate-pulse bg-slate-800/60 w-full h-6' />

              <h5 className='text-xl font-semibold mb-1 border-t border-slate-700'>
                Instructions:
              </h5>
              <div className='flex flex-col gap-1 pb-3 mb-3 animate-pulse bg-slate-800/60 w-full h-6' />

              <div className='flex justify-between md:flex-row flex-col border-t border-slate-700'>
                <div className='md:w-1/2 border-b border-slate-700 md:border-none md:pb-0 sm:mb-0 w-full pb-3 mb-3'>
                  <h5 className='text-xl font-semibold mb-1'>Glass</h5>
                  <div className='flex flex-col gap-1 pb-3 mb-3 animate-pulse bg-slate-800/60 w-[100px] h-6' />
                </div>

                <div className='text-start md:w-1/2'>
                  <h5 className='text-xl font-semibold mb-1'>Tags</h5>
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
