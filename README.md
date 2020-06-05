# Title
<!-- TODO add Title -->
Inventory tool for mythical shop owners.
<!-- TODO Add Link to Live Project -->



## MVP Scope

This <!-- TODO insert title instead of 'This' --> is an invetory tool for mythical shop owners.  As a shop owner(witches, orcs, elves, etc), one must create a profile by providing a username, email, and password to get started.  Once authenticated, they are forwarded to a page to add items to their inventory.  They'll also have the ability to update and remove items within that inventory.  Each user will only have access to their own inventory lists(s). 

### Built With

* bcryptjs
* body-parser
* connect-mongo
* ejs
* express
* express-ejs-layouts
* express-session
* method-override
* mongoDB
* mongoose
* Node.js



## Wireframe/ Design

### Wireframes
![Wireframe Image 1](/assets/images/inv-wireframe-1.png)
![Wireframe Image 2](/assets/images/inv-wireframe-2.png)
![Wireframe Image 3](/assets/images/inv-wireframe-3.png)
![Wireframe Image 4](/assets/images/inv-wireframe-4.png)

### Color Scheme/ Styling
![Color Collection](/assets/images/inv-color-collection.jpg)



## User Stories

### Non-authenticated Users can:
1. Register
	* For 1st-time users, they are prompted with a registration page. 
	* Enter username, email address, and password
	* Click 'Confirm' to finalize registration process.  Users are directed to the Inventory page

### Authenticated user can:
1. Login
	* Enter email/username and password
	* Once authenticated, users are directed to the Inventory page. This page has all of the create, update, and remove functionality in place. 

2. Adding items
	* Click onto the 'Add item' button. A smaller window pops up with fields to enter item details.
	* Enter item details.
	* Click onto submit.  This puts the new item into their inventory, the 'New item' window dissapears, and they're redirected to the Inventory page.

3. Update current items
	* Click onto the 'Edit' button.  A smaller window pops up with fields to edit item details.
	* Make necessary changes to the item's details
	* Click onto submit.  The selected item will update, the 'Edit item' window dissapears, and they're redirected to the Inventory page.

4. Remove items
	* Click onto the 'Delete' button.  A smaller window pops up asking if they're sure on removing the item
	* Click 'Yes' to confirm or 'No' if they change their mind.  Upon either selection, the inventory will update accordingly, this 'Remove items' window dissapears, and they redirected to the Inventory page.

5. Logout
	* Click onto the 'Logout' button.  Users will be redirected to the initial landing page.



## Data Models and ERD

### Users
* username: {type:String, required:true, unique:true},
* email: {type:String, required:true, unique:true},
* password: {type:String, required:true},
* lists: {type: mongoose.Schema.Types.ObjectID, ref:"Lists"},{timestamps:true}

### Lists
* name: {type:String, required:true},
* user: {type:mongoose.Schema.Types.ObjectID, ref:"User"}
* item: {type:mongoose.Schema.Types.ObjectID, ref:"Item"},{timestamps:true}

### Items
* name: {type:String, required:true},
* category: {type:String, required:true},
* price: {type:Number, required:true},
* quantity: {type:Number, required:true},
* reorderLevel: {type:Number, required:true}

### ERD
![ERD Diagram](/assets/images/inv-erd.png)



## Development Timeline
<!-- REVIEW -->

### Saturday - 5/30:
* set up base directories/files
* set up master repo
* set up submaster branch
* set up developer branches
* start css design

### Monday - 5/31:
* users can see navigation
* CRUD for lists
* add items model
* add items folder in views
* add sidenav
* add items controller
* added items ref to models

### Tuesday - 6/1:
* create user dashboard
* create style lists view
* CRUD for items model
* create user auth pages
* create landing page with routes to user auth pages

### Wednesday - 6/2:
* add lists model
* user reg and auth
* styling for list page
* dark theme styling
* modal windows

### Thursday - 6/3:
* all modals added
* dark theme switch
* lists and items models user specific
* finalize MVP

### Friday - 6/4:
- [x] - isaiah - add document title and favicon
- [x] - isaiah - inventory edit route replaces list name in header




MVP
- [ ] - jonathan - populate dashboard aside section with reorder items
	mongoose vampire, comparisons



Stretch
- [ ] - isaiah - register form validation with css
- [ ] - isaiah - html required for all fields ever



- [ ] - isaiah - replace landing page image with "final" version
- [ ] - jonathan - 404 page and routes
- [ ] - isaiah - 404 styling
- [ ] - jonathan - user should not see whether username or pass fails
- [ ] -  - add empty list notification
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
- [ ] -  - remove console.log throughout code


Extra Stretch
- [ ] -  - user profile page
- [ ] -  - object embedding
- [ ] -  - change welcome h1 tag from User to user.username
- [ ] -  - animate modal
- [ ] -  - information page/modal
- [ ] -  - css to apply to items that have a quantity fall below the reorder level
>>>>>>> submaster
>>>>>>> 164699751391223de41f531bf8eb4f7aeb89d30f



Extra Extra Stretch
- [ ] -  - item sorting
- [ ] -  - change password
- [ ] -  - forgot password
- [ ] -  - delete item modal/prompt
- [ ] -  - unique items (maybe add quantity fields for new total)

### Saturday - 6/5:
- [ ] -  - 

### Sunday - 6/6:
- [ ] -  - 



### Stretch Goals




<!-- Sources -->
<!-- checkbox styling - https://www.w3schools.com/howto/howto_css_switch.asp -->
<!-- dark theme coloring - https://www.behance.net/gallery/48666853/Engine-Dashboard-Personal-Account-Redesign-Concept -->
<!-- primary coloring - https://www.pinterest.com/pin/800444533761655082/ -->
<!-- layout styling - https://www.behance.net/gallery/90858523/Data-table-design-for-product-inventory-management -->
<!-- landing page styling - https://www.soundstripe.com/ -->
<!-- user reg styling - https://twitter.com/i/flow/signup -->