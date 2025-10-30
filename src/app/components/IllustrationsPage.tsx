import Image from "next/image";

export default function IllustrationsPage() {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-6">Illustrations</h2>
            <div className="mb-8">
                <Image
                    src="/projects/one.jpg"
                    alt="Illustration work"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>
            <p className="text-lg leading-relaxed">
                This is the page of all ahinoams illustrations
            </p>
            <p className="text-lg leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-lg leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
        </div>
    );
}