"use client";
import AccordionUI from "@/app/components/accordion";
import ProgressBar from "@/app/components/progressBar";

export default function Home() {
  return (
    <main className="bg-white max-w-xl mx-auto p-2 my-8 rounded-md">
      <div className="p-6">
        <h1 className="text-customGrey-300 text-2xl font-bold mb-4">
          Lodgify Grouped Tasks
        </h1>
        <ProgressBar />
      </div>
      <AccordionUI />
    </main>
  );
}
