'use client'
import React, { useState, FormEvent, useEffect } from 'react'


export default function Terms() {

  useEffect(() => {
    return () => {
      var element = document.getElementById("terms-policy");
      if(element) {
          element.parentNode.removeChild(element);
      }
    }
  }, []);

	const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    script.id = "terms-policy";
    document.head.appendChild(script);
};


  if (typeof window === "undefined") {
    return null;
  }

  if (document.getElementById("terms-policy") === null) {
    loadScript();
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Terms and Conditions</h1>
          </div>
        </div>
          <div
            name="termly-embed"
            data-id=""
            data-type="iframe"
          ></div>
      </div>
    </section>
  )
}
