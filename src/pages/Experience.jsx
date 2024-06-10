import React from 'react';

const Experience = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mt-4 text-primary-dark dark:text-primary-light mb-8 text-center">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Experience Item 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-6">
            <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">DigitsCom Technologies</h2>
            <p className="text-sm text-secondary-dark dark:text-secondary-light mb-2"><strong>Position:</strong> MERN Stack Intern</p>
            <p className="text-sm text-secondary-dark dark:text-secondary-light mb-4"><strong>Duration:</strong> 15-November 2023 - 15-May-2024</p>
            <ul className="list-disc list-inside text-sm text-secondary-dark dark:text-secondary-light space-y-2">
              <li>Collaborated with a team to develop innovative solutions using Node.js and Full Stack technologies.</li>
              <li>Completed various tasks related to an e-commerce website, enhancing functionality and user experience.</li>
              <li>Provided customer support, efficiently meeting requirements and delivering effective solutions.</li>
              <li>Proactively engaged in self-learning to deepen expertise in MERN stack technologies, contributing to project success.</li>
            </ul>
          </div>
        </div>
        
        {/* Experience Item 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-6">
            <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">Final Year Project</h2>
            <p className="text-sm text-secondary-dark dark:text-secondary-light mb-2"><strong>Position:</strong> Team Lead</p>
            <p className="text-sm text-secondary-dark dark:text-secondary-light mb-4"><strong>Duration:</strong> 20-February 2023 - 24-May 2023</p>
            <ul className="list-disc list-inside text-sm text-secondary-dark dark:text-secondary-light space-y-2">
              <li>Developed an AI model for detecting face masks and determining whether a person is masked or not, using technologies such as Python, OpenCV, and TensorFlow.</li>
              <li>Integrated the system with real-time video feeds to provide instant feedback.</li>
              <li>Optimized the model for accuracy and speed, ensuring reliable performance in various environments.</li>
              <li>Demonstrated leadership by successfully completing the project within a 4-month timeline.</li>
              <li>Conducted thorough testing and validation to ensure robustness and reliability of the system.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
