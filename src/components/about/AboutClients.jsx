import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
// import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {
  const { clientsData, clientsHeading } = useContext(AboutMeContext);

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-bold text-3xl sm:text-4xl text-center text-primary-dark dark:text-primary-light mt-8 mb-12">
        {clientsHeading}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 lg:gap-12 xl:gap-16 mt-6 sm:mt-10">
        {clientsData.map((client) => (
          <div key={client.id} className="flex items-center justify-center">
            <img
              src={client.img}
              alt={client.title}
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full border-4 border-secondary-light dark:border-ternary-dark shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutClients;
