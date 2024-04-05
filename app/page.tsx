"use client";

import Image from "next/image";
import Navigation from "./components/Navigation";
import Uploader from "./components/Uploader";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState<string | null>(null);

  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
              {/* <UserButton afterSignOutUrl="/" /> */}
            </div>
            <Uploader onUpload={setUrl} />
            {url && (
              <p>
                Uploaded file URL:{" "}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
} // Home
