import PropTypes from 'prop-types';

const CompressorTitle = ({ title, children }) => {
  return (
    <div className="flex flex-col py-2 space-y-2 mb-6">
      <h1 className="font-semibold text-2xl md:text-2xl lg:text-3xl">
        {title}
      </h1>
      <p className="text-md md:text-lg font-light">{children}</p>
    </div>
  );
};

CompressorTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CompressorTitle;
