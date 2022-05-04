
const likes = document.querySelectorAll('.likes-passive')

    likes.forEach(function (like) {
        const numberLike = like.querySelector('.number-hearts')
        const heart = like.querySelector('.heart')

        like.addEventListener('click', function () {  
            if (like.classList.contains('likes-active')) {
                numberLike.textContent--;
            } else {
                numberLike.textContent++;
            }

            like.classList.toggle('likes-active')
            heart.classList.toggle('heart-active')
        })
})
