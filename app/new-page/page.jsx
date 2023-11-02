"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  useEffect(() => {
    fetch("https://api-test-chi-lac.vercel.app/api/get-data")
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result)))
      .catch(error => console.log("error", error));
  }, []);

  const [formData, setFormData] = useState();
  async function handleChange(event) {
    setFormData(event.target.value);
    console.log(formData);
  }
  function postData() {
    var myHeaders = new Headers();
    myHeaders.append("a", "dni");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Data: formData
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://api-test-chi-lac.vercel.app/api/post-data", requestOptions)
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result)))
      .catch(error => console.log("error", error));
  }

  return (
    <div>
      <input
        onChange={e => handleChange(e)}
        type="text"
        name="name"
        className="border border-black"
      />
      <button
        onClick={() => postData()}
        type="submit"
        className="bg-neutral-200"
      >
        Send
      </button>
    </div>
  );
}
