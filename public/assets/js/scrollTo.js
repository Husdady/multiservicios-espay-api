import { scroller } from "react-scroll";

function getCurrentScroll() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = winScroll / height;
  const fixedScrolled = (scrolled * 100).toFixed(2);

  return fixedScrolled;
}

function scrollToSection(options) {
  const {
    section,
    whenLoadPage,
    waitTime = 1000,
    scrollPosition = 500,
    duration
  } = options;
  if (whenLoadPage) {
    window.addEventListener("load", function () {
      let timeout;
      const currentScroll = getCurrentScroll();

      if (currentScroll < scrollPosition) {
        timeout = setTimeout(() => {
          scroller.scrollTo(section, {
            duration: duration || 1000,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }, waitTime);
        return timeout;
      } else {
        window.scrollTo(0, window.innerHeight - window.scrollY);
        return null;
      }
    });
  } else {
    scroller.scrollTo(section, {
      duration: duration || 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
}

export { scrollToSection };
