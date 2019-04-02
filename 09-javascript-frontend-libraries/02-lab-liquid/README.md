# Use Liquid to solve customer problems

In this lab, you are given a few scenarios where a Smartly customer is asking for help with setting up their Image Templates for Dynamic Ads.

Your mission, should you choose to accept it, is to #solvecustomerproblems.

### Setup

* Ensure you have a demo account to work with in the Smartly app; preferably your own so you don't mess up someone else's setup
* Pretend this is your client's JSON feed: https://drive.google.com/uc?export=view&id=1L5elA-k5SB_e9ke9KaczQIie6lKb1AV5 (please do not share this) - set it up as a new feed in a newly created Dynamic Ads Catalog (Product vertical)

You will use this Catalog as the basis for the rest of the lab. Try and use an __image template preset__ as the basis so it looks aesthetically OK.

### 1. Client wants to show discount percentage

Requirements:

* Discount percentage is calculated based on `sale_price` and `price` fields
* Don't show decimal points, eg. 23% not 23.16%


### 2. Client wants to show only first 20 characters of description

Requirements:

* You can do this in Feed settings or Image Template editor directly, doesn't matter to client
* Example: "【dress】7分袖切替Aライン大裾ウェスト絞りミドル丈デートワンピース" --> "	【dress】7分袖切替Aライン大..."


### 3. Client wants to show ¥¥¥ signs to indicate price-iness of items

Requirements:

* Use `price` value
* Range of 1-5 Yen signs: ¥ to ¥¥¥¥¥
* ¥: below 1000 JPY
* ¥¥: 1001 - 1500 JPY
* ¥¥¥: 1501 - 2000 JPY
* ¥¥¥¥: 2001 - 2500 JPY
* ¥¥¥¥¥: above 2501 JPY

### Bonus: Client wants to show price with thousand comma separators

This one is difficult because it forces you to do it within Feed settings and not the Image Template editor. Try and make it happen yourself, and if you can't, search Confluence for a ready-made solution!

Requirements:

* `price` is without comma separators now because Facebook expects it that way
* A custom label in the Feed should be used for this, so that it can also be used in the Creative's copy (not just Image Template)
* Example: 5600 JPY --> 5,600 JPY

## Resources

* Useful Liquid markups [Confluence page](https://confluence.smartly.io/display/SO/Useful+Liquid+markups). For this lab, only refer to this if you are stuck! Contains solutions to some questions.