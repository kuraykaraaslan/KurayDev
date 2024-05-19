import { useState, useEffect, createRef, Component } from "react";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="hero min-h-screen bg-base-300 select-none">
      <div className="hero-content flex-col lg:flex-row-reverse mx-4 md:mx-20">
        <div className="max-w-sm rounded-lg shadow-2xl hidden lg:block">
          <div className="mockup-code  bg-base-100 rounded-box">
            <pre data-prefix="$" className="text-info">
              <code>curl https://kuray.dev/cli/whoami.py</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>python whoami.py</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>welcome to kuray's portfolio</code>
            </pre>
          </div>
        </div>
        <div className="flex-1 lg:mr-12">
          <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4 select-none">
            i do things with code.
          </h1>
          <p className="py-6">
            full stack developer, linux enthusiast, and a big fan of open
            source. I love to automate things and make life easier.
          </p>
          <Link href="/contact">
            <p className="btn btn-primary lowercase">contact me</p>
          </Link>
          <Link href="/projects" locale="en">
            <p className="btn btn-ghost ml-2 lowercase">see my top projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
