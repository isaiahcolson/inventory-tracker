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
- [x] - both - set up base directories/files
- [x] - both - set up master repo
- [x] - both - set up submaster branch
- [x] - both - set up developer branches
- [x] - isaiah - css design starts

### Monday - 5/31:
- [x] - jonathan - organize views folder
- [x] - jonathan - users can see navigation
- [x] - isaiah - styling reference sheet
- [x] - jonathan - CRUD for lists
- [x] - isaiah - transfer work from index.ejs to partials/header.ejs
- [X] - jonathan - add items model
- [x] - isaiah - google font chosen and added
- [x] - jonathan - add items folder in views
- [x] - isaiah - sidenav styling
- [x] - jonathan - add items controller
- [x] - jonathan - added items ref to models
- [x] - isaiah - fix main styling color issue

### Tuesday - 6/1:
- [x] - isaiah - update colors
- [x] - isaiah - add sidenav to dashboard
- [x] - isaiah - split dashboard, add right column list
- [x] - isaiah - add welcome block
- [x] - isaiah - add color to welcome block
- [x] - isaiah - fix lists view
- [x] - isaiah - add content to dashboard aside


- [ ] - jonathan - CRUD for items model


<!-- TODO fix main height, elements that are too long are cut off -->
<!-- TODO sidenav link should have popup with delete form -->
- [ ] - isaiah - account sign up page styled
- [ ] -  - routes for sign up and log in pages
- [ ] -  - users can edit item
- [ ] -  - users can sign up for an account



### Wednesday - 6/2:
- [x] - jonathan - add multiple lists
- [ ] -  - dark theme styling
- [ ] -  - full CRUD & MPV
- [ ] -  - popup window

### Thursday - 6/3:
- [ ] -  - clean up code
- [ ] -  - finalize styling



### Stretch Goals
* allow multiple lists to be created and used
* dark theme styling
* automatic item generator for creature-specific users
