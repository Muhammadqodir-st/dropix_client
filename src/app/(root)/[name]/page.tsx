export default async function Name({ params }: { params: { name: string } }) {
    const { name } = await params

    return(
        <div className="w-full h-full bg-red-500">
            {name}
        </div>
    )
}