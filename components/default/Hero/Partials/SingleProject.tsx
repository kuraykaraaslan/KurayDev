// SingleProject.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export type Url = {
  type?: "GitHub" | "Demo" | "Other";
  title?: string;
  icon?: IconDefinition;
  url: string;
};

export type Tag = {
  name: string;
  color: string;
  icon: IconDefinition;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  urls: Url[];
  tags: Tag[];
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
};

type SingleProjectProps = {
  project: Project;
};

const SingleProject: React.FC<SingleProjectProps> = ({ project }) => {
  return (
    <article
      className={`p-6 rounded-lg border shadow-md ${project.bgColor ? project.bgColor : "bg-base-100"} ${project.borderColor ? project.borderColor : "border-base-200"} ${project.textColor ? project.textColor : "text-base-900"}`}
    >
      <div className="flex items-center mb-5 text-black">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-xs font-medium me-2 px-2.5 pt-0.5 pb-1 rounded flex items-center ${tag.color}`}
          >
            <FontAwesomeIcon
              icon={tag.icon}
              style={{
                width: "1rem",
                height: "1rem",
                marginRight: "0.25rem",
                paddingTop: "0.25rem",
              }}
            />
            <span className="text-sm hidden lg:block">{tag.name}</span>
          </span>
        ))}
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight">
        <a>{project.title}</a>
      </h2>
      <p className="mb-5 font-light">{project.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {project.urls.map((url) => (
            <a
              key={url.url}
              href={url.url}
              className="inline-flex items-center font-medium hover:underline"
            >
              <FontAwesomeIcon
                icon={
                  url.icon
                    ? url.icon
                    : url.url.startsWith("https://github.com")
                      ? faGithub
                      : faGlobe
                }
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginRight: "0.25rem",
                  paddingTop: "0.25rem",
                }}
              />
              {url.title
                ? url.title
                : url.type === "GitHub"
                  ? "GitHub"
                  : "Demo"}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
