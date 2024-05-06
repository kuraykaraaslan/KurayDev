
import { useState, useEffect, createRef, Component } from 'react'


const Testimonials = () => {


    return (
        <section className="bg-base-200 md:px-24">
          <div className="container px-6 py-4 mx-auto mx-4 pb-0 md:pb-20">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-4xl font-bold">what my clients say</h2>
                <p className="">success brings more success. I am proud of my work and my clients are happy with it too.</p>
              </div>
              <div className="p-6 xl:col-span-3 pt-0">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md bg-base-100">
                      <p>he helped to build our order management system, and İ was impressed by his ability to communicate complex ideas to non-technical team members.</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <div className="w-12 h-12 bg-center bg-cover rounded-full bg-base-500">
                          <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-white bg-blue-500 rounded-full">M</div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">mutlu kurtbas</p>
                          <p className="text-sm dark:text-gray-400">cafe franchise owner</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md bg-base-100">
                      <p>stock management is a breeze now, and we're able to keep track of our inventory in real time.</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <div className="w-12 h-12 bg-center bg-cover rounded-full bg-base-500">
                          <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-white bg-red-500 rounded-full">G</div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">gabriel williams</p>
                          <p className="text-sm dark:text-gray-400">association president</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md bg-base-100">
                      <p>communication was great, and he was able to deliver the project on time and on budget.</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <div className="w-12 h-12 bg-center bg-cover rounded-full bg-base-500">
                          <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-white bg-green-500 rounded-full">N</div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">natalie adams</p>
                          <p className="text-sm dark:text-gray-400">marketing manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md bg-base-100">
                      <p>he communicates well, works quickly, and has a great attitude. i highly recommend him.</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <div className="w-12 h-12 bg-center bg-cover rounded-full bg-base-500">
                          <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-white bg-yellow-500 rounded-full">P</div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">penelope scott</p>
                          <p className="text-sm dark:text-gray-400">it manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}


export default Testimonials;