import * as motion from "motion/react-client";

const Progress = ({ title, percent }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full"
    >
      <div className="mb-1 flex justify-between">
        <span className="font-ovo text-[15px] font-semibold text-gray-700 capitalize">
          {title}
        </span>
        <span className="font-ovo text-[15px] font-semibold text-gray-700">
          {percent}%
        </span>
      </div>
      <div className="h-4 w-full rounded-full bg-gray-100/50 backdrop-blur-3xl">
        <div
          className="h-4 rounded-full bg-emerald-600"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default Progress;
