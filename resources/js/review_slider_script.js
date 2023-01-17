
const reviewCardContainer = document.getElementById('review_container')

const starSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"> <polygon   points="6.48,6.5 -0.38,7.58 4.67,12.45 3.59,19.48 9.85,16.24 16.03,19.48 14.95,12.63 20,7.58 13.15,6.68 9.85,0.13 " /></svg>'

const allreviews = [
    {
        id: 'zfiusyhdbcv',
        clientName: 'Alen',
        clientReview: 'Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet',
        reviewRating: 5,
        img: './resources/images/review_profile_img/person_1.jpg'
    },
    {
        id: 'njiusyhdbfb',
        clientName: 'Alen',
        clientReview: 'Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet',
        reviewRating: 5,
        img: './resources/images/review_profile_img/person_2.jpg'
    },
    {
        id: 'dfzviusyhdbvv',
        clientName: 'Alen',
        clientReview: 'Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet',
        reviewRating: 4,
        img: './resources/images/review_profile_img/person_3.jpg'
    },
    {
        id: 'xvxiusyhdbvv',
        clientName: 'Alen',
        clientReview: 'Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet',
        reviewRating: 5,
        img: './resources/images/review_profile_img/person_4.jpg'
    },
    {
        id: 'zfiusyhdbcv',
        clientName: 'Alen',
        clientReview: 'Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet',
        reviewRating: 5,
        img: './resources/images/review_profile_img/person_1.jpg'
    },
    {
        id: 'njiusyhdbfb',
        clientName: 'Alen',
        clientReview: 'Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet Lorem ipsum doller sit amet',
        reviewRating: 5,
        img: './resources/images/review_profile_img/person_2.jpg'
    },
]



renderReviewCard = () => {
    for (let i = 0; i < allreviews.length; i++) {
        let rating = allreviews[i]?.reviewRating
        let reviewCard = document.createElement('div');
        reviewCard.classList.add('review_card');

        const renderRating = () => {            

            if (rating == 1) {
                return starSvg
            }
            else if (rating == 2) {
                return starSvg + starSvg
            }
            else if (rating == 3) {
                return starSvg + starSvg + starSvg
            }
            else if (rating == 4) {
                return starSvg + starSvg + starSvg + starSvg
            }
            else if (rating == 5) {
                return starSvg + starSvg + starSvg + starSvg + starSvg
            }
            else {
                return
            }
        }
        reviewCard.innerHTML = `
        <img src=${allreviews[i]?.img} class="avatar">
        <h3>${allreviews[i]?.clientName}</h3>
        <div class="content">
            <p>"${allreviews[i]?.clientReview}"</p>
            <div class="review_star " id="review_star_${i}" >${renderRating()}  
            </div>
        </div>
        `
        reviewCardContainer.appendChild(reviewCard)


    }
}

renderReviewCard()



const nextSlide = () => {
    const widthItem = document.querySelector('.review_card').offsetWidth;
    console.log(widthItem)
    document.getElementById('reviewList').scrollLeft += widthItem;
}
const previousSlide = () => {
    const widthItem = document.querySelector('.review_card').offsetWidth;
    document.getElementById('reviewList').scrollLeft -= widthItem;
}

