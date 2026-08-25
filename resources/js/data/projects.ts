export interface ProjectData {
    slug: string;
    title: string;
    category: string;
    year: string;
    client: string;
    role: string;
    description: string;
    tags: string[];
    heroImage: string;
    images: string[];
    dualImages?: [string, string];
    textImageBlock?: {
        paragraphs: string[];
        image: string;
    };
    quoteDual?: {
        quote: string;
        images: [string, string];
    };
    closingBlock?: {
        paragraph: string;
        image: string;
    };
    credits?: {
        paragraphs: string[];
        items: { label: string; value: string }[];
    };
}

export const projects: ProjectData[] = [
    {
        slug: 'visual-identity-nexora',
        title: 'Visual Identity — Nexora',
        category: 'Brand Work',
        year: '2025',
        client: 'Nexora Studio',
        role: 'Brand Direction, Visual Identity, Packaging',
        description:
            'What takes a day from good to great? For many, it\'s a great cup of coffee and a good playlist. The average person consumes coffee and music daily, and when the two meet, they have immense powers to lift our spirits and fuel our creativity.\n\nWhen a coffee collaboration between music and creative entrepreneur Nexora and their locally-owned studio wanted to embody that idea. Under Nexora\'s creative direction, the brand collaboration came to life with a stunning contrast design and a great-tasting product to back it up.',
        tags: ['Brand Identity', 'Visual System', 'Typography', 'Packaging'],
        heroImage: '/assets/home/split1.jpg',
        images: [
            '/assets/home/1.jpeg',
            '/assets/home/split2.jpg',
            '/assets/home/2.jpeg',
            '/assets/home/split3.jpg',
            '/assets/home/3.jpeg',
        ],
        dualImages: ['/assets/home/split2.jpg', '/assets/home/split3.jpg'] as [string, string],
        textImageBlock: {
            paragraphs: [
                'Merging industries can unlock creative potential and reach new audiences. By partnering with a well-respected local studio like Nexora, we ensured the product delivered exceptional taste alongside the unique design.',
                'Nexora spearheaded the creation of a visually striking identity system that embodied the synergy between craft and technology. To amplify the collaboration\'s reach, captivating visuals featuring the brand were strategically placed throughout key creative districts. These pieces served as a visual call to action, piquing the interest of design and innovation lovers alike.',
            ],
            image: '/assets/home/herobg.jpeg',
        },
        quoteDual: {
            quote: 'TO ELEVATE THE EVERYDAY EXPERIENCE BY MERGING TWO UNIVERSAL ENERGIZERS: CRAFT AND VISION.',
            images: ['/assets/home/3.jpeg', '/assets/home/fullcardimg.jpeg'] as [string, string],
        },
        closingBlock: {
            paragraph: 'The result was a body of work that lives beyond the brief — a visual system with enough conviction to stand on its own, and enough flexibility to grow with the brand over time.',
            image: '/assets/home/split3.jpg',
        },
        credits: {
            paragraphs: [
                'By combining Nexora\'s creative vision with their studio expertise, this collaboration serves as a valuable example of how strategic partnerships, compelling design, and a multi-channel marketing approach can enhance brand awareness and ultimately drive successful product launches.',
                'For consultation services in brand development, creative direction, or visual identity, please contact VisualCrew at hello@visualcrew.com.',
            ],
            items: [
                { label: 'Creative Direction', value: 'VisualCrew' },
                { label: 'Design', value: 'Visual Crew Studio' },
                { label: 'Copy', value: 'Nexora Team' },
                { label: 'Production', value: 'VisualCrew' },
                { label: 'Photography', value: 'Studio Assets' },
            ],
        },
    },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
    return projects.find((p) => p.slug === slug);
}
