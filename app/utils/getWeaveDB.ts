// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
import WeaveDB from "weavedb-sdk";
// import { isNil, map } from "ramda";
import dotenv from "dotenv";
import exp from "constants";
dotenv.config();

const contractTxId = process.env.NEXT_PUBLIC_CONTRACT_TX_ID;
// const contractTxId = "kUTSOBMvutqnVtxqlCmIwURFNr5X-t56bXJoAQ0mFss";
//
// interface User {
//   wallet: string;
//   privateKey: string;
// }

// interface Profile {
//   name: string;
//   user_address: string;
//   phone_number: string;
//   email: string;
//   todo_date: string;
//   subject: string;
// }

// const getWeaveDB = async () => {
// function GetWeaveDB() {
//State variables
// const [user, setUser] = useState<User | null>(null);
// const [profiles, setProfiles] = useState<Profile[]>([]);
// const [initDB, setInitDB] = useState<boolean>(false);
// const [db, setDb] = useState<any>(null);

const setupWeaveDB = async () => {
  console.log("setupWeaveDB");
  const _db = new WeaveDB({
    contractTxId,
  });
  await _db.init();
  // setDb(_db);
  // setInitDB(true);
  console.log("setupWeaveDB", _db);
  return _db;
};

// useEffect(() => {
//   setupWeaveDB();
// }, []);

// };

// export default getWeaveDB;
export default setupWeaveDB;
