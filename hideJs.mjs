class hideJs {
  Neutral() {
    this.hideContext();
    this.hideDevTool();
    this.hideImageDrag();
    this.disableSelectAll();
  }
  hideContext() {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }
  hideSource() {
    document.onkeydown = (e) => {
      if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) return false;
    };
  }
  hideConsole() {
    document.onkeydown = (e) => {
      if (this.press(e, "I") || this.press(e, "J")) return false;
    };
  }
  hideElements() {
    document.onkeydown = (e) => {
      if (this.press(e, "C")) return false;
    };
  }
  hideDevTool() {
    document.onkeydown = (e) => {
      if (
        event.keyCode === 123 ||  // F12
        this.press(e, "I") ||
        this.press(e, "J") ||
        this.press(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      )
        return false;
    };
  }
  hideImageDrag() {
    const img = document.querySelectorAll("img");
    for (let i = 0; i < img.length; i++) {
      img[i].ondragstart = () => {
        return false;
      };
    }
  }
  disableSelectAll(){
    document.body.style.userSelect = "none";
  }
  disableDownloadPage(){
    document.onkeydown = (e) => {
      if (this.preS(e, "S")) return false;
    };
  }
  disable(arr){
    for(let i=0; i < arr.length; i++){
      if(arr[i] == "context"){
        this.hideContext();
      }
      if(arr[i] == "source"){
        this.hideSource();
      }
      if(arr[i] == "console"){
        this.hideConsole();
      }
      if(arr[i] == "elements"){
        this.hideElements();
      }
      if(arr[i] == "dev_tool"){
        this.hideDevTool();
      }
      if(arr[i] == "image_drag"){
        this.hideImageDrag();
      }
      if(arr[i] == "select"){
        this.disableSelectAll();
      }
      if(arr[i] == "all"){
        this.Neutral();
      }
    }
  }
  press(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }
  preS(e, keyCode) {
    return e.ctrlKey && e.keyCode === keyCode.charCodeAt(0);
  }
}

export { hideJs };
