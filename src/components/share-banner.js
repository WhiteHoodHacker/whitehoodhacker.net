import React from "react"

function copySuccess() {
    var copyTooltipElements = document.querySelectorAll(".main-copy-tooltip")
    for (var i = 0; i < copyTooltipElements.length; i++) {
        copyTooltipElements[i].textContent="Copied!"
    }
    setTimeout(function () {
        for (var i = 0; i < copyTooltipElements.length; i++) {
            copyTooltipElements[i].textContent="Copy"
        }
    }, 2000) 
}
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand("copy");
        if (successful) {
            copySuccess()
        }
    } catch (err) {
        console.error("[Fallback] Could not copy text: ", err);
    }
    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return
    }
    navigator.clipboard.writeText(text).then(function() {
        copySuccess()
    }, function(err) {
        console.error("[Async] Could not copy text: ", err);
    })
}

class ShareBanner extends React.Component {
    render() {
        return(
            <React.Fragment>
                <a className="me-3" aria-label="Tweet" target="_blank" rel="noopener noreferrer" href={ "https://twitter.com/intent/tweet?url=" + this.props.shareUrl }>
                    <div className="main-bottom-tooltip">
                        <svg className="main-social-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        <span className="main-bottom-tooltip-text">Tweet</span>
                    </div>
                </a>
                <button className="main-button-to-link me-3" aria-label="Copy" onClick={() => {copyTextToClipboard(this.props.shareUrl)}}>
                    <div className="main-bottom-tooltip">
                        <svg className="main-social-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
                        <span className="main-bottom-tooltip-text main-copy-tooltip">Copy</span>
                    </div>
                </button>
            </React.Fragment>
        )
    }
}

export default ShareBanner