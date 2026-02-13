// Logic
/*
- Query the ratings
- Add a click event when a rating is clicked and grab the value
- On submit, pass that value to the span to hold the value in the thank you container
- Hide ratings container and show thank you container
 */

//Query DOM
const ratings = document.querySelectorAll('.rating')
const submitBtn = document.querySelector('button')
const ratingStateContainer = document.querySelector('.rating-state-container')
const thankYouContainer = document.querySelector('.thank-you-container')
const selectedRating = document.getElementById('selected-rating')

// Add click event to each rating
ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    // Remove active class from all ratings before adding to the clicked one
    ratings.forEach((r) => r.classList.remove('active'))
    rating.classList.add('active')
    selectedRating.textContent = rating.textContent
  })
})

// Add click event to submit button
submitBtn.addEventListener('click', () => {
  // Check if a rating is selected before proceeding
  if (selectedRating.textContent) {
    ratingStateContainer.style.display = 'none'
    thankYouContainer.style.display = 'block'
  } else {
    alert('Please select a rating before submitting.')
  }
})
