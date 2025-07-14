import { ExternalLink } from "lucide-react";

export default function ProjectCard(props) {
  return (
    <>
      <div
        className={`bg-white min-h-[250px]  rounded-2xl  overflow-hidden hover:shadow-xl  transition-shadow duration-300 ${
          props.index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } flex flex-col lg:flex `}
      >
        {/* Project Image */}
        <div
          className="lg:w-[40%] h-[250px] p-6 flex items-center  justify-center bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>

        {/* Project Info */}
        <div className="lg:w-[60%] p-8 flex flex-col justify-start">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {props.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {props.description}
          </p>
          {props.link && (
            <a
              href={props.link}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 self-start"
            >
              View Project
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </>
  );
}
