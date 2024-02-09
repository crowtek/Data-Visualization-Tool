
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from '@mui/material';
import { tokens } from "../../theme";

function AnimatedCheckIcon({ initial = true, isVisible }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <AnimatePresence initial={initial}>
        {isVisible && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={colors.greenAccent[400]}
            className="CheckIcon"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              exit={{ pathLength: 0 }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: isVisible ? "easeOut" : "easeIn"
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </AnimatePresence>
    );
  }

  export default AnimatedCheckIcon;