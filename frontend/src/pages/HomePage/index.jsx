import Benefit from '../../components/Benefit';
import Testimonial from '../../components/Testimonial';
import { BENEFITS, TESTIMONIALS } from '../../data';
import CompressorList from './CompressorList';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 pt-8">
        <div className="w-[95%] mx-auto pb-12">
          {/* Heading Title */}
          <div className="flex flex-col items-center py-2 space-y-2 mb-6">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Free Online File Compressor
            </h1>
            <p className="text-md md:text-lg tracking-wide font-light text-center max-w-xl">
              Compress your files online. Please select one of the
              compression tools below:
            </p>
          </div>

          {/* Compressors */}
          <CompressorList />
        </div>
      </div>

      {/* Benefits */}
      <div className="my-20 mb-10 w-[95%] mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Features and Benefits
        </h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {BENEFITS.map((benefit) => (
            <Benefit key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-1">
        <div className="my-20 w-[95%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Read Trusted Reviews From our Users
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {TESTIMONIALS.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
