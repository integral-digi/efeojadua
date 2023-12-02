import Gradient from "@/public/assets/Gradient";
import { motion, spring } from "framer-motion";
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
            <svg className="opacity-10 animate-spin bg-gradient-radial from-indigo-200 via-purple-500 to-amber-500 ...  blur-2xl rounded-full w-64 h-64" />
        </motion.section>
    )
}

export default CursorAnim;