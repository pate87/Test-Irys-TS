"use client";

import React, { useState, useEffect } from "react";
import getWeaveDB from "../utils/getWeaveDB";
import { isNil, map } from "ramda";
import { profile } from "console";

export const WeaveDB = () => {
  // set state variables
  const [profiles, setProfiles] = useState<any>([]);
  const getProfiles = async () => {
    const db = await getWeaveDB();
    const profiles = await db.cget("customers");
    setProfiles(profiles);
    console.log("profiles", profiles);
  };

  return (
    <div>
      <h1>Get WeaveDB Profiles</h1>
      <div className="card">
        <button onClick={getProfiles}>Get WeaveDB</button>
      </div>
      <ul>
        {profiles.map((profile: any, index: number) => (
          <li key={index}>
            <h2>Profile {index + 1}</h2>
            <ul>
              <li>Name: {profile.name}</li>
              <li>User Address: {profile.user_address}</li>
              <li>Phone Number: {profile.phone_number}</li>
              <li>Email: {profile.email}</li>
              <li>Todo Date: {profile.todo_date}</li>
              <li>Subject: {profile.subject}</li>
            </ul>
          </li>
        ))}
        {/* <li>name: {profiles.name}</li>
        <li>user_address: {profiles.user_address}</li>
        <li>phone_number: {profiles.phone_number}</li>
        <li>email: {profiles.email}</li>
        <li>todo_date: {profiles.todo_date}</li>
        <li>subject: {profiles.subject}</li> */}
      </ul>
    </div>
  );
};

export default WeaveDB;
