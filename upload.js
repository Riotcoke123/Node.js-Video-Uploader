const fetch = require('node-fetch');
const FormData = require('form-data');

async function uploadClip(file, service) {
  const form = new FormData();
  form.append('file', file);

  let url;

  switch (service) {
    case 'catbox':
      url = 'https://catbox.moe/user/api.php';
      break;
    case 'pomf2':
      url = 'https://pomf2.lain.la/upload.php';
      break;
    case 'streamable':
      url = 'https://api.streamable.com/upload';
      break;
    default:
      throw new Error('Invalid service selected');
  }

  const response = await fetch(url, {
    method: 'POST',
    body: form
  });

  if (!response.ok) {
    throw new Error(`Failed to upload clip to ${service}`);
  }

  const json = await response.json();

  switch (service) {
    case 'catbox':
      return `https://files.catbox.moe/${json.url}`;
    case 'pomf2':
      return `https://pomf2.lain.la/${json.files[0].url}`;
    case 'streamable':
      return `https://streamable.com/${json.shortcode}`;
  }
}

// Example usage
const clip = fs.createReadStream('path/to/clip.mp4');
const service = 'streamable'; // Change to 'catbox' or 'pomf2' to upload to a different service
uploadClip(clip, service)
  .then(url => console.log(`Uploaded clip to ${service} at ${url}`))
  .catch(error => console.error(error));
