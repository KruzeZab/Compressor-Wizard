const CompressorDetail = ({ icon, title, description }) => {
  return (
    <a href="/" key={title} className="tool group">
      <div className="flex space-x-6">
        <div className="pt-1">{icon}</div>
        <div>
          <h4 className="tool-text">{title}</h4>
          <p className="tool-desc">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default CompressorDetail;
