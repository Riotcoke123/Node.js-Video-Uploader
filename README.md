# Node.js-Video-Uploader
Node.js Video Uploader

Node.js function that allows you to upload a video clip to catbox.moe, pomf2.lain.la, or https://streamable.com

This function takes two parameters: the file to upload and the service to upload it to. The file parameter should be a readable stream of the video clip to upload, and the service parameter should be a string that is either 'catbox', 'pomf2', or 'streamable'.

The function returns a Promise that resolves with the URL of the uploaded clip on the selected service. If there was an error uploading the clip, the Promise will be rejected with an Error object containing an error message.

Note that this code requires the node-fetch and form-data packages, which you can install using npm install node-fetch form-data.
