import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const MyWorks = () => {
  const [activeTab, setActiveTab] = useState('Dev Projects');

  const projects = [
    {
      id: 1,
      title: 'NXT MOVIE',
      description: 'NXT Movie - Your Personal Movie Watchlist! NXT Movie is a simple and fun web app that helps you manage your personal movie watchlist. Just type the name of a movie and our app fetches the poster and adds it to your collection. You can add and delete movies anytime.',
      image: '/api/placeholder/400/300',
      category: 'Dev Projects'
    },
    {
      id: 2,
      title: 'MOZHI',
      description: 'NXT Movie - Your Personal Movie Watchlist! NXT Movie is a simple and fun web app that helps you manage your personal movie watchlist. Just type the name of a movie and our app fetches the poster and adds it to your collection. You can add and delete movies anytime.',
      image: '/api/placeholder/400/300',
      category: 'Art'
    }
  ];

  const tabs = ['Dev Projects', 'Designs', 'Art'];

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-8 z-30 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-12">
          My Works
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-200 rounded-full p-1 flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-400 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 w-[60vw]">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Project Image */}
              <div className="lg:w-[40%] bg-gray-900 p-6 flex items-center justify-center">
               
                
                
              </div>

              {/* Project Info */}
              <div className="lg:w-[60%] p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 self-start">
                  View Project
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 mx-auto">
            View All Projects
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;