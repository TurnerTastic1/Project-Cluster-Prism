




function getOAuthCode() {
    let code = null;
    try {
        const url = new URL(window.location.href);
        const urlParams = new URLSearchParams(url.search);
        code = urlParams.getAll('code');
    } catch(error) {
        console.log(error);
        return code;
    }
    return code;
}

function getTop10() {
    return null;
}

function Spotify() {

    return (
        <div>
            {window.location.href}
            <p>
                testing baby
            </p>
            {getOAuthCode()}
        </div>
    )
};

export default Spotify;