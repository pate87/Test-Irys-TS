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

export const Uploader: React.FC<
  UploaderConfigProps & { onUpload: (url: string) => void }
> = ({ onUpload }) => {
  const [connectedAddress, setConnectedAddress] = useState<string>();
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

        onUpload(`https://arweave.net/${receipt.id}`);
      } catch (e) {
        console.log("Error uploading data ", e);
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
        <CardContent>
          <Label htmlFor="file">PDF File</Label>
          <Input type="file" multiple onChange={handleFileUpload} name="file" />
        </CardContent>
        <CardFooter>
          <Button onClick={handleUpload}>Upload</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Uploader;
