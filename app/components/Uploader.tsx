"use client"

import getWebIrys from "../utils/getIrys";
import { useState, useEffect } from "react";

export const Uploader: React.FC<UploaderConfigProps> = () => {

    const [connectedAddress, setConnectedAddress] = useState<string>();

    return (
        <main>
        <h1>Irys Test</h1>

<div>

  {connectedAddress && connectedAddress.length > 0 && (
      
      <h3>Connected from: {connectedAddress}</h3>
      )}
      </div>
  <div className="card">
    <button onClick={getWebIrys}>Connect To Irys Node</button>
  </div>
        <div>
            <input type="file" /*multiple onChange={handleFileUpload}*/ className="hidden" />
        </div>
  </main>
    )
}

export default Uploader;