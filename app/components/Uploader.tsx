"use client";

import getWebIrys from "../utils/getIrys";
import { useState, useEffect } from "react";

export const Uploader: React.FC<UploaderConfigProps> = () => {
  const [connectedAddress, setConnectedAddress] = useState<string>();
  const [files, setFiles] = useState<FileWrapper[]>([]);

  //   const handleFileUpload = async (/*event*/) => {
  //     console.log("handleFileUpload");
  //     const getWebIrys = await getWebIrys();
  //     console.log("getWebIrys", getWebIrys);

  //     const fileToUpload =
  //       "/home/pinky/Pictures/170px-PinkyandtheBrain.Pinky.png";
  //     // const fileToUpload = event.target.files[0];
  //     const tags = [{ name: "Pinky-and-Brain", value: "MyTestImage" }];

  //     try {
  //       const receipt = await irys.uploadFile(fileToUpload, { tags: tags });
  //       console.log(`Data uploaded ==> https://arweave.net/${receipt.id}`);
  //     } catch (e) {
  //       console.log("Error uploading data ", e);
  //     }
  //   };

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

    for (const fileWrapper of files) {
      const tags = [{ name: "Content-Type", value: fileWrapper.file.type }];
      try {
        const receipt = await irys.uploadFile(fileWrapper.file, { tags });
        console.log(`Data uploaded ==> https://arweave.net/${receipt.id}`);
        // Update the fileWrapper with the receipt ID and mark as uploaded
        fileWrapper.id = receipt.id;
        fileWrapper.isUploaded = true;
        fileWrapper.previewURL = `https://arweave.net/${receipt.id}`;
      } catch (e) {
        console.log("Error uploading data ", e);
      }
    }
    // Update the state with the new fileWrapper objects
    setFiles([...files]);
  };

  return (
    <main>
      <h1>Irys Test</h1>
      <div>
        {connectedAddress && connectedAddress.length > 0 && (
          <h3>Connected from: {connectedAddress}</h3>
        )}
      </div>
      <div className="card">
        <button onClick={handleUpload}>Upload</button>
      </div>
      <input type="file" multiple onChange={handleFileUpload} name="file" />
    </main>
  );
};

export default Uploader;
