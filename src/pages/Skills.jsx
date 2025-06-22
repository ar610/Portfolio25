import React, { useState, useRef, useEffect } from 'react';

const SkillsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [skillPositions, setSkillPositions] = useState([]);
  const containerRef = useRef(null);
  const skillRefs = useRef([]);

  const skills = [
    'Figma', 'CSS', 'Html', 'C', 'Firebase',
    'Adobe Illustrator', 'JavaScript', 'C++', 'MongoDB', 'PostgreSQL',
    'Adobe Photoshop', 'Node js', 'Supabase', 'Git',
    'Canva', 'React', 'Java', 'Python'
  ];
  const skillLinks = {
    'Figma': 'https://www.figma.com/',
    'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    'Html': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'C': 'https://en.cppreference.com/w/c',
    'Firebase': 'https://firebase.google.com/',
    'Adobe Illustrator': 'https://www.adobe.com/products/illustrator.html',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'C++': 'https://isocpp.org/',
    'MongoDB': 'https://www.mongodb.com/',
    'PostgreSQL': 'https://www.postgresql.org/',
    'Adobe Photoshop': 'https://www.adobe.com/products/photoshop.html',
    'Node js': 'https://nodejs.org/',
    'Supabase': 'https://supabase.com/',
    'Git': 'https://git-scm.com/',
    'Canva': 'https://www.canva.com/',
    'React': 'https://react.dev/',
    'Java': 'https://www.oracle.com/java/',
    'Python': 'https://www.python.org/',
  };


  useEffect(() => {
    // Calculate initial positions
    const calculatePositions = () => {
        const positions = skillRefs.current.map((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
          originalX: rect.left + rect.width / 2 - containerRect.left,
          originalY: rect.top + rect.height / 2 - containerRect.top
        };
      }
      return { x: 0, y: 0, originalX: 0, originalY: 0 };
    });
    setSkillPositions(positions);
    }
     calculatePositions();
     window.addEventListener('resize', calculatePositions);

  // Cleanup listener on unmount
  return () => {
    window.removeEventListener('resize', calculatePositions);
  };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    
    if (skillPositions.length === 0) return;

    const hoveredPos = skillPositions[index];
    const newPositions = skillPositions.map((pos, i) => {
      if (i === index) return pos;

      // Calculate distance and direction from hovered skill
      const dx = pos.originalX - hoveredPos.originalX;
      const dy = pos.originalY - hoveredPos.originalY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Normalize direction
      const normalizedDx = dx / distance;
      const normalizedDy = dy / distance;
      
      // Calculate push strength based on distance (closer = stronger push)
      const pushStrength = 30;
      
      return {
        ...pos,
        x: pos.originalX + normalizedDx * pushStrength,
        y: pos.originalY + normalizedDy * pushStrength
      };
    });

    setSkillPositions(newPositions);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    
    // Reset to original positions
    setSkillPositions(prev => prev.map(pos => ({
      ...pos,
      x: pos.originalX,
      y: pos.originalY
    })));
  };

  return (
    <div id='skills' className="  relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-8 z-30">
      <div className="w-full mx-auto flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center mb-16 mt-10" >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Skills
          </h1>
          <h2 className="text-7xl font-bold text-gray-800">
            Design & Development
          </h2>
        </div>

        {/* Skills Container */}
        <div 
          ref={containerRef}
          className="relative mb-20 min-h-[400px] w-3/4 flex justify-center items-center flex-wrap "
        >
          {/* Initial Layout (hidden, used for position calculation) */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 pointer-events-none mt-10 ">
            {skills.map((skill, index) => (
              <span
                key={`ref-${index}`}
                ref={el => skillRefs.current[index] = el}
                className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-800 font-medium text-lg"
              >
                {skill}
              </span>
            ))}
          </div>
            <div className="flex flex-wrap justify-center mt-10 ">
          {/* Animated Skills */}
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`absolute px-6 py-3 bg-white border-2 rounded-full font-medium text-lg cursor-pointer transition-all duration-300 ease-out transform-gpu ${
                hoveredIndex === index
                  ? 'border-blue-500 bg-blue-50 text-blue-800 scale-110 shadow-lg z-10'
                  : 'border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400'
              }`}
              style={{
                left: skillPositions[index] ? `${skillPositions[index].x}px` : '0px',
                top: skillPositions[index] ? `${skillPositions[index].y}px` : '0px',
                transform: `translate(-50%, -50%) ${hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'}`,
                zIndex: hoveredIndex === index ? 10 : 1
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            > <a
                key={index}
                href={skillLinks[skill] || '#'} >
              {skill}
              </a>
            </span>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;