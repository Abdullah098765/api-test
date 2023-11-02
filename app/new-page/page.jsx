"use client";
import React, { useState } from "react";

export default function Page() {
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

    fetch("http://localhost:3000/api/post-data", requestOptions)
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
