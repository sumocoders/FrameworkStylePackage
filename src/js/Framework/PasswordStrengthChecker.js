import axios from 'axios'
import { debounce } from 'lodash'

export default function passwordStrengthChecker () {
  const passwordInput = document.querySelectorAll('[data-role="check-password"] input[type="password"]')[0]
  const meterSections = document.querySelectorAll('.meter-section')

  const debounced = debounce(getStrength, 250, { maxWait: 750, leading: true, trailing: true })
  if (passwordInput) passwordInput.addEventListener('input', debounced)

  function getStrength () {
    const password = passwordInput.value
    const dataRoute = passwordInput.closest('[data-route]').dataset.route

    axios.post(dataRoute, {
      password: password
    })
      .then(function (response) {
        updateMeter(response.data.strength)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  function updateMeter (strength) {
    // Remove all strength classes
    meterSections.forEach((section) => {
      section.classList.remove('weak', 'medium', 'strong', 'very-strong')
    })

    // Add the appropriate strength class based on the strength value
    if (strength === 0) {
      meterSections[0].classList.add('weak')
    } else if (strength === 1) {
      meterSections[0].classList.add('medium')
      meterSections[1].classList.add('medium')
    } else if (strength === 2) {
      meterSections[0].classList.add('strong')
      meterSections[1].classList.add('strong')
      meterSections[2].classList.add('strong')
    } else if (strength === 3) {
      meterSections[0].classList.add('very-strong')
      meterSections[1].classList.add('very-strong')
      meterSections[2].classList.add('very-strong')
      meterSections[3].classList.add('very-strong')
    }
  }
}
