class easyloader {
  constructor({ background = "#000000", path = "spinner.svg" }) {
    this.background = background;
    this.path = path;
  }
  drawLoader() {
    /* creating a icon div */
    const loaderDiv = document.createElement("div");
    loaderDiv.id = "Custom";
    loaderDiv.innerHTML = `<img id="icon-image" src=${this.path}>`;
    document.body.appendChild(loaderDiv);

    let imgIcon = document.getElementById("icon-image");

    /* styling the div */
    loaderDiv.style.cssText = ` align-items: center;
  background-color:${this.background};
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100`;

    /* design for image */
    imgIcon.style.cssText = ` width: 300px;
  height: 300px`;

    /* function to toggle the display of icon div */
    window.onload = (event) => {
      document.getElementById("Custom").style.display = "none";
    };
  }

  generateLoader() {
    this.drawLoader();
  }
}

module.exports.easyloader = easyloader;
