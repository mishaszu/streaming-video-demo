const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/video', (req, res) => {
  console.log('request for video')
  const path_to_video = path.resolve('./big_buck_bunny.mp4');;
  const stat = fs.statSync(path_to_video)
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(path_to_video, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(path_to_video).pipe(res);
  }
});

app.get('/', (_req, res) => {
  res.sendFile(path.resolve('./index.html'));
});

app.listen(3000, () => console.log('server running'));