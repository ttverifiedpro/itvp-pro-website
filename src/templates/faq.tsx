import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";
import * as React from "react";
import { AnalyticsScreen } from "../context/analytics";
import useConfig from "../hooks/useConfig";
import Header from "../components/indpro/Header";
import Footer from "../components/indpro/Footer";
import { H1, H3 } from "../components/atoms/Typography";
import { createAnalyticsScripts } from "../utils/analytics";
import "../index.css";
import FaqList from "../components/indpro/FaqList";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "FAQ",
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "faq";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  const scripts = createAnalyticsScripts({
    scopeArea: "faq",
    screen: "faq",
  });

  return {
    title: "TurboTax® Verified Pro FAQ",
    other: scripts,
  };
};

const FAQ: Template<TemplateRenderProps> = () => {
  const config = useConfig();

  return (
    <AnalyticsScreen scopeArea={"faq"} screen={"faq"}>
      <div className={"text-gray01"}>
        {config.showHeader && <Header />}
        <main className={"px-5 pt-5 pb-12 max-w-screen-m mx-auto"}>
          <H1 as={"h1"}>Intuit TurboTax Verified Pro</H1>
          <H3 as={"h2"} className={"mb-8"}>
            Frequently Asked Questions
          </H3>
          <FaqList />
        </main>
        {config.showFooter && <Footer />}
      </div>
    </AnalyticsScreen>
  );
};

export default FAQ;