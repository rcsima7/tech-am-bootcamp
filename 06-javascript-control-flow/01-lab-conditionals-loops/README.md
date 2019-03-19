# Conditionals and Loops

For all the exercises below, we will write our code in the main.js file and open the linked index.html in the browser. Open your browser console to see the results.

## Data structures practice

#### Array

Given an array, access some of the items, add a new item, and print the array's length.

```js
const mountRushmore = [ 'Washington', 'Jefferson', 'Roosevelt' ];

// Example: access Washington
console.log(mountRushmore[0]);

// Q1: access Roosevelt
console.log(); // write answer inside the console log

// Q2: add 'Lincoln' to the end of the array


// Q3: access Lincoln


// Q4: print length of the array


```

#### Objects

Comment out the code from the above exercises.

```js
const friend = {
  firstName: 'Jane',
  lastName: 'Doe'
};

// Q1: access friend's first name


// Q2: access friend's last name


// Q3a: change friend's last name to 'Foo'


// Q3b: access friend's last name to check that it is now 'Foo'
```

#### Combining Array with Object

```js
const myFriends = [];
const friend1 = {
  firstName: 'Jane',
  lastName: 'Doe',
  from: ['high school', 'university']
};

// Q1: create friend2 that models after friend1 (has firstName, lastName, from)


// Q2: add both friend1 and friend2 into the myFriends array


// Q3: print the myFriends array to console


```

## Conditionals

Comment out the code from the above exercises.

Starting at the bottom of your js file, create a variable `speed`. Write the conditional for a traffic stop. If speed is less than 10 `console.log` "I pulled you over because you were going too slow". If speed is more than 50 `console.log` "I pulled you over for going to fast".

Create a variable `tirePressure`. If tire pressure is less than 10 PSI `console.log` "I pulled you over because you are driving with a flat tire".

Create a variable `driverVision`. Assign an array value: `[6,6]`. If `driverVision` is less than 6/12, `console.log` "Sorry you can't drive".

Now, write some more complicated conditional logic:

If driverVision is over 6/6 set the speed variable to 60.

If speed is over 50 and tirePressure is under 10 or over 100 `console.log` "car crash".

If speed was under 10 and tirePressure was over 100 `console.log` "rolling to a stop".

If driverVision is over 6/12 and speed is over 50 `console.log` "car crash".

And if the car will crash, don't output the traffic stop text. Because, well, there's no longer a need to pull the driver over.

## Loops

Comment out the code from the above exercises.

Create a variable `i` and assign the initial value of 0. Write a while loop that `console.log` the value of `i` as long as `i` is less than 5. At the end of each iteration of the loop, increment the value of `i` by 1.

Next, write a for loop that goes through this array and prints every single item out from front to back:

```js
const ids = ['131231', '67234', '1231613', '823424', '7345245'];
```

Write another for loop that prints out the array backwards.

---

## Combining Conditionals, Loops, and Data structures

Now let's take a look at a real example of a data structure that is used in the Smartly.io app.

