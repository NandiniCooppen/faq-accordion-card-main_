// Function to add event listeners to create the accordion functionality
// Retrieve all 'details' elements from the document
function addAccordionEventListeners() {
  const details = document.querySelectorAll("details");
  const boxIllustration = document.querySelector(".main_article_illustration");

  // Function to close all details except the specified one
  const closeOtherDetails = (currentDetail) => {
    details.forEach((detail) => {
      if (detail !== currentDetail) {
        detail.open = false;
        const showAnswers = detail.querySelectorAll('.faq_answer');
        showAnswers.forEach((showAnswer) => {
          showAnswer.classList.remove('show');
        });
      }
    });
  };

  // Event listener for the toggle event on details elements
  const handleToggle = (event) => {
    const currentDetail = event.target;

    // Close other details when the current detail is opened
    if (currentDetail.open) {
      closeOtherDetails(currentDetail);
      boxIllustration.classList.add('active_faq');

      const showAnswers = currentDetail.querySelectorAll('.faq_answer');
      showAnswers.forEach((showAnswer) => {
        showAnswer.classList.add('show');
      });
    } else {
      const openDetails = Array.from(details).filter(detail => detail.open);
      if (openDetails.length === 0) {
        boxIllustration.classList.remove('active_faq');
      }

      const showAnswers = currentDetail.querySelectorAll('.faq_answer');
      showAnswers.forEach((showAnswer) => {
        showAnswer.classList.remove('show');
      });
    }
  };

  // Add event listeners to each details element
  details.forEach((detail, index) => {
    detail.addEventListener("toggle", handleToggle);

    // Open the second accordion initially
    if (index === 1) {
      detail.open = true;
      const showAnswers = detail.querySelectorAll('.faq_answer');
      showAnswers.forEach((showAnswer) => {
        showAnswer.classList.add('show');
      });
    }
  });
}

// Call the function to add event listeners and create the accordion
addAccordionEventListeners();
