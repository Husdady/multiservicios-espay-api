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
  window.addEventListener("load", function () {
    let timeout;
    const currentScroll = getCurrentScroll();
    const { section, time = 1000, scrollPosition = 500 } = options;
    if (currentScroll < scrollPosition) {
      timeout = setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 1000,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, time);
      return timeout;
    } else {
      window.scrollTo(0, window.innerHeight - window.scrollY);
      return null;
    }
  });
}

export { scrollToSection };