```js
const creatives = [
  {
    "select_existing": false,
    "status": "PAUSED",
    "type": 27,
    "page_id": "5c28982ef3fd8f56aa139d16",
    "instagram_actor_id": "1790432004339217",
    "post": {
      "type": "link",
      "message": "Test message for first creative",
      "link": "https://example.com/collections/all?utm_medium=social&utm_source=organic&utm_campaign=#CAMPAIGN_NAME#&utm_content=#AD_NAME#&utm_id=#SMARTLY_ID#",
      "call_to_action": {
        "type": "SHOP_NOW"
      },
      "published": false,
      "tracking": {
        "adobe": "inherit"
      },
      "picture": {
        "_id": "5c446f81f3fd8f0f090c0d33",
        "account_id": "5c25882bf3fd8f56aa139d146",
        "user_id": "5b14fbb9c7e28c61d837273163",
        "name": "Static_Ad_Image_Template_-_Shadow_layer-cat-This_side_should_be_darkened_by_image_template_layer.jpg",
        "size": 156612,
        "ext": "jpg",
        "removed": false,
        "type": "image/jpeg",
        "created_at": 1547988865,
        "hash": "8087276b25635cf148c38c241ce2fa46",
        "persistence_id": "uploadfiles/5c25882bf3fd8f56aa139d146/5c446f81f3fd8f0f090c0d33.jpg",
        "persistence_type": "s3",
        "height": 900,
        "width": 1200,
        "_created_at": 1547988865
      },
      "image_template_id": "5c446992f3fd8f74bb2f8633"
    },
    "name": "Link Ad"
  },
  {
    "select_existing": false,
    "status": "PAUSED",
    "type": 27,
    "_reduxId": "474c344a-0746-4e4d-93c8-6d97f9c8b1d6",
    "page_id": "5c25882ef3fd8f56aa139d16",
    "instagram_actor_id": "1790432004339217",
    "ad": {
      "view_tags": ""
    },
    "post": {
      "type": "link",
      "message": "Test message for second creative",
      "link": "https://example.com/collections/all?utm_medium=social&utm_source=organic&utm_campaign=#CAMPAIGN_NAME#&utm_content=#AD_NAME#&utm_id=#SMARTLY_ID#",
      "call_to_action": {
        "type": "SHOP_NOW"
      },
      "published": false,
      "tracking": {
        "adobe": "inherit"
      },
      "picture": {
        "_id": "5c446f81f3fd8f0f090c0d33",
        "account_id": "5c25882bf3fd8f56aa139d146",
        "user_id": "5b14fbb9c7e28c61d837273163",
        "name": "Static_Ad_Image_Template_-_Shadow_layer-cat-This_side_should_be_darkened_by_image_template_layer.jpg",
        "size": 156612,
        "ext": "jpg",
        "removed": false,
        "type": "image/jpeg",
        "created_at": 1547988865,
        "hash": "8087276b25635cf148c38c241ce2fa46",
        "persistence_id": "uploadfiles/5c25882bf3fd8f56aa139d146/5c446f81f3fd8f0f090c0d33.jpg",
        "persistence_type": "s3",
        "height": 900,
        "width": 1200,
        "_created_at": 1547988865
      },
      "image_template_id": "5c446992f3fd8f74bb2f8633"
    },
    "name": "Link Ad",
  },
  {
    "select_existing": true,
    "status": "PAUSED",
    "type": 27,
    "_reduxId": "0226f1f8-2e09-4a4c-aaa2-056d76c9fe00",
    "page_id": "5c25882ef3fd8f56aa139d16",
    "instagram_actor_id": "1790432004339217",
    "ad": {
      "view_tags": ""
    },
    "post": {
      "type": "link",
      "message": "Test message for third creative",
      "link": "https://example.com/collections/all?utm_medium=social&utm_source=organic&utm_campaign=#CAMPAIGN_NAME#&utm_content=#AD_NAME#&utm_id=#SMARTLY_ID#",
      "call_to_action": {
        "type": "SHOP_NOW"
      },
      "published": false,
      "tracking": {
        "adobe": "inherit"
      },
      "picture": {
        "_id": "5c446f81f3fd8f0f090c0d33",
        "account_id": "5c25882bf3fd8f56aa139d146",
        "user_id": "5b14fbb9c7e28c61d837273163",
        "name": "Static_Ad_Image_Template_-_Shadow_layer-cat-This_side_should_be_darkened_by_image_template_layer.jpg",
        "size": 156612,
        "ext": "jpg",
        "removed": false,
        "type": "image/jpeg",
        "created_at": 1547988865,
        "hash": "8087276b25635cf148c38c241ce2fa46",
        "persistence_id": "uploadfiles/5c25882bf3fd8f56aa139d146/5c446f81f3fd8f0f090c0d33.jpg",
        "persistence_type": "s3",
        "height": 900,
        "width": 1200,
        "_created_at": 1547988865
      },
      "image_template_id": "5c446992f3fd8f74bb2f8633"
    },
    "name": "Link Ad"
  }
]
```

Using this creatives array (which has been scrubbed of sensitive data), do the following:

- Write a loop that prints out the `type` code of each creative (eg. 27)
- Write a loop that prints out the creatives that are have `select_existing` value of `true` (print out the entire creative object)

#### Debug scenario

A client has many creatives setup in their campaign creation in Smartly.io app. But one of them seems to be configured to publish to the wrong page:

- Correct page ID: '5c25882ef3fd8f56aa139d16'
- All other page IDs are wrong for this campaign
 
Write a loop that systematically finds out which creative(s) is set to publish on a wrong Page. Each time a creative with the wrong Page ID is found, print that entire creative object.

__BONUS__: If all the creatives have been checked and none of them were found to have the wrong Page ID, print "All checked, all good" to the console. This helps you, as the person debugging the case, know that your loop has ran successfully and found no errors. (__Note__: You may need to temporarily change the original `creatives` array so that all Page IDs are correct.)
