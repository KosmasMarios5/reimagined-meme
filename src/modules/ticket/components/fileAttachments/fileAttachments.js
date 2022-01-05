//@flow
import React, {useMemo} from 'react';
import {useDropzone} from "react-dropzone";
import {Button, ListGroup, Table} from "react-bootstrap";
import type {Attachment} from "../../types/types";

type Props = {
    onUpload: Function,
    attachments: Array<Attachment>
};

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const FileAttachments = (props: Props) => {
    const {onUpload, attachments} = props
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone();
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ])
    return (
        <div className="p-3">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>File</th>
                    <th>Upload Date</th>
                </tr>
                </thead>
                <tbody>
                {attachments.map((a, index) => (
                    <tr key={a.id}>
                        <td>{index + 1}</td>
                        <td><a href={a.url}>{a.fileName}</a></td>
                        <td>{a.uploadDate}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <hr/>
            <div className={'mb-2'}>
                <h4>Upload Files</h4>
                <div {...getRootProps({className: 'dropzone', style})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
            </div>
            {acceptedFiles && acceptedFiles.length > 0 && (
                <div className={'mb-2'}>
                    <h4>Files</h4>
                    <ListGroup className={'mb-2'}>
                        {acceptedFiles.map(file => (
                            <ListGroup.Item action disabled key={file.path}>
                                {file.path} - {file.size} bytes
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button variant={"primary"} onClick={() => onUpload(acceptedFiles)}>
                        Upload
                    </Button>
                </div>
            )}
        </div>
    )
}

export default FileAttachments;