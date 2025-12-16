export default async function Post({ params }: { params: { id: string } }) {

    const { id } = await params

    return (
        <div>
            {id}
        </div>
    )
}