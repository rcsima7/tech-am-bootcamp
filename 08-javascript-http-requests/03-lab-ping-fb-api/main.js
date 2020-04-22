function handleSubmit () {
  console.log('submit button was clicked');
  const campaignId = document.querySelector('#campaign-id-input');
  const accessToken = document.querySelector('#accesstoken-input');
  const appsecretproof = document.querySelector('#appsecretproof-input');

  console.log('campaignId:', campaignId.value);
  console.log('accessToken:', accessToken.value);
  console.log('appsecretproof:', appsecretproof.value);

  fetch(`https://graph.facebook.com/v3.1/${campaignId.value}?fields=id&access_token=${accessToken.value}&appsecret_proof=${appsecretproof.value}`)
    .then (function (response) {
      console.log(response.json);
    })
}

document.addEventListener('DOMContentLoaded', function () {
  const submit = document.querySelector('#submit-btn');
  submit.addEventListener('click', handleSubmit);

});

// 6111918826961
// EAAHeiXofApgBAIYh2Cl68GxMD7SE2mJMGgwZAzZCsH6BZAVoZBSCDrZCuzQufV9QvB7p4DbeElIqON1ya9qr9Ur8HcKqxs4ZBY8GZCHWCkBezhc7n8EScZBcjAu6DZAz03XKHs8D0aDjOrWD3IuFT6FlITt0adJIZAMUTZCeD3qKToa1ZCuRZApiihCGd9cAUMT6ysutiLhKu55ohZAu22tgAPYv1zcQFZBhEgQ99sZD
// 4109a8b2f512e0c222655be33ff9f43fd66c482a2172dadd3db8e67b5be24bed

// ,name,created_time,effective_status,objective,account_id,daily_budget