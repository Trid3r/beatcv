import { useState } from "preact/hooks";

export default function NotFoundPage() {
  return (
    <div class={`flex flex-col min-h-screen bg-gray-900 text-white transition-colors duration-300 items-center justify-center`}>
      <div class="text-center">
        <h1 class="text-4xl font-bold">404</h1>
        <p class="text-2xl">Oops! The page doesn't exist</p>
        <a href="/" class="mt-6 block text-xl text-blue-500 underline">Go back to home</a>
      </div>
    </div>
  );
}
