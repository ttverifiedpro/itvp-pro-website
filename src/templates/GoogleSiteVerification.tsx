import type {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "google167b18f51643ed7d.html",
};

// The path must be exactly google167b18f51643ed7d.html
export const getPath: GetPath<TemplateProps> = () => {
  return "google167b18f51643ed7d.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "TurboTax® Verified Pro",
  };
};

const GoogleSiteVerification: Template<TemplateRenderProps> = () => {

  return (
    "google-site-verification: google167b18f51643ed7d.html"
  );
};

export default GoogleSiteVerification;