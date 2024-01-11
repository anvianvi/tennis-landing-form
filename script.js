document.addEventListener('DOMContentLoaded', function () {
  const crmForm = document.getElementById('crmForm');

  crmForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(crmForm);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log('Form Data:', formObject);

    fetch('https://your-crm-api-endpoint.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('CRM Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        crmForm.reset();
      });

    crmForm.reset();
  });
});