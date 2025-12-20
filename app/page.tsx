import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            ShaheenStore
          </h1>
          <p> Clothing, tech, college, and neuroscience-inspired merchandise — designed for students, researchers, and creators.

          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
  className="flex h-12 w-[160px] items-center justify-center rounded-full bg-black text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
  href="#"
>
  Shop Now
</a>

        </div>
      </main>
    </div>
  );
}
