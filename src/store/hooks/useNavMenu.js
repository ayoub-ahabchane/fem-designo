import React, { useEffect, useState } from "react";

const useNavMenu = (mediaQueryString) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(mediaQueryString).matches
  );
  const [isVisible, setIsVisible] = useState(
    window !== undefined ? !window.matchMedia(mediaQueryString).matches : true
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(mediaQueryString);
    function handleMediaChange() {
      setIsVisible(!mediaQuery.matches);
      setIsMobile(mediaQuery.matches);
    }

    handleMediaChange();
  }, [mediaQueryString]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mediaQueryString);

    function handleMediaChange() {
      setIsVisible(!mediaQuery.matches);
      setIsMobile(mediaQuery.matches);
    }

    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.addEventListener("change", handleMediaChange);
    };
  }, [mediaQueryString]);

  function toggleNav() {
    setIsVisible(!isVisible);
  }

  return { isMobile, isVisible, toggleNav };
};

export default useNavMenu;
