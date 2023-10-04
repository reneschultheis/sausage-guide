import PocketBase from "pocketbase"

export default async function HotdogStand({
    params,
}: {
    params: {hotdogstand: string}
}) {
    const pb = new PocketBase("https://vienna-sausage-gang.pockethost.io")

    const record = await pb
        .collection("hotdog_stands")
        .getOne(params.hotdogstand, {
            expand: "districts",
        })

    return (
        <div>
            <div>Name: {record.name}</div>
            <div>Review: {record.review}</div>
            <div>Bezirk: {record.district}</div>
        </div>
    )
}
