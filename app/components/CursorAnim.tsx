import { motion } from "framer-motion";
import { useRef } from "react";
import { followCursor } from "./followCursor";

const CursorAnim = () => {
    const ref = useRef(null);
    const { x, y } = followCursor(ref);

    return (
        <motion.section 
            className="w-4 h-4 fixed z-0"
            ref={ref}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 3,
              stiffness: 50,
              restDelta: 0.001
            }}
        >
            <svg className="opacity-5 animate-spin bg-gradient-radial from-neutral-600 via-gray-800 to-indigo-800 ...  blur-2xl rounded-full w-[640px] h-[640px]" />
        </motion.section>
    )
}

export default CursorAnim;