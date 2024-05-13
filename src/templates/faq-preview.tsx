import type {
    TemplateProps,
    TemplateRenderProps,
    GetHeadConfig,
    GetPath,
    Template,
    TemplateConfig,
} from "@yext/pages";
import { AnalyticsScreen } from "../context/analytics";
import { ConfigContext, createConfig } from "../hooks/useConfig";
import { H4 } from "../components/atoms/Typography";
import "../index.css";
import FaqList from "../components/indpro/FaqList";
import { useMemo } from "react";
import {getHeadConfig as getFaqHeadConfig} from './faq'

export const config: TemplateConfig = {
    // The name of the feature. If not set the name of this file will be used (without extension).
    // Use this when you need to override the feature name.
    name: "FAQ Preview",
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
    return "faq-preview";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => getFaqHeadConfig({} as TemplateRenderProps);

const FAQPreview: Template<TemplateRenderProps> = () => {
    const config = useMemo(() => createConfig("faq"), []);

    return (
        <ConfigContext.Provider value={config}>
            <AnalyticsScreen scopeArea={"faq"} screen={"faq"}>
                <div className={"text-pepper120"}>
                    <main className={"px-5 pt-5 pb-12 max-w-screen-m mx-auto"}>
                        <H4 className={"mb-6"}>
                            Frequently Asked Questions
                        </H4>
                        <FaqList />
                    </main>
                </div>
            </AnalyticsScreen>
        </ConfigContext.Provider>
    );
};

export default FAQPreview;
