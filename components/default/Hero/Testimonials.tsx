'use client';
import { useState, useEffect, createRef, Component } from "react";

//i18n
import { withTranslation } from "react-i18next";
import i18n from "@/libs/localize/localize";
import Link from "next/link";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  review: string;
}

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="p-6 rounded shadow-md bg-base-100">
      <p>{testimonial.review}</p>
      <div className="flex items-center mt-4 space-x-4">
        <div className="w-12 h-12 bg-center bg-cover rounded-full bg-base-500">
          <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-white bg-blue-500 rounded-full">
            {testimonial.name[0]}
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">{testimonial.name}</p>
          <p className="text-sm dark:text-gray-400">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {

  const { t } = i18n;

  const testimonials = [
    {
      id: 1,
      name: t("TESTIMONIALS.CLIENT_1.NAME"),
      title: t("TESTIMONIALS.CLIENT_1.TITLE"),
      review: t("TESTIMONIALS.CLIENT_1.REVIEW"),
    },
    {
      id: 2,
      name: t("TESTIMONIALS.CLIENT_2.NAME"),
      title: t("TESTIMONIALS.CLIENT_2.TITLE"),
      review: t("TESTIMONIALS.CLIENT_2.REVIEW"),
    },

    {
      id: 3,
      name: t("TESTIMONIALS.CLIENT_3.NAME"),
      title: t("TESTIMONIALS.CLIENT_3.TITLE"),
      review: t("TESTIMONIALS.CLIENT_3.REVIEW"),
    },
    {
      id: 4,
      name: t("TESTIMONIALS.CLIENT_4.NAME"),
      title: t("TESTIMONIALS.CLIENT_4.TITLE"),
      review: t("TESTIMONIALS.CLIENT_4.REVIEW"),
    }
  ] as Testimonial[];

  return (
    <section className="bg-base-200 md:px-24">
      <div className="container px-6 py-4 mx-auto mx-4 pb-0 md:pb-20">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">{t("TESTIMONIALS.TITLE")}</h2>
            <p className="">
              {t("TESTIMONIALS.DESCRIPTION")}
            </p>
          </div>
          <div className="p-6 xl:col-span-3 pt-0">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                {testimonials.map((testimonial) => {
                  if (testimonial.id <= 2) {
                    return <SingleTestimonial key={testimonial.id} testimonial={testimonial} />;
                  }
                })}
              </div>
              <div className="grid content-center gap-4">
                {testimonials.map((testimonial) => {
                  if (testimonial.id > 2) {
                    return <SingleTestimonial key={testimonial.id} testimonial={testimonial} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(Testimonials);
