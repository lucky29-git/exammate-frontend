import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Render.css'
export default function RenderPaper({title, files}){
    
    function HandleDownload(){
        const link = document.createElement('a')
        link.href = files;
        link.download = title + '.pdf';
        link.target = '_blank';
        link.click();
    }

    return <div className='custom flex mt-10 justify-between mx-10 relative' >
        <div className='flex items-center'>
        <FontAwesomeIcon icon={faFilePdf} className='icon text-3xl'/>
        {/* <div className='pl-10'>{title}</div> */}
        <div className='title pl-10'>{title}</div>
        </div>

        <div className='preview flex gap-10 items-center'>
        <Link to={files} target='_blank' >Preview </Link>
        {/* <button  >Preview</button> */}
        <button onClick={HandleDownload} className='download-button'>Download</button>
        </div>
    </div>
    
}