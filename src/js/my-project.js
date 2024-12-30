

export default function initProjectLoadMore() {
    document.addEventListener("DOMContentLoaded", function() {
        const loadMoreButton = document.querySelector('.load-more-btn');
        const projectCards = document.querySelectorAll('.my-project-card.js-none');
        let currentIndex = 0;
        const cardsToShow = 3;

        function showMoreCards() {
            let cardsShown = 0;
            while (cardsShown < cardsToShow && currentIndex < projectCards.length) {
                projectCards[currentIndex].classList.remove('js-none');
                currentIndex++;
                cardsShown++;
            }

            if (currentIndex >= projectCards.length) {
                loadMoreButton.style.display = 'none';
            }
        }

        loadMoreButton.addEventListener('click', showMoreCards);
    });
}