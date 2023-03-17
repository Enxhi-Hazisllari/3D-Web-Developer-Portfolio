import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../HigherOrderComponent";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificatesCard = ({ index, title, company, credential, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='relative w-full h-[230px]'>
      <img
        src={image}
        alt='certificate_image'
        className='w-full h-full object-cover rounded-2xl'
      />
    </div>

    <div className='mt-5'>
      <h3 className='text-white font-bold text-[24px]'>{title}</h3>
      <p className='mt-2 text-secondary text-[14px]'>{company}</p>      
      
      <div className="mt-5 w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 flex flex-col items-center justify-evenly">
        <button className='flex text-white font-bold text-[18px]'><a href={credential}>Credential</a></button>
      </div>
      </div>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificatesCard key={certificate.title} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");