# Nut Index
Inventory tool for businesses.
<!-- TODO Add Link to Live Project -->



## MVP Scope

'Nut Index' is an invetory tool for businesses.  As a business owner, one must create a profile by providing a username, email, and password to get started.  Once authenticated, they are forwarded to a dashboard to add items to their inventory.  They'll also have the ability to update and remove items within that inventory.  Each user will only have access to their own inventory list(s). 

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
	* Click 'Confirm' to finalize registration process.  Users are directed to the login page

### Authenticated user can:
1. Login
	* Enter username and password
	* Once authenticated, users are directed to the dashboard. This page the user can see all of their lists, add new lists, and see all items that need to be reordered.

2. Adding List
	* Click onto the 'Add List' button. A pop up window prompts the user to enter a list name.
	* After entering the list name, a user hits 'Create' and the list appears in the dashboard and the user is redirected to the new created list's page

3. Adding items
	* Click onto the 'Add item' button. A smaller window pops up with fields to enter item details.
	* Enter item details.
	* Click onto submit.  This puts the new item into their inventory, the 'New item' window dissapears, and they're redirected to the Inventory page.

4. Update current items
	* Click onto the 'Edit' button.  A smaller window pops up with fields to edit item details.
	* Make necessary changes to the item's details
	* Click onto submit.  The selected item will update, the 'Edit item' window dissapears, and they're redirected to the Inventory page.

5. Remove items
	* Click onto the 'Delete' button to remove item with no prompts.
	* The inventory will update accordingly.

6. Logout
	* Click onto the 'Logout' button.  Users will be redirected to the initial landing page.



## Data Models and ERD

### Users
* username
* email
* password
* lists

### Lists
* name
* items
* user

### Items
* name
* category
* price
* quantity
* reorderLevel
* list


### ERD
![ERD Diagram](/assets/images/inv-erd.png)



## Development Timeline

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
* add document title and favicon
* inventory edit route replaces list name in header
* populate dashboard aside section with reorder items
* change welcome h1 tag from User to user.username
* add empty list notification for aside
* 404 page and routes
* register form validation with css

### Saturday - 6/5:
* login form validation with css
* add labels for inputs
* cleanup code
* add overflow scroll to aside section
* 500 and 404 styling
* css applied to items that have a quantity fall below the reorder level
* add empty list notification for items and lists

### Sunday - 6/6:
* object reorder shows up in other user accounts
* users can access other users pages through these links
* remove or hide unused pages



### Stretch Goals
* user profile page
* object embedding
* information page/modal
* animate modal
* item sorting
* change password
* forgot password
* username not case sensitive
* unique items (add quantity fields for new total)



<!-- Sources -->
<!-- checkbox styling - https://www.w3schools.com/howto/howto_css_switch.asp -->
<!-- dark theme coloring - https://www.behance.net/gallery/48666853/Engine-Dashboard-Personal-Account-Redesign-Concept -->
<!-- primary coloring - https://www.pinterest.com/pin/800444533761655082/ -->
<!-- layout styling - https://www.behance.net/gallery/90858523/Data-table-design-for-product-inventory-management -->
<!-- landing page styling - https://www.soundstripe.com/ -->
<!-- user reg styling - https://twitter.com/i/flow/signup -->