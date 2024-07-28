document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAge();
  });
  
  function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();
  
    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  
    document.getElementById('age').textContent = `Age: ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
  }
  