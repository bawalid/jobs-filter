const filters = $(".filter");
const cat = $(".cat")
let filtersTab = [];
let exist = false;


filters.hide();

cat.click(function () {
    const filterName = this.outerText;
    filters.show();
    filtersTab.forEach(function (r) {
        if (r === filterName) {
            exist = true;
        }
    });
    if (!exist) {
        $('.fItems').append('<div class="filterItems"><div class="filterX">' + filterName + '</div><div class="filterClose"><i class="fas fa-times"></i></div></div>');
        filtersTab.push(filterName);
        filtredCards(filtersTab);
    }
    exist = false;
    $('.filterClose').click(function () {
        let filter = $(this)[0].previousElementSibling.innerText;
        $(this).parent().remove();
        filtersTab = filtersTab.filter(x => !(x === filter));
        filtredCards(filtersTab);
        if (filtersTab.length === 0) {
            filters.hide();
            $('.card').show();
        }
    });
});

$('.clear').click(function () {
    filtersTab = [];
    filters.hide();
    $('.card').show();
});

function filtredCards(f) {
    const cards = $('.card');
    cards.show();
    for (let h = 0; h < f.length; h++) {
        for (let i = 0; i < cards.length; i++) {
            let find = false;
            let card = $(cards[i]);
            let cardFilters = card[0].childNodes[7].children;
            for (let j = 0; j < cardFilters.length; j++) {
                let filterN = cardFilters[j].dataset.name;
                if (filterN === f[h]) {
                    find = true;
                }
            }
            if (!find) {
                card.hide();
            }
        }
    }
}