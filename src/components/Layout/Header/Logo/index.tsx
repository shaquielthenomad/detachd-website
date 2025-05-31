'use client'
import Link from "next/link";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="group">
      <motion.span 
        className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        detachd
      </motion.span>
    </Link>
  );
};

export default Logo;
