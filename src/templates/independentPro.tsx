import type {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
} from "@yext/pages";
import "../index.css";
import { TaxProsDevExtended } from "../hooks/useIndependentPro";
import { createConfig } from "../hooks/useConfig";
import { useEffect, useMemo } from "react";
import IndependentProPage from "../components/pages/IndependentProPage";
import indProHeader from "../assets/content/indProHeader";
import * as indepProPageUtils from "../utils/indepProPageUtils";

export const config: TemplateConfig = indepProPageUtils.makeConfig("main");

export const getPath: GetPath<TemplateProps<TaxProsDevExtended>> = indepProPageUtils.getPath;

export const getHeadConfig: GetHeadConfig<TemplateRenderProps<TaxProsDevExtended>> = (data) => {
  return indepProPageUtils.getHeadConfig(data, "independentPro", indProHeader(data.document));
};

export const transformProps: TransformProps<TemplateProps<TaxProsDevExtended>> = async (data) => {
  return indepProPageUtils.transformProps(data);
};

const Component: Template<TemplateRenderProps<TaxProsDevExtended>> = ({ document }) => {
  const config = useMemo(() => createConfig("independentPro"), []);

  useEffect(() => {
    if (!window) return;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("cid") === "pr" && !window.location.pathname.endsWith("/pro")) {
      window.location.pathname = window.location.pathname + "/pro";
    }
  }, []);

  return <IndependentProPage config={config} pro={document} />;
};

export default Component;
