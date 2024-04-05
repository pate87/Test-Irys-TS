"use client";

import getWebIrys from "../utils/getIrys";
import { useState, useEffect } from "react";
import GetWeaveDB from "../utils/getWeaveDB";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Inbox, Loader2 } from "lucide-react";

export const Uploader: React.FC<UploaderConfigProps> = () => {
  // const [connectedAddress, setConnectedAddress] = useState<string>();
  const [uploading, setUploading] = useState<boolean>(false);
  const [files, setFiles] = useState<FileWrapper[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newUploadedFiles: FileWrapper[] = files.map((file) => ({
        file,
        isUploaded: false,
        id: "",
        previewURL: "",
        loadingReceipt: false,
      }));
      setFiles(newUploadedFiles);
    }
  };

  const handleUpload = async () => {
    const irys = await getWebIrys(); // Assuming this function returns the Irys instance
    console.log("irys", irys);

    const weavedb = await GetWeaveDB();
    console.log("weavedb", weavedb);

    // Upload the files
    for (const fileWrapper of files) {
      const tags = [{ name: "Content-Type", value: fileWrapper.file.type }];

      try {
        setUploading(true);
        const receipt = await irys.uploadFile(fileWrapper.file, { tags });
        console.log(`Data uploaded ==> https://arweave.net/${receipt.id}`);
        // Update the fileWrapper with the receipt ID and mark as uploaded
        fileWrapper.id = receipt.id;
        fileWrapper.isUploaded = true;
        fileWrapper.previewURL = `https://arweave.net/${receipt.id}`;

        // set DB entry
        await weavedb.set(
          { id: 2, url: `https://arweave.net/${receipt.id}` },
          "file",
          "2"
        );
      } catch (e) {
        console.log("Error uploading data ", e);
      } finally {
        setUploading(false);
      }
    }
    // Update the state with the new fileWrapper objects
    setFiles([...files]);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Card className={cn("w-[480px]")}>
        <CardHeader>
          <CardTitle>Upload File</CardTitle>
          <CardDescription>Upload your files to Arweave</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-between">
          <Label htmlFor="file">PDF File</Label>
          <Input type="file" multiple onChange={handleFileUpload} name="file" />
          {uploading ? (
            <>
              {/* loading state */}
              <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
              <p className="mt-2 text-sm text-slate-400">
                Spilling Tea to GPT...
              </p>
            </>
          ) : (
            <>
              <Inbox className="w-10 h-10 text-blue-500 pt-2" />
              <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleUpload}>Upload</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Uploader;
