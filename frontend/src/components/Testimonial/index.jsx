const Testimonial = ({ icon, description, name, jobTitle }) => {
  return (
    <div className="shadow-md px-8 py-10 rounded-xl bg-white">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={icon}
          alt={name}
          className="w-12 h-12 rounded-full"
        />
        {/* Name */}
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm">{jobTitle}</p>
        </div>
      </div>
      {/* Review */}
      <p className="tracking-wide leading-6 text-sm">{description}</p>
    </div>
  );
};

export default Testimonial;
