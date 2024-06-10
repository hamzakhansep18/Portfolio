const AboutClientSingle = ({ title, image }) => {
	return (
		<div className="flex justify-center items-center py-3 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-full mb-8 cursor-pointer">
		<img
		  src={image}
		  className="w-24 h-24 object-contain"
		  alt={title}
		/>
	  </div>
	  
	);
  };
  
  export default AboutClientSingle;
  