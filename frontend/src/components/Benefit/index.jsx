const Benefit = ({ title, icon, description }) => {
  return (
    <div className="bg-white shadow-md p-6 flex space-x-8 rounded-xl">
      <div>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Benefit;
