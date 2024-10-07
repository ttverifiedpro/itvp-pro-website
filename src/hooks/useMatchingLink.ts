import useConfig from "./useConfig";
import useIndependentPro from "./useIndependentPro";
import { useEffect, useState } from "react";
import {enrichCtaQueryParams} from "../utils/queryParamUtils";

export const useMatchingLink = (): string => {
  const config = useConfig();
  const pro = useIndependentPro();

  const [link, setLink] = useState(() => {
    const [url, params] = config.makeMatchingCtaUrl(pro);
    return url + "?" + enrichCtaQueryParams(params, config).toString();
  });

  useEffect(() => {
    if (!globalThis.document) return;
    const [url, params] = config.makeMatchingCtaUrl(pro);
    const enrichedParams = enrichCtaQueryParams(params, config);

    setLink(url + "?" + enrichedParams.toString());
  }, []);

  return link;
};
