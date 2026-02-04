import { ServiceDetail } from "@/src/components/services/ServiceDetail";
import { servicesData } from "@/src/data/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
    const params = await props.params;
    const service = servicesData.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetail service={service} />;
}
