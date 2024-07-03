import gsap from "gsap"
import ScrollTrigger from "gsap/src/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
export const animateWithGsap =(target,animationProbs,scrollProbs) => {
    gsap.to(target,{
        ...animationProbs,
        scrollTrigger:{
            trigger:target,
            toggleActions:'restart reverse restart reverse',
            start:'top 85%',
            ...scrollProbs,
        }
    })
}

