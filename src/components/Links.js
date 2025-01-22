import React from "react";

const Links = ({githubUrl, LinkedinUrl}) => {
    return(
        <div>
            <h3>Links</h3>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"></a>
            <br/>
            <a href={LinkedinUrl} target="_blank" rel="noopener noreferrer"></a>
            <a/>
        </div>
    )
}

export default Links;   