import type {
    TemplateProps,
    TemplateRenderProps,
    GetPath,
    TemplateConfig,
} from "@yext/pages";

export const config: TemplateConfig = {
    // The name of the feature. If not set the name of this file will be used (without extension).
    // Use this when you need to override the feature name.
    name: "sitemap.xml",
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = () => {
    return `sitemap.xml`;
};

export const render = (data: TemplateRenderProps) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://pros.turbotax.intuit.com/expert-profile-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://pros.turbotax.intuit.com/full-service-experts/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
`;
};
