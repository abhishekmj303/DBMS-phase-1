const cards = document.querySelectorAll('.separate-card');
const duration = 350;

$("a[href]").click(function (e){
  e.preventDefault();
    if (this.href) {
        var target = this.href;
        setTimeout(function(){
            window.location = target;
        }, duration+150);
    }
})

const onCardClick = async (e) => {
    const card = e.currentTarget;
    // clone the card
    const cardClone = card.cloneNode(true);
    cardClone.classList.remove('separate-card');
    cardClone.classList.add('outer-card');
    cardClone.classList.add('card-expanded');
    // get the location of the card in the view
    const {top, left, width, height} = card.getBoundingClientRect();
    // position the clone on top of the original
    cardClone.style.position = 'fixed';
    cardClone.style.top = top + 'px';
    cardClone.style.left = left + 'px';
    cardClone.style.width = width + 'px';
    cardClone.style.height = height + 'px';
    // hide the original card with opacity
    card.style.opacity = '0';
    // add card to the body tag
    document.body.appendChild(cardClone);
    // expand the clone card
    await toggleExpansion(cardClone, {top: "-4px", left: "-4px", width: '100vw', height: '100vh'});
};

const toggleExpansion = (element, to) => {
return new Promise((res) => {
    element.animate([
        {
            top: to.top,
            left: to.left,
            width: to.width,
            height: to.height,
            margin: 0,
            padding: 0
        }
        ], {duration, fill: 'forwards', ease: 'ease-in'})
    setTimeout(res, duration);
    })
}
cards.forEach(card => card.addEventListener('click', onCardClick));
