
const RedirectPopup = ({ setPopupVis, isVisible, redirectLink, btnVisibility, msg, title, btnText, router }) => {
    const handleClick = () => {
        console.log("redirect " + redirectLink);
        if (redirectLink.length > 0) {
            router.push(redirectLink)
        } else setPopupVis(false)
    }

    if (!isVisible) return null;

    else return (
        <div className="z-40 text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
            <div className="bg-white py-10 px-20 rounded-lg flex flex-col items-center gap-4 justify-between">
                <h1 className="text-lg font-bold">{title}</h1>
                <p>{msg}</p>

                {btnVisibility && <button className="bg-blue-500 p-3 text-white w-2/3 rounded" onClick={handleClick}>{btnText}</button>}
            </div>
        </div>
    )
}

export default RedirectPopup