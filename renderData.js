class CoctailRenderer {
  constructor(coctail) {
    this.coctail = coctail;
  }

  render() {
    return `<div class="coctails__item">${this.renderTitle()} ${this.renderImage()} ${this.renderBody()} </div>`;
  }

  renderTitle() {
    return `<div class="coctails__name">${this.coctail.strDrink}</div>`;
  }

  renderImage() {
    return `<div class="coctails__img"><img src = "${this.coctail.strDrinkThumb}"></div>`;
  }

  renderBody() {
    return `<div class="coctails__info">
                <div class="coctails__info--text">${this.coctail.strCategory}</div> 
                <div class="coctails__info--text">${this.coctail.strInstructions}</div>
                <div class="coctails__info--text">${this.coctail.strGlass}</div>
            </div>`;
  }
}

class AlcoholicCoctailRenderer extends CoctailRenderer {
  renderBody() {
    return `<div class="coctails__age"><span>+18</span></div>
            ${super.renderBody()}`;
  }
}

export { CoctailRenderer, AlcoholicCoctailRenderer };
