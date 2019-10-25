# streaming-video-demo
Streaming `mpeg-4` video by node.js server.

## Description
This repo is an example of using video streaming by backend and using stream on the client-side.

## Streaming types

Native `<video>` html5 tag is cabaple of displaying different kind of streams.
In very basics (like in this repo example) it is capable of displaying video (in format supported by browser: [firefox](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/codecs_parameter), [chrome](https://www.chromium.org/audio-video), [other list of supported formats](http://www.html5videoplayer.net/html5video/html5-video-formats-codec/)) that is divided into parts.
If `type` attribute is not provided browser is trying to download small chank to verify if content is playable before it's ready to play ([source](https://www.sitepoint.com/using-html5-video-and-audio-in-modern-browsers/)).

Website is albo capable of support more [stream protocols](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video) like:
- HTTP
- RTMP
- RTSP 1.0 & 2.0

Another way to support streamed conntent on FE is using [Media Source Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API) and for streaming p2p: [WebRTC](https://webrtc.org/).

Also popular HTTP streaming formats:
- MPEG-DASH
- HLS