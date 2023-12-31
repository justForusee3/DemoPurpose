import { Lightning } from "@lightningjs/sdk";

export class MyButton extends Lightning.Component {
  static _template() {
    return {
      w: 250,
      h: 350,
      
      y: 100,
      Image: {
        x: 80,
        w: w => w,
        h: h => h - 50,
      },
    };
  }



  set item(obj) {
    const { label, src, videoUrl } = obj;
    this._videoUrl = videoUrl;
    this.patch({
      Image: { src },
    });
  }

  setFocus(isFocused) {
    if (isFocused) {
      this._focus();
    } else {
      this._unfocus();
    }
  }
  
  _handleEnter() {
    //console.log('Enter pressed');
    // this.signal("onClick");
    this.fireAncestors('$onItemSelect', {
     // videoUrl: this._videoUrl
      // item: this._item,

    })

  }

  _focus() {
    console.log('Button Focus');
    this.patch({
      smooth: { color: 0xff005500, scale: 1.1 },
      shader: { type: Lightning.shaders.Outline, stroke: 1.1, color: 0xff09f676 },
    });
  }


  _unfocus() {
    console.log('Button Unfocus');
    this.patch({
      smooth: { color: 0xffffffff, scale: 1.0 },
      shader: { type: Lightning.shaders.Outline, stroke: 0, color: 0x0000000 },
    });
  }
}