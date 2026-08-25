import { Head } from '@inertiajs/react';
import { getProjectBySlug } from '@/data/projects';
import ProjectHero from '@/components/ProjectHero';
import ProjectInfo from '@/components/ProjectInfo';
import ProjectDualImage from '@/components/ProjectDualImage';
import ProjectTextImage from '@/components/ProjectTextImage';
import ProjectQuoteDual from '@/components/ProjectQuoteDual';
import ProjectCredits from '@/components/ProjectCredits';
import Footer from '@/components/Footer';

interface Props {
    slug: string;
}

export default function ProjectPage({ slug }: Props) {
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <>
                <Head title="Project Not Found" />
                <div className="min-h-screen bg-black flex items-center justify-center">
                    <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Project not found</p>
                </div>
            </>
        );
    }

    const [titleMain, titleSub] = project.title.split('—').map((s) => s.trim().toUpperCase());
    const headlineTop = titleMain.split(' ')[0];
    const headlineBottom = titleSub ?? '';

    return (
        <>
            <Head title={project.title} />

            {/*
                Sticky hero — stays pinned at top while ProjectInfo slides over it.
                The wrapper height = 200vh gives enough scroll room before hero unpins.
            */}
            <div className="relative" style={{ height: '200vh' }}>
                <div className="sticky top-0 h-screen">
                    <ProjectHero
                        imageSrc={project.heroImage}
                        headlineTop={headlineTop}
                        headlineBottom={headlineBottom}
                    />
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <ProjectInfo
                        description={project.description}
                        role={project.role}
                    />
                </div>
            </div>

            {/* Dual image */}
            {project.dualImages && (
                <ProjectDualImage
                    leftImage={project.dualImages[0]}
                    rightImage={project.dualImages[1]}
                    leftAlt={`${project.title} — image 1`}
                    rightAlt={`${project.title} — image 2`}
                />
            )}

            {/* Text + single image block */}
            {project.textImageBlock && (
                <ProjectTextImage
                    paragraphs={project.textImageBlock.paragraphs}
                    image={project.textImageBlock.image}
                    imageAlt={project.title}
                />
            )}

            {/* Big quote + dual images */}
            {project.quoteDual && (
                <ProjectQuoteDual
                    quote={project.quoteDual.quote}
                    leftImage={project.quoteDual.images[0]}
                    rightImage={project.quoteDual.images[1]}
                    leftAlt={`${project.title} — 1`}
                    rightAlt={`${project.title} — 2`}
                />
            )}

            {/* Closing — single paragraph + image */}
            {project.closingBlock && (
                <ProjectTextImage
                    paragraphs={[project.closingBlock.paragraph]}
                    image={project.closingBlock.image}
                    imageAlt={project.title}
                />
            )}

            {/* Credits */}
            {project.credits && (
                <ProjectCredits
                    paragraphs={project.credits.paragraphs}
                    credits={project.credits.items}
                />
            )}

            <Footer />
        </>
    );
}
