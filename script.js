const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navigation');

if (navToggle && navigation) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('active');
  });
}

function updateRecommendationText(inputId, targetIds) {
  const inputElement = document.getElementById(inputId);
  if (!inputElement) return;

  const updateTargets = () => {
    const value = inputElement.value.trim() || `[${inputElement.placeholder}]`;
    targetIds.forEach((targetId) => {
      const target = document.getElementById(targetId);
      if (target) {
        target.textContent = value;
      }
    });
  };

  inputElement.addEventListener('input', updateTargets);
  updateTargets();
}

document.addEventListener('DOMContentLoaded', () => {
  updateRecommendationText('recipient-name-input', ['recipient-name', 'recipient-greeting']);
  updateRecommendationText('recipient-role-input', ['recipient-role']);
  updateRecommendationText('facility-name-input', ['facility-name']);
  updateRecommendationText('deadline-date-input', ['deadline-date']);
});
