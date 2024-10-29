import { Inter } from 'next/font/google'
import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col">
        <div>
          <h1 className='text-center'>Montomegry Tech</h1>
        </div>
        <div>

          <Image src="/img/groupCircle.png" alt="Montomegry Tech" width={1000} height={1000} />
        </div>
      </main>
    </div>
  );
}
