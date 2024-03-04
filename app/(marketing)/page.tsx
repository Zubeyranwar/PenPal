import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";


export default function Home() {
  return (
    <main className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className='flex flex-col items-center justify-center md:justify-start text-center flex-1 gap-y-8 px-6 pb-10'>
        <Heading />
        <Heroes />
      </div>
      <Footer />  
    </main>
  )
}
