import {
    Heart,
    Users,
    Stethoscope,
    Car,
    Brain,
    Clock,
    Activity,
    Users2,
    Shield,
    ClipboardList,
    Search,
    UserCircle,
    Home,
    ArrowRight
} from "lucide-react";

export interface ServiceContent {
    slug: string;
    title: string;
    icon: string;
    shortDescription: string;
    heroImage: string;
    titleHtml?: string;
    sections: {
        title?: string;
        titleHighlight?: string;
        content: string[];
        image?: string;
        list?: string[];
        reverse?: boolean;
    }[];
    reasons?: {
        title: string;
        items: string[];
    };
    process?: {
        title: string;
        steps: { title: string; description: string }[];
    };
    stats?: { label: string; value: string }[];
    faqs?: { question: string; answer: string }[];
}

export const servicesData: ServiceContent[] = [
    {
        slug: "assistance-with-daily-life",
        title: "Assistance With Daily Life",
        titleHtml: "Assistance With <span class='text-primary'>Daily Life</span>",
        icon: "Heart",
        shortDescription: "Personalized support for your daily routine, enhancing autonomy at home.",
        heroImage: "/assets/home-img01.webp",
        stats: [
            { label: "Caregivers", value: "150+" },
            { label: "Available", value: "24/7" },
            { label: "Participants", value: "500+" },
            { label: "Rating", value: "4.9/5" }
        ],
        sections: [
            {
                content: [
                    "We at Js Choice – Care and Support are a reliable name in the disability sector and know how challenging it is for an NDIS participant to manage their daily life. We are here just to make it simple with our specialized support and keep you on top of every activity you perform.",
                    "Our daily life assistance in Melbourne is an exceptional service that we proactively offer to our participants to turn their bad times into good ones. We provide assistance in a dedicated, passionate, and tailored manner."
                ],
                title: "Reliable Daily Life Assistance in Melbourne by Js Choice",
                image: "/assets/choose-img.webp",
            },
            {
                title: "What Comprises Our Assistance with Daily Life?",
                titleHighlight: "Assistance with Daily Life?",
                content: [
                    "Assistance with daily life encompasses a range of crucial services aimed at promoting independence and well-being. From aiding with self-care to household chores and beyond, these services play a vital role in enhancing quality of life."
                ],
                image: "/assets/home-img02.webp",
                reverse: true,
                list: [
                    "Personal hygiene and grooming support",
                    "Domestic housekeeping including laundry and ironing",
                    "Groceries, meal preparation, and storage",
                    "Garden maintenance and basic handyman services",
                    "Cleaning services (regular or end-of-lease)"
                ]
            }
        ],
        process: {
            title: "Our Simple Support Process",
            steps: [
                { title: "Initial Consultation", description: "We meet with you to understand your specific needs and goals." },
                { title: "Customized Care Plan", description: "Our experts design a plan tailored perfectly to your lifestyle." },
                { title: "Caregiver Matching", description: "We pair you with a support worker who shares your interests." },
                { title: "Ongoing Support", description: "Regular check-ins to ensure you are thriving and achieving goals." }
            ]
        },
        reasons: {
            title: "Why Choice Js Choice for Daily Assistance?",
            items: [
                "Person-centered approach to daily life assistance",
                "Qualified and experienced team of support workers",
                "Cultural diversity and inclusivity within our team",
                "Prioritized safety, security, and comfort",
                "Commitment to quality and excellence"
            ]
        },
        faqs: [
            { question: "Is this service covered by NDIS?", answer: "Yes, Assistance with Daily Life is a core support category within the NDIS." },
            { question: "Can I choose my own support worker?", answer: "Absolutely. We pride ourselves on matching you with workers who fit your personality and needs." },
            { question: "Do you provide 24-hour care?", answer: "Yes, we can provide around-the-clock support depending on your NDIS plan and requirements." }
        ]
    },
    {
        slug: "group-activities",
        title: "Group Activities",
        titleHtml: "Group <span class='text-primary'>Activities</span>",
        icon: "Users",
        shortDescription: "Foster social interaction and skill-building in a supportive community environment.",
        heroImage: "/assets/about-hero.png",
        stats: [
            { label: "Community", value: "Active" },
            { label: "Groups", value: "15+" },
            { label: "Success", value: "100%" }
        ],
        sections: [
            {
                title: "Engage and Connect with Community",
                content: [
                    "Social isolation can be a barrier to well-being. Our Group and Centre-based activities provide a vibrant community where you can meet new people and participate in fun activities.",
                ],
                image: "/assets/contact-hero.png",
            }
        ],
        process: {
            title: "Joining Our Community",
            steps: [
                { title: "Discovery", description: "Find out which groups align with your hobbies and interests." },
                { title: "Introduction", description: "Meet the group leaders and participants in a low-pressure setting." },
                { title: "Active Participation", description: "Dive into workshops, trips, and events." }
            ]
        },
        faqs: [
            { question: "What kind of activities are available?", answer: "We offer sports, arts, gardening, cooking, and local outings." },
            { question: "Is transport provided to the center?", answer: "Yes, we can arrange transportation to and from our activities centers." }
        ]
    },
    {
        slug: "emergency-respite",
        title: "Emergency Respite",
        icon: "Home",
        shortDescription: "Immediate support and accommodation for urgent situations when you need it most.",
        heroImage: "/assets/hero-bg-premium.webp",
        sections: [
            {
                title: "Reliable Support in Crisis",
                content: [
                    "Life is unpredictable. Our Emergency Respite services provide short-term accommodation and care for participants in crisis situations.",
                ],
                image: "/assets/choose-img.webp",
            }
        ],
        stats: [
            { label: "Response", value: "Fast" },
            { label: "Security", value: "High" }
        ]
    },
    {
        slug: "nursing-care",
        title: "Nursing Care",
        icon: "Stethoscope",
        shortDescription: "Professional clinical care and medical management by specialized nurses.",
        heroImage: "/assets/blog/blog_support_coordination.png",
        sections: [
            {
                title: "Expert Clinical Support",
                content: [
                    "Our qualified nursing staff brings hospital-grade medical care directly to your doorstep. We handle everything from wound care to chronic disease management."
                ],
                image: "/assets/home-img01.webp",
                list: ["Professional wound management", "Complex medication administration", "Catheter and bowel care", "Health monitoring"]
            }
        ],
        process: {
            title: "Clinical Onboarding",
            steps: [
                { title: "Assessment", description: "A senior nurse reviews your medical records and current needs." },
                { title: "Scheduling", description: "We set up a regular nursing visit schedule." },
                { title: "Execution", description: "Professional medical care is delivered safely at home." }
            ]
        }
    },
    {
        slug: "community-participation",
        title: "Community Access",
        icon: "Activity",
        shortDescription: "Bridging the gap between you and your local community events.",
        heroImage: "/assets/home-img02.webp",
        sections: [
            {
                title: "Unlock Your Community",
                content: ["We believe everyone deserves to be an active member of their community. Our support workers assist you in accessing local events, clubs, and venues."],
                image: "/assets/about-hero.png"
            }
        ]
    },
    {
        slug: "transportation",
        title: "Transportation",
        icon: "Car",
        shortDescription: "Reliable mobility assistance for medical visits and social events.",
        heroImage: "/assets/contact-hero.png",
        sections: [{ title: "Reliable Travel Support", content: ["Safe, punctual, and helpful transport for all your NDIS needs."], image: "/assets/hero-bg-premium.webp" }]
    },
    {
        slug: "allied-health",
        title: "Allied Health",
        icon: "ClipboardList",
        shortDescription: "Access to professional therapists for holistic recovery and wellness.",
        heroImage: "/assets/career-hero.png",
        sections: [{ title: "Holistic Therapy", content: ["Physiotherapy, occupational therapy, and more, all coordinated by us."], image: "/assets/choose-img.webp" }]
    },
    {
        slug: "psychosocial-recovery-coach",
        title: "Recovery Coaching",
        icon: "Brain",
        shortDescription: "Specialized coaching for overcoming challenges related to psychosocial disability.",
        heroImage: "/assets/blog/blog_support_coordination.png",
        sections: [{ title: "Path to Recovery", content: ["Our Recovery Coaches support participants with psychosocial disabilities to achieve mental wellness."], image: "/assets/about-hero.png" }]
    },
    {
        slug: "ndis-access",
        title: "NDIS Access",
        icon: "Search",
        shortDescription: "Expert help navigating the complex world of NDIS application and entry.",
        heroImage: "/assets/home-img01.webp",
        sections: [{ title: "Navigating NDIS", content: ["We simplify the NDIS access request process for you and your family."], image: "/assets/choose-img.webp" }]
    },
    {
        slug: "support-coordination",
        title: "Support Coordination",
        icon: "Shield",
        shortDescription: "Linking you with the right providers to maximize your NDIS plan impact.",
        heroImage: "/assets/home-img02.webp",
        sections: [{ title: "Optimize Your Plan", content: ["We help you find the best value and services within your allocated budget."], image: "/assets/about-hero.png" }]
    },
    {
        slug: "family-advocacy",
        title: "Family Advocacy",
        icon: "UserCircle",
        shortDescription: "Standing with your family to ensure your rights and voices are heard.",
        heroImage: "/assets/hero-bg-premium.webp",
        sections: [{ title: "Advocating for You", content: ["Professional representation to ensure you get the support you deserve."], image: "/assets/contact-hero.png" }]
    },
    {
        slug: "innovative-participation",
        title: "Innovative Participation",
        icon: "ArrowRight",
        shortDescription: "Creative and mainstream ways to participate in your surrounding community.",
        heroImage: "/assets/career-hero.png",
        sections: [{ title: "Creative Engagement", content: ["New ways to connect."], image: "/assets/choose-img.webp" }]
    }
];
