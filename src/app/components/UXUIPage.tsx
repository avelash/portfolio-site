import Image from "next/image";

export default function UXUIPage() {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-6">UX/UI Design</h2>
            <div className="mb-8">
                <Image
                    src="/projects/two.jpg"
                    alt="UX/UI work"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>
            <p className="text-lg leading-relaxed">
                this is the UX/UI page
            </p>
            <p className="text-lg leading-relaxed">
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
            </p>
            <p className="text-lg leading-relaxed">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
        </div>
    );
}