let age = 0
let day = ''
document.getElementById('press').addEventListener('click', myInput)
function myInput () {
  age = document.getElementById('enter-one').value
  age = parseInt(age)
  day = document.getElementById('enter-two').value
  if ((age <= 18) && (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday')) {
    document.getElementById('response').innerHTML = 'Time for school!'
  } else if ((age >= 18) && (day === 'monday' || day === 'tuesday' || day === 'wednesday', day === 'thursday' || day === 'friday')) {
    document.getElementById('response').innerHTML = 'Time to go to work!'
  } else if (day === 'saturday' || day === 'sunday') {
    document.getElementById('response').innerHTML = 'Time to relax for the weekend!'
  }
}
