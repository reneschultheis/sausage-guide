import PocketBase from "pocketbase"
import Image from "next/image"

export default async function HotdogStands() {
    const pb = new PocketBase("https://vienna-sausage-gang.pockethost.io")

    const hotdog_stands = (await pb
        .collection("hotdog_stands")
        .getFullList()) as any[]

    return (
        <>
            {hotdog_stands.map((stand) => (
                <a href={`/${stand.id}`} key={stand.name}>
                    <div className="text-lg m-2 my-4 rounded-md shadow-black shadow-no-blur bg-gray-200">
                        <Image
                            src={`https://vienna-sausage-gang.pockethost.io/api/files/hotdog_stands/${stand.id}/${stand.preview}`}
                            quality={100}
                            alt={stand.name}
                            width={100}
                            height={80}
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="px-4 pt-4 pb-2 font-medium">
                            {stand.name}
                        </div>
                        <div className="px-4 pb-2">Review {stand.review}</div>
                    </div>
                </a>
            ))}
        </>
    )
}
