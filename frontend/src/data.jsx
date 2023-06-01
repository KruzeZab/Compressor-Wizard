import {
  AiOutlineFilePdf,
  AiOutlineFileImage,
  AiOutlineFileZip,
  AiOutlineThunderbolt,
} from 'react-icons/ai';
import { FaRegFileVideo } from 'react-icons/fa';
import { TbMathSymbols } from 'react-icons/tb';
import { BsUniversalAccessCircle } from 'react-icons/bs';
import { VscTools } from 'react-icons/vsc';
import { GoFileMedia } from 'react-icons/go';

export const PDF_TOOLS = [
  {
    title: 'Compress PDF',
    description:
      'Compress PDF files online for free with this PDF compression and optimization tool. Reduce PDF file size, make PDF files smaller online.',
    icon: <AiOutlineFilePdf fontSize="32px" />,
  },
];

export const IMAGES_TOOLS = [
  {
    title: 'Compress Image',
    description:
      'Compress JPEG images and photos for displaying on web pages, sharing on social networks or sending by email.',
    icon: <AiOutlineFileImage fontSize="32px" />,
  },
  {
    title: 'Compress PNG',
    description:
      'Compress PNG images and photos for displaying on web pages, sharing on social networks or sending by email.',
    icon: <AiOutlineFileImage fontSize="32px" />,
  },
  {
    title: 'Compress JPG',
    description:
      'Compress JPG images and photos for displaying on web pages, sharing on social networks or sending by email.',
    icon: <AiOutlineFileImage fontSize="32px" />,
  },
];

export const VIDEOS_TOOLS = [
  {
    title: 'Compress Video',
    description:
      'Compress video files online for free, reduce file size of MP4 video files online, compress MP4 videos online, free video compressor.',
    icon: <FaRegFileVideo fontSize={'32px'} />,
  },
];

export const ZIP_TOOLS = [
  {
    title: 'Create Archive files',
    description:
      'Create an archive file online from your browser. Create a ZIP file online from your browser. No registration, no uploads: safe and fast.',
    icon: <AiOutlineFileZip fontSize="32px" />,
  },
  {
    title: 'Create ZIP file',
    description:
      'Create a ZIP file online from your browser. No registration, no uploads: safe and fast.',
    icon: <AiOutlineFileZip fontSize="32px" />,
  },
];

export const BENEFITS = [
  {
    title: 'Easy to use',
    description:
      'Our tools are designed with a strong emphasis on user-friendliness, ensuring that anyone can easily navigate and utilize them without the need for registration or subscription. By eliminating these barriers, we aim to provide a seamless and hassle-free experience for our users.',
    icon: <BsUniversalAccessCircle fontSize={'32px'} />,
  },
  {
    title: 'Video Compression',
    description:
      'It offers powerful video compression capabilities, allowing you to reduce the size of your videos. Compressing videos enables faster streaming and downloading, making it ideal for websites, social media platforms, and video sharing platforms.',
    icon: <FaRegFileVideo fontSize={'32px'} />,
  },
  {
    title: 'Presets and Customization',
    description:
      'It offers a range of compression presets tailored to specific platforms and use cases. From social media platforms to website optimization, choose the appropriate preset to achieve optimal results effortlessly.',
    icon: <VscTools fontSize={'32px'} />,
  },
  {
    title: 'Intelligent Compression Algorithms',
    description:
      'It employs state-of-the-art compression algorithms that intelligently analyze and optimize videos, images, and files. These algorithms ensure optimal compression ratios while preserving critical details, resulting in significantly reduced file sizes without compromising visual integrity or data integrity.',
    icon: <TbMathSymbols fontSize={'32px'} />,
  },
  {
    title: 'Enhanced Performance',
    description:
      "By compressing videos, images, and files, Compress Wizard optimizes website performance, enhances user experience, and reduces bandwidth consumption. Improve your website's loading times, boost SEO rankings, and provide an overall faster and smoother browsing experience for your audience.",
    icon: <AiOutlineThunderbolt fontSize={'32px'} />,
  },
  {
    title: 'Support for High-Resolution Media',
    description:
      'supports compression for high-resolution videos, images, and files. Maintain the visual integrity of your high-quality media while significantly reducing file sizes, making it easier to store, share, and distribute your content.',
    icon: <GoFileMedia fontSize={'32px'} />,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Emily Parker',
    description:
      'Compress Wizard has been a game-changer for me. As a photographer, I deal with a large number of high-resolution images. With Compress Wizard, I can compress my images without sacrificing quality, resulting in faster website loading times and improved user experience.',
    jobTitle: 'Professional Photographer',
    icon: './images/head1.jpg',
  },
  {
    name: 'John Anderson',
    description:
      "I'm impressed with Compress Wizard's video compression capabilities. It allowed me to significantly reduce the file size of my promotional videos without compromising the visual quality. Now, my videos load faster, and I can easily share them across various platforms.",
    jobTitle: 'Marketing Manager',
    icon: './images/head2.jpg',
  },
  {
    name: 'Sarah Thompson',
    description:
      'Compress Wizard has made file compression a breeze for me. I frequently work with large ZIP archives containing important documents. With Compress Wizard, I can compress and optimize these files, saving valuable storage space and making them easier to share with colleagues.',
    jobTitle: 'Business Analyst',
    icon: './images/head3.jpg',
  },
  {
    name: 'Michael Lewis',
    description:
      'As a content creator, I was looking for a reliable tool to compress my audio files. Compress Wizard exceeded my expectations with its audio compression feature. Now, I can reduce the file size of my podcasts and music tracks while maintaining the audio quality, ensuring a smooth streaming experience for my listeners.',
    jobTitle: 'Podcaster and Musician',
    icon: './images/head4.jpg',
  },
  {
    name: 'Jennifer Hernandez',
    description:
      'I love how Compress Wizard preserves important metadata during the compression process. As a professional videographer, retaining video tags and copyright information is crucial for my work. Compress Wizard ensures that my compressed videos maintain their informational value, making it my go-to tool for video compression.',
    jobTitle: 'Videographer',
    icon: './images/head5.jpg',
  },
  {
    name: 'David Wilson',
    description:
      "Compress Wizard has been a lifesaver for my e-commerce website. Compressing product images has significantly improved the site's loading speed, resulting in higher customer satisfaction and increased conversions. I highly recommend Compress Wizard to any online business owner looking to optimize their website performance.",
    jobTitle: 'E-commerce Store Owner',
    icon: './images/head6.jpg',
  },
];
