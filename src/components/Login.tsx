"use client";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-200/50 rounded-xl p-10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[60px]">
            <Image src="/favicon.ico" alt="image" width={60} height={60} />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign in to your account!
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
          Don&apos;t have any account?&nbsp;
          <Link
            href="/login"
            className="mt-2 text-center text-base text-gray-600"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
