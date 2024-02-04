import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-row h-screen justify-center items-center space-x-3">
      <h1>hello next</h1>
      <Image src='/favicon.ico' width={50} height={50} alt="image"/>
    </div>
  );
}
