import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap -mx-2 mt-32 gap-y-8">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2">
            <div className="relative text-center w-full flex justify-center items-center flex-wrap">
                <div className="w-full max-w-[100px]">
                <Image src="/favicon.ico" alt="image" width={100} height={100}/>
                </div>
                <div className="w-full">
                    <div className="font-bold text-3xl mb-4">
                        Next.js 13 Authentication with <span className="text-primary">Appwrite</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
