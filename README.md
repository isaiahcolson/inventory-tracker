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
- [x] - isaiah - item edit modal
- [x] - isaiah - delete list modal
- [x] - jonathan - fix item edit route and values
- [x] - isaiah - dark theme preferences
- [x] - jonathan - lists and items models user specific
- [x] - both - limit the characters in a list's title
- [x] - isaiah - set values for edit routes
- [x] - isaiah - dark mode styling fixes
- [x] - jonathan - add reorder level to items model
- [x] - jonathan - fix redirect for item update



- [ ] - isaiah - list create modal
	why does my fixed element have weird styling with opacity?
- [ ] - isaiah - list update (can we change the list title to input)
	hidden input
- [ ] - jonathan - populate dashboard aside section with reorder items
	mongoose vampire, comparisons



- [ ] - isaiah - add document title and favicon
- [ ] - isaiah - replace landing page image with "final" version
- [ ] - isaiah - register form validation with css
- [ ] - jonathan - 404 page and routes
- [ ] - isaiah - 404 styling
- [ ] - jonathan - user should not see whether username or pass fails
- [ ] -  - add empty list notification
- [ ] -  - html required for all fields ever
- [ ] -  - remove console



### Friday - 6/4:
- [ ] -  - 

### Saturday - 6/5:
- [ ] -  - 

### Sunday - 6/6:
- [ ] -  - 



### Stretch Goals
* allow multiple lists to be created and used
* dark theme styling
* automatic list generator
* user profile page
* add low reorder level items to dashboard aside list
* item sorting
* change password
* forgot password
* delete item modal/prompt
* unique items (maybe add quantity fields for new total)
* inventory edit route doesn't go to new page or modal, the input will appear in the list header
* object embedding
- [ ] -  - change welcome h1 tag from User to user.username
- [ ] -  - animate modal
- [ ] -  - information page/modal
- [ ] -  - some css to apply to items that have a quantity fall below the reorder level




<!-- Sources -->
<!-- checkbox styling - https://www.w3schools.com/howto/howto_css_switch.asp -->
<!-- dark theme coloring - https://www.behance.net/gallery/48666853/Engine-Dashboard-Personal-Account-Redesign-Concept -->
<!-- primary coloring - https://www.pinterest.com/pin/800444533761655082/ -->
<!-- layout styling - https://www.behance.net/gallery/90858523/Data-table-design-for-product-inventory-management -->
<!-- landing page styling - https://www.soundstripe.com/ -->
<!-- user reg styling - https://twitter.com/i/flow/signup -->