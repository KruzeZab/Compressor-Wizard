import React from 'react';
import {
  PDF_TOOLS,
  IMAGES_TOOLS,
  ZIP_TOOLS,
  VIDEOS_TOOLS,
} from '../../data';
import CompressorDetail from './CompressorDetail';

const CompressorList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Column 1  */}
      <div>
        <h2 className="tool-title">Compress Documents</h2>

        <div className="flex flex-col space-y-4">
          {PDF_TOOLS.map((tool) => (
            <CompressorDetail key={tool.title} {...tool} />
          ))}
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <h2 className="tool-title">Compress Images</h2>

        <div className="flex flex-col space-y-6">
          {IMAGES_TOOLS.map((tool) => (
            <CompressorDetail key={tool.title} {...tool} />
          ))}
        </div>
      </div>

      {/* Column 3 */}
      <div>
        <h2 className="tool-title">Compress Videos</h2>

        <div className="flex flex-col space-y-6">
          {VIDEOS_TOOLS.map((tool) => (
            <CompressorDetail key={tool.title} {...tool} />
          ))}
        </div>
      </div>

      {/* Column 4 */}
      <div>
        <h2 className="tool-title">Zip Files</h2>

        <div className="flex flex-col space-y-6">
          {ZIP_TOOLS.map((tool) => (
            <CompressorDetail key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompressorList;
