import { css } from 'lit-element';

export const GlobalStyles = css`
:host {
  background-color: #fefefe;
  color: #000;
}

.aspect-ratio-fill {
  position: relative;
  display: block;
}

.progressiveMedia {
  background-color: #eee;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.progressiveMedia.isImageLoaded > .progressiveMedia__image {
  opacity: 1;
}

.progressiveMedia__thumbnail {
  display: none;
}

.progressiveMedia__image,
.progressiveMedia__canvas {
  border-radius: 3px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.progressiveMedia__image {
  opacity: 0;
  transition: opacity 400ms 0ms;
  z-index: 1;
}
.progressiveMedia.isImageLoaded .progressiveMedia__canvas{
	visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility 0s linear .5s,opacity .1s .4s;
    transition: visibility 0s linear .5s,opacity .1s .4s;
}
`;