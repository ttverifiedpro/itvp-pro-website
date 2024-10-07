import React, {useEffect, useState} from "react";
import TIPLogo from "../../assets/logos/5050_horizontal.svg";
import LifetimeBadge from "../../assets/icons/badges/lifetime.svg";
import RefundBadge from "../../assets/icons/badges/refund.svg";
import FullServiceBadge from "../../assets/icons/badges/full_service.svg";
import { B1, B2, H5 } from "../atoms/Typography";
import Link from "../atoms/Link";
import Button from "../atoms/Button";
import { Section } from "./SharedComponents";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TypeScale } from "../atoms/TypeScale";
import { TextColor } from "../atoms/TextColor";
import { PageSection } from "./constants";
import {useGetQueryParams} from "../../hooks/useGetQueryParams";

const PoweredBy: React.FC = () => {
    const [fullUrl, setFullUrl] = useState('');
    const queryParams = useGetQueryParams();
    useEffect(() => {
        setFullUrl("/" + queryParams);
    }, [queryParams]);
  return (
    <Section
      id={PageSection.PoweredBy}
      solidBg
      pyStationary={"80"}
      pxSmall={"40"}
      pxLarge={"80"}
      aria-labelledby={"powered-by-turbotax"}
    >
      <Header />
      <div className={"grid grid-cols-1 gap-10 m:grid-cols-3 m:gap-4"}>
        <Guarantee
          icon={LifetimeBadge}
          iconAlt={"Tax Return Lifetime Guarantee Badge"}
          title={"Lifetime Guarantee"}
          description={
            "Get audit support, accuracy, and your max refund—100% guaranteed for the 7-year life of your tax return."
          }
        />
        <Guarantee
          icon={RefundBadge}
          iconAlt={"Maximum Refund Guarantee Badge"}
          title={"Maximum Refund Guarantee"}
          description={"Our experts will get you your max refund—guaranteed."}
        />
        <Guarantee
          icon={FullServiceBadge}
          iconAlt={"Full Service Guarantee Badge"}
          title={"Full Service Guarantee"}
          description={`Your tax expert will only sign and file your return when it's 100% correct.`}
        />
      </div>
      <Button as={"a"} href={fullUrl} priority={"secondary"} className={"hidden s:block self-start"}>
        Learn more about Verified Pro
      </Button>
    </Section>
  );
};

const Header: React.FC = () => {
  return (
    <div className={"flex flex-col gap-4 s:items-start"}>
      <img src={TIPLogo} width={146} height={24} alt={"Intuit TurboTax Verified Pro"} />
      <ResponsiveTypography
        typescaleMobile={TypeScale.Headline04}
        typescaleStationary={TypeScale.Headline02}
        weightMobile={"regular"}
        weightStationary={"regular"}
        color={TextColor.textPrimary}
        as={"h2"}
        id={"powered-by-turbotax"}
      >
        Powered by TurboTax
      </ResponsiveTypography>
      <B1>
        Your security is built into everything we do. Each tax pro undergoes a background check and
        is backed by TurboTax, America’s #1 tax prep provider. Get peace of mind that your taxes are
        right,{" "}
        <Link
          action={"engaged"}
          object={"link"}
          href={"https://turbotax.intuit.com/pros/guarantees/"}
          objectDetail={"guaranteed"}
          className={"text-blueberry80 font-medium hover:underline"}
        />
        .
      </B1>
      <Button
        as={"a"}
        href={"/"}
        priority={"secondary"}
        className={"s:hidden"}
        aria-label={"Learn more about Verified Pro"}
      >
        Learn more
      </Button>
    </div>
  );
};

interface GuaranteeProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const Guarantee: React.FC<GuaranteeProps> = (props) => {
  return (
    <div className={"flex flex-col text-center items-center"}>
      <img
        src={props.icon}
        width={160}
        height={160}
        className={"pb-10"}
        alt={props.iconAlt}
        loading={"lazy"}
      />
      <H5 as={"h3"} weight={"demi"} className={"pb-2"}>
        {props.title}
      </H5>
      <B2>{props.description}</B2>
    </div>
  );
};

export default PoweredBy;
