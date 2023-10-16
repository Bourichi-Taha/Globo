import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"


const Rveal = ({width="100%",children}) => {

    const ref = useRef(null);
    const isInView = useInView(ref,{});
    const mainControls = useAnimation();
    // const secondControls = useAnimation();
    useEffect(() => {
        mainControls.start("visible");
        // secondControls.start("visible");
        console.log("started")
    }, [isInView])
    return (
        <div ref={ref} style={{position:"relative",width:width,overflow:"hidden"}} >
            <motion.div
                variants={{
                    hidden: {opacity:0,y:25},
                    visible : {opacity:1,y:0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: .5,delay:2}}
            >
                {children}
            </motion.div>
            {/* <motion.div 
                variants={{
                    hidden:{left:0},
                    visible: {left:"100%"}
                }}
                initial="hidden"
                animate={secondControls}
                transition={{duration:.5,ease:"easeIn"}}
                style={{
                    position:"absolute",
                    top:4,
                    bottom:4,
                    left:0,
                    right:0,
                    background:"#0c79b3",
                    zIndex:30
                }}
            /> */}
        </div>
    )
}

export default Rveal