import { MdCloudUpload, MdArrowForwardIos } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import CompressorTitle from '../../components/CompressorTitle';

const PDFCompress = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 max-w-screen-lg">
      <CompressorTitle title="Compress PDF">
        Use this online PDF compressor to reduce the file size of your
        PDF documents. Make PDFs smaller to send them via e-mail or
        upload them to the internet.
      </CompressorTitle>

      {/* File Upload */}
      <form action="/" className="flex flex-col space-y-6 pb-20">
        <div className="flex flex-col">
          <label
            htmlFor="file-upload"
            className="bg-purple-500 w-full h-80 p-4 rounded-xl cursor-pointer hover:bg-purple-600 transition-all duration-200"
          >
            <div className="flex flex-col items-center justify-center text-white h-full border-4 border-white border-dashed rounded-xl">
              <input
                type="file"
                name="file-upload"
                id="file-upload"
                className="hidden"
              />
              <MdCloudUpload fontSize="5rem" />
              <h4 className="text-xl font-semibold">
                Click to upload a File
              </h4>
            </div>
          </label>
        </div>

        {/* Start Compression Button */}
        <div>
          <button
            type="button"
            class="bg-blue-500 p-2 font-medium text-white text-lg rounded-md hover:bg-blue-600 transition-all duration-2 tracking-wide flex items-center justify-center space-x-1 uppercase"
          >
            <span>Start Compression</span>
            <span>
              <MdArrowForwardIos fontSize="18px" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PDFCompress;
