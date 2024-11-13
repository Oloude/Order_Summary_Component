import Image from './components/Image'
import Order from './components/Order'

export default function App() {
  return (
    <main className='font-Red_Hat_Display min-h-screen bg-paleBlue bg-bgMobile lg:bg-bgDesktop p-6 bg-no-repeat bg-auto flex justify-center items-center '>
      <section className='max-w-xl mx-auto rounded-xl bg-white'>
        <Image/>
        <Order/>
      </section>
    </main>
  )
}