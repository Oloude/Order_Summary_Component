 import musicIcon from '../assets/icon-music.svg'

function Price() {
  return (
    <div className='flex justify-between items-center bg-veryPaleBlue py-4 rounded-md px-4 mb-10'>
      <div className='flex items-center gap-3 '>
      <div className='bg-paleBlue w-10 h-10 rounded-full flex justify-center items-center'><img src={musicIcon} alt="music icon"   /></div>
      <div className='flex flex-col '>
        <p className='text-base font-bold text-darkBlue'>Annual Plan  </p>
        <p className='text-sm font-medium text-desaturatedBlue'>$59.99/year</p>
      </div>
      </div>
      <p className='text-sm font-medium text-brightBlue underline cursor-pointer hover:opacity-70'>Change</p>
    </div>
  )
}

export default Price