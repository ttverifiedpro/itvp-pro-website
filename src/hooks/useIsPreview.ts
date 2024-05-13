import {useEffect, useMemo, useState} from "react";

const useIsPreview = (): boolean => {
  const [isPreview, setIsPreview] = useState(false)

  useEffect(() => {
    if (!window) return;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("preview") === "true") {
      setIsPreview(true)
    }
  }, []);

  return isPreview;
};

export default useIsPreview