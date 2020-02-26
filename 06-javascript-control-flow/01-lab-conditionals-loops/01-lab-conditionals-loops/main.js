console.log('boom');

//EXERCISE1////////////////////////////////////////////////////
// const mountRushmore = [ 'Washington', 'Jefferson', 'Roosevelt' ];

// // Example: access Washington
// console.log(mountRushmore[0]);

// // Q1: access Roosevelt
// console.log(mountRushmore[2]); // write answer inside the console log

// // Q2: add 'Lincoln' to the end of the array
// console.log(mountRushmore.push('Lincoln'));

// // Q3: access Lincoln
// console.log(mountRushmore[3]);

// // Q4: print length of the array
// console.log(mountRushmore.length)

//EXERCISE2////////////////////////////////////////////////////
// const friend = {
//     firstName: 'Jane',
//     lastName: 'Doe'
//   };
  
//   // Q1: access friend's first name
//   console.log(friend.firstName);
  
//   // Q2: access friend's last name
//   console.log(friend.lastName);
  
//   // Q3a: change friend's last name to 'Foo'
//   friend.lastName = 'Foo';
//   console.log(friend.lastName);
  
//   // Q3b: access friend's last name to check that it is now 'Foo'
//   console.log(friend.lastName);

  //EXERCISE3////////////////////////////////////////////////////
  
// const friend1 = {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   from: ['high school', 'university']
// };

// Q1: create friend2 that models after friend1 (has firstName, lastName, from)
// const friend2 = {
//     firstName: 'Martin',
//     lastName: 'Love',
//     from: ['city', 'state']
//   };

// // Q2: add both friend1 and friend2 into the myFriends array
// const myFriends = [friend1, friend2 ];

// // Q3: print the myFriends array to console
// console.log(myFriends);

//EXERCISE4////////////////////////////////////////////////////

// //Speed:
// let speed = 9;
// if (speed < 50) {
//   console.log('I pulled you over because you were going too slow');
// }
// else {
//   console.log('I pulled you over for going to fast');
// }

// //Tire pressure:
// let tirePressure = 101;
// if (tirePressure < 10) {
//   console.log('I pulled you over because you are driving with a flat tire');
// }

// //Driver vision:
// let driverVision = [10];
// if (driverVision < 12) {
//   console.log('Sorry you can\'t drive.');
// }

// //Complex Conditional:
// if (driverVision > 6) {
//   speed = 60;
// }
// if (speed > 50 && tirePressure < 10 | tirePressure > 100) {
//   console.log('car crash');
// };
// if (speed < 10 && tirePressure > 100) {
//   console.log('rolling to a stop');
// }
// if (driverVision > 6 && speed > 50) {
//   console.log('car crash');
// }
// // if (console.log = ('car crash')) {
// //   console.log('works');

//EXERCISE5////////////////////////////////////////////////////
// let i = 0;
// while (i<=10) {
//   console.log(i);
//   i++;
// }

// const ids = ['131231', '67234', '1231613', '823424', '7345245'];
// // for (id = 0; id <= ids.length; id++ ) {
// //   console.log(ids[id]);
// // }

// for (id = 0; id <= ids.length; id++) {
//   (console.log(ids[id]));
// }

// for (id = ids.length; id >= 0; id--) {
//   (console.log(ids[id]));
// }

//EXERCISE6////////////////////////////////////////////////////
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

// - Write a loop that prints out the `type` code of each creative (eg. 27)
// for (i = 0; i < creatives.length; i++) {
//    console.log(creatives[i].type);
//   }

// - Write a loop that prints out the creatives that are have `select_existing` value of `true` (print out the entire creative object)
// for (i = 0; i < creatives.length; i++) {
//   if (creatives[i].select_existing === 'true') {
//     console.log(creatives[i]);
//   }
//   else {
//     console.log('not true')
//   }
//  }

// #### Debug scenario
// A client has many creatives setup in their campaign creation in Smartly.io app. But one of them seems to be configured to publish to the wrong page:
// - Correct page ID: '5c25882ef3fd8f56aa139d16'
// - All other page IDs are wrong for this campaign
 
// Write a loop that systematically finds out which creative(s) is set to publish on a wrong Page. Each time a creative with the wrong Page ID is found, print that entire creative object.
// for (i = 0; i < creatives.length; i++) {
//   if (creatives[i].page_id != '5c25882ef3fd8f56aa139d16') {
//     console.log(creatives[i]);
//   }
//   else {
//     console.log('Wrong poage id');
//   }
// }

// __BONUS__: If all the creatives have been checked and none of them were found to have the wrong Page ID, print "All checked, all good" to the console. This helps you, as the person debugging the case, know that your loop has ran successfully and found no errors. (__Note__: You may need to temporarily change the original `creatives` array so that all Page IDs are correct.)
// for (i = 0; i < creatives.length; i++) {
//   creatives[i].page_id = '5c25882ef3fd8f56aa139d16';
//   console.log(creatives[i].page_id);
// }

// for (i = 0; i < creatives.length; i++) {
//     if (creatives[i].page_id != '5c25882ef3fd8f56aa139d16') {
//       console.log(creatives[i]);
//     }
//     else if (creatives[i].page_id === '5c25882ef3fd8f56aa139d16') {
//       console.log('Right page id for creative ' + i);
//     }
//   }