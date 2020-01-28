import React from 'react';
import './components/styles.css';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const CheatsheetAuthor = ({name, twitterUrl, githubUrl }) => {
    return(
        <>
        	<div className="authorSection">
        		<div className="authorImg">
        			<img src={`${githubUrl}.png` } alt={name} />
        		</div>
        		<div className="authorDetails">
	        		<div className="authorName">
	        			<strong>{name}</strong>
	        			{twitterUrl ? (<a href={twitterUrl} className="authorLink" target="_blank" rel="noopener"><FaTwitter /></a>) : null}
	        			{githubUrl ? (<a href={githubUrl} target="_blank" className="authorLink"rel="noopener"><FaGithub /></a>) : null}
	        		</div>
        		</div>
        	</div>
        </>
    )
};

export default CheatsheetAuthor;
