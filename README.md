MVP Scope

	This is an invetory tool for shop owners.  As a shop owner (witches, orcs, elves, etc), one must create a username/password to get started.  Once authenticated, they are forwarded to a page to add items to their inventory.  They'll also have the ability to update and remove items within that inventory.  Each user will only have access to their own inventory. 

Technologies in play

- bootstrap
- mongoDB
- mongoose
- NodeJs
- bcrypt
- body parser
- express/sessions


Non-authenticated Users can:

1. Register
- For 1st-time users, they are prompted with a registration page. 
- Enter username, email address, and password
- Click 'Confirm' to finalize registration process.  Users are directed to the Inventory page


Authenticated user can:
1. Login
- Enter email/username and password
- Once authenticated, users are directed to the Inventory page. This page has all of the create, update, and remove functionality in place. 

2. Adding items
- Click onto the 'Add item' button. A smaller window pops up with fields to enter item details.
- Enter item details.
- Click onto submit.  This puts the new item into their inventory, the 'New item' window dissapears, and they're redirected to the Inventory page.

3. Update current items
- Click onto the 'Edit' button.  A smaller window pops up with fields to edit item details.
- Make necessary changes to the item's details
- Click onto submit.  The selected item will update, the 'Edit item' window dissapears, and they're redirected to the Inventory page.

4. Remove items
- Click onto the 'Delete' button.  A smaller window pops up asking if they're sure on removing the item
- Click 'Yes' to confirm or 'No' if they change their mind.  Upon either selection, the inventory will update accordingly, this 'Remove items' window dissapears, and they redirected to the Inventory page.

5. Logout
- Click onto the 'Logout' button.  Users will be redirected to the initial landing page.


Database Models and ERD

User
Username: { type: String, required: true, unique: true },
Email: { type: String, required: true, unique: true },
Password: { type: String, required: true },
List: {
	type: mongoose.Schema.Types.ObjectID,
	ref: "Lists",
	},
    { timestamps: true }
);


Lists
Name: { type: String, required: true },
User: {
	type: mongoose.Schema.Types.ObjectID,
	ref: "User",
	}
Item: {
	type: mongoose.Schema.Types.ObjectID,
	ref: "Item",
	},
    { timestamps: true }
);

Item
Name: { type: String, required: true },
Category: { type: String, required: true },
Price: { type: Number, required: true },
Quanity: { type: Number, required: true },
Reorder level: { type: Number, required: true }




Development Timeline

Saturday Sprint:
- set up base directories/files
- set up master repo
- set up submaster branch
- set up developer branches
- css design starts

Monday Sprint:
- users can see navigation
- users can see items in inventory
- users can add items
- users can log item

Tuesday Sprint:
- full CRUD & MPV
- users can edit item
- users can remove items

Wednesday Sprint:
- add multiple lists
- dark theme styling

Thursday Sprint:
- clean up code
- finalize styling


Stretch Goals
- allow multiple lists to be created and used
- dark theme styling
- automatic item generator for creature-specific users
