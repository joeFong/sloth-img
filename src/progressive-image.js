// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { GlobalStyles } from './styles/styles';
import * as StackBlur from 'stackblur-canvas';

// Extend the LitElement base class
class ProgressiveImage extends LitElement {
  static get styles() {
    return [
      GlobalStyles,
    ]
  }
  static get properties() { 
    return {
      dataSrc: {
        type: String
      },
      dataThumbnail: {
        type: String
      },
      name: {
        type: String
      },
      _memoization: {
        type: JSON
      },
      blurDelay: {
        type: Number
      },
      blurRadius: {
        type: Number
      }
    }
  }
  constructor() {
    super();
    this._memoization = {};
    this.blurDelay = 100;
    this.blurRadius = 7;
  }

  _canvasBlur(options) {
    const {thumbnail, blurRadius, context, canvas, wrapper} = options; 
    //The aspect-ratio-fill padding is set here.
    var aspectRatioFill = wrapper.shadowRoot.querySelector('.aspect-ratio-fill');
    var percentage = (thumbnail.naturalHeight / thumbnail.naturalWidth) * 100;
    aspectRatioFill.style.paddingBottom = `${percentage}%`;

    //Draw the thumbnail onto the canvas, then blur it
    drawThumbnail(blurRadius);

    //Draws the thumbnail into the canvas and blurs it
    function drawThumbnail(blur) {
      context
        .drawImage(thumbnail, 0, 0, thumbnail.naturalWidth,
                  thumbnail.naturalHeight, 0, 0, canvas.width, canvas.height);
      StackBlur.canvasRGBA(canvas, 0, 0, canvas.width, canvas.height, blur);
    }
  }

  init() {
    const canvas = this.shadowRoot.querySelector('.progressiveMedia__canvas');

    const args = {
      thumbnail: this.shadowRoot.querySelector('.progressiveMedia__thumbnail'),
      blurRadius: this.blurRadius,
      context: canvas.getContext('2d'),
      wrapper: this,
      canvas: canvas,
    }
    if(args.thumbnail.complete) {
      return this._canvasBlur(args)
    }

    args.thumbnail.addEventListener('load', () => {
      return this._canvasBlur(args)
    })

  }

  _loadImage() {
    const blurdelay = this.blurDelay;//The delay to see the fade in.
    var component = this.shadowRoot.querySelector('.progressiveMedia');
    var image     = this.shadowRoot.querySelector('.progressiveMedia__image');
    //Load the image in. Once it's loaded, add a class to the component wrapper that fades in the image and fades out the canvas element.
    image.src = image.dataset.src;
    image.addEventListener('load', function onImageLoaded() {
      image.removeEventListener('load', onImageLoaded);
      
      // This delay is only set so the we can see the blur effect more clearly on page load  
      setTimeout(function () {
        component.classList.add('isImageLoaded');
      }, blurdelay);		
    });
  }
  
  _isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.y <= window.innerHeight
    );
  }

  firstUpdated() {
    const wrapper = this;
    window.addEventListener('scroll', () => {
      if(this._isElementInViewport(wrapper) && this._memoization[wrapper.name] !== 'in') {
        this._memoization[wrapper.name] = 'in'
        this._loadImage()
      }
    });
    setTimeout(()=>{
      this.init();
    }, 0)
  }

  render(){
    const { dataSrc, dataThumbnail, name } = this;
    return html`
    <section class="wrapper">
      <div class="aspect-ratio-fill">
        <div class="progressiveMedia">
          <canvas class="progressiveMedia__canvas" width="75" height="38.671875"></canvas>
          <img class="progressiveMedia__image" data-src="${dataSrc}" alt="${name}"/>
          <img class="progressiveMedia__thumbnail" src="${dataThumbnail}" alt="${name}"/>
        </div>
      </div>
    </section>
    `;
  }
}
// Register the new element with the browser.
customElements.define('progressive-image', ProgressiveImage);