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
                <div key={stand.name} className="m-2 my-4 p-4 shadow-black shadow-no-blur bg-gray-200">{stand.name}</div>
            ))}
        </>
    )
}
