import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FileListItem from './FileListItem';
import testFiles from './Files';
import './index.css';

const FileList = ({ files }) => {
  return (
    <table className="file-list">
      <tbody>
        {files.map(file => (
          <FileListItem key={file.id} file={file} />
        ))}
      </tbody>
    </table>
  )
}

FileList.propTypes = {
  files: PropTypes.array
};

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById('app')
)