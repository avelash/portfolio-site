import Image from "next/image";

export default function LogosPage() {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-6">Logo Design</h2>
            <div className="mb-8">
                <Image
                    src="/projects/three.jpg"
                    alt="Logo design work"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>
            <p className="text-lg leading-relaxed">
                Andy hates making logo's but she is good at it anyway.
            </p>
            <p className="text-lg leading-relaxed">
                Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
            <p className="text-lg leading-relaxed">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>
        </div>
    );
}