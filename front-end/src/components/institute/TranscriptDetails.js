import React from 'react' 

const TranscriptDetails = ({transcript}) => {
    return(
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{transcript.transcriptID}</span>
                <span className="card-text">{transcript.transcriptDate} </span>
                <span className="card-text">{transcript.studentID} </span>
                <span className="card-text">{transcript.studentName} </span>
                <span className="card-text">{transcript.programName} </span>
                <span className="card-text">{transcript.marksDetails} </span>
            </div>
        </div>
    )
}

export default TranscriptDetails