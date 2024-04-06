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
import WalletConnectionComponent from "./WalletConnectionComponent";
import Navigation from "./Navigation";

export const Uploader: React.FC<
  UploaderConfigProps & { onUpload: (url: string) => void }
> = ({ onUpload }) => {
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

        onUpload(`https://arweave.net/${receipt.id}`);
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
    <>
      <Navigation />

      <form className="m-0 self-stretch flex flex-col items-center justify-start pt-[18px] pb-[9.3px] pr-5 pl-[22px] box-border relative gap-[13.4px] max-w-full">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lgi [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] box-border border-[1.5px] border-solid border-gray-400" />
        <div className="w-[712px] flex flex-row items-start justify-start py-0 pr-[22px] pl-5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <b className="relative text-base tracking-[-0.01em] font-poppins text-deepskyblue text-left shrink-0 [debug_commit:f6aba90] z-[1]">
                Upload to Database
              </b>
            </div>
            <div className="self-stretch rounded-[15.53px] [background:linear-gradient(90deg,_rgba(59,_52,_187,_0.6),_rgba(39,_172,_255,_0.06))] overflow-hidden flex flex-col items-end justify-start pt-[21px] px-[22.5px] pb-[17px] gap-[12.5px] shrink-0 [debug_commit:f6aba90] z-[1]">
              <div className="self-stretch h-[100.9px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-[15.53px] bg-lightsteelblue-200 w-full h-full overflow-hidden flex flex-row items-start justify-center pt-[21.7px] px-5 pb-[22px] box-border">
                  <div className="relative text-2xs-1 font-poppins text-silver text-left inline-block min-w-[122px]">
                    Drag and drop files here
                  </div>
                </div>
                <input
                  className="absolute top-[50.5px] left-[14.8px] rounded-[10.09px] bg-lightsteelblue-200 w-[595.5px] h-[30.3px] overflow-hidden flex flex-row items-start justify-start pt-[7.7px] pb-[7.6px] pr-[266.7px] pl-[267.8px] box-border z-[1]"
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  name="file"
                />
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
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7.7px] pl-[9px] box-border max-w-full">
                <Button onClick={handleUpload}>Upload</Button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* <WalletConnectionComponent /> */}
      {/* </div>
      </section> */}
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
      {/* </main> */}
    </>
  );
};

export default Uploader;
