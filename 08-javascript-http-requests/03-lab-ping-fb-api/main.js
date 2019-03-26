function handleSubmit () {
  console.log('submit button was clicked');
  const campaignId = document.querySelector('#campaign-id-input');
  const accessToken = document.querySelector('#accesstoken-input');
  const appsecretproof = document.querySelector('#appsecretproof-input');

  console.log('campaignId:', campaignId.value);
  console.log('accessToken:', accessToken.value);
  console.log('appsecretproof:', appsecretproof.value);
}

document.addEventListener('DOMContentLoaded', function () {
  const submit = document.querySelector('#submit-btn');
  submit.addEventListener('click', handleSubmit);
});