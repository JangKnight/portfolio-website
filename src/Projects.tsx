{
  /* I have a new WIP that uses gemini for a chatbox. the app is called go bank. 
    I'm still creating services, but right now, the highlight is the chatbot that a person can use to "help navigate the site and more".
    The website is located @ bank.anthonysjhenry.net. I simply want to create a projects/wip page to showcase this work. */
}
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold text-center text-gray-700! mb-6">
          Projects & WIPs
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li>
            <Link
              to="https://bank.anthonysjhenry.net"
              className="text-blue-500 hover:underline"
            >
              Go Bank - A Gemini-powered chatbot banking assistant
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              A personal project showcasing a chatbot that helps users navigate
              the site and more.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
