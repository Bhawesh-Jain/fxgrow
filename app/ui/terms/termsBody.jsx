const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const TermsBody = async () => {
    const res = await fetch(`${baseUrl}/api/dashboard/terms/all`, {
        method: "GET",
        cache: "no-cache"
    });

    const body = await res.json();

    return (
        <div className="font-inter">
            <p className="whitespace-pre-wrap py-8 font-inter">
                {body.data.description}
            </p>
        </div>
    )
}

export default TermsBody