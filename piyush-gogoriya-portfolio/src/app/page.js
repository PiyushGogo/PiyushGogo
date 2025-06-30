import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="flex flex-col items-center justify-between w-full flex-1 text-center">
        <h1 className="text-4xl font-bold mb-4">Piyush Gogoriya</h1>
        <p className="text-lg mb-8">
          Welcome to my portfolio! I am a software developer with a passion for
          creating innovative solutions. Explore my projects and get to know me
          better.
        </p>
        <Image
          src="/profile.jpg"
          alt="Piyush Gogoriya"
          width={150}
          height={150}
          className="rounded-full mb-8"
        />
        <a
          href="https://github.com/piyushgogoriya"
          className="text-blue-500 hover:underline"
        >
          View my GitHub
        </a>
      </main>
    </div>
  );
}
