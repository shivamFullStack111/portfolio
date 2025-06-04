import {motion} from 'framer-motion'

const ImageLoader = () => {
  return (
    <motion.div initial={{y:0}} animate={{y:-3000}} transition={{delay:1,duration:3}}  className="w-full fixed top-0 left-0 h-screen z-50 bg-black flex justify-center items-center">
      <motion.div initial={{opacity:1,y:0}} animate={{opacity:0,y:-100}} transition={{duration:0.4,delay:0.7}}  className="h-20 w-20 border-3 rounded-full overflow-hidden border-yellow-400 ">
        <img
        className="h-full w-full  "
        src='self.png'
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageLoader;
