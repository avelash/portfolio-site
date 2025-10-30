import Image from "next/image";

export default function PrintPage() {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-6">Print Design</h2>
            <div className="mb-8">
                <Image
                    src="/projects/one.jpg"
                    alt="Print design work"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>
            <p className="text-lg leading-relaxed">
                to print or not to print, that is the question.
            </p>
            <p className="text-lg leading-relaxed">
                Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
            </p>
            <p className="text-lg leading-relaxed">
                Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
        </div>
    );
}