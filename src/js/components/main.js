function main() {
    let items = document.querySelectorAll('.main__item-title-box');

    items.forEach((card) => {
        card.style.transition = `transform 0.3s`;
    });
}


export default main