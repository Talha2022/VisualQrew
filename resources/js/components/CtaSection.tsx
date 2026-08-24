import { PortfolioGallery } from "@/components/ui/portfolio-gallery";

export default function CtaSection() {
    return (
        <PortfolioGallery
            title="HAVE SOMETHING IN YOUR HEAD THAT DOESN’T EXIST YET?"
            archiveButton={{ text: "MAKE IT EXIST", href: "#contact" }}
        />
    );
}
