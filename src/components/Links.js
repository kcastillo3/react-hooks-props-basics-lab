/*
. an <h3> element with the text of "Links"
. an <a> element with its href and text content 
set to URL of the user's Github link, passed down as a prop
. a second <a> element with its href and text content set to URL 
of the user's LinkedIn link, passed down as a prop

Hint: make sure your <a> tags display the URL of the user's links 
as their text content so that it matches the demo image above
*/

// "https://github.com/liza"
// "https://www.linkedin.com/in/liza/"

import React from "react";

function Links(props) {
    return (
      <div>
        <h3>Links</h3>
        <a href={props.githubLink}>{props.githubLink}</a><br />
        <a href={props.linkedinLink}>{props.linkedinLink}</a>
      </div>
    );
  }

  export default Links