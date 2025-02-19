# Lewis Bull - Pictogram

**Developer - Lewis Bull**

This repository contains the API set up using Django REST Framework for the FitShare front-end application
[Live Website here](https://pictogram-project5-4fab6a1a47d8.herokuapp.com/)

## User Stories

The back-end section of the Pictogram project focuses on its administration side and covers one user story:

As an admin, I want to be able to create, edit, and delete users, posts and likes, so that I can have control over the content of the application and remove any inappropriate content.

Users Model
The Profile model contains the following fields: username, bio, profile image, Followers.
One-to-one relation between the username  field and the user field in the posts model
Default profile image is used if no image is uploaded.
The bio is unable to be empty to avoid errors

Post Model
The Post model contains the following fields: user, post_image, created_at, likes
Foreign key relation with the Users


## Database: 
The following models were created to represent the database model structure of the application:
![image](https://github.com/user-attachments/assets/67fa2742-f464-4dd3-8842-800e84c97969)

## Technologies Used

**Languages and Frameworks**
 - Python
 - Django

**Libraries and Tools**
 - Cloudinary to store static files.
 - dj-database-url to access the database correctly
 - Git to upload changes to github
 - GitHub was used as a remote repository to store project code.
 - Django REST Framework was used to build the back-end API.
 - Pillow was used for image processing and validation.
 - Psycopg2 was used as a PostgreSQL database adapter for Python.
 - PostgreSQL – deployed project on Render uses a PostgreSQL database.
 - Gunicorn to upload the project to Heroku


## Validation

**PEP8 Validation**

PEP8 Validation Service was used to check the code for PEP8 requirements. All the code passes with no errors or warnings.

## Testing

Comprehensive testing was conducted to ensure the robustness and reliability of my projects functionality. The testing process included manual testing all functions and features


## Manual Testing of User Stories

The manual testing of the user stories focused on ensuring that all functions and features work as expected. Each feature was tested rigorously for expeted outcomes and edge cases

| Test | Action | Expected Result | Actual Result |
|---|---|---|---|
|User Management| Create, Update and Delete users| Admin can manage user accounts correctly and with no errors|Works as expected|
|Profile Managemet|Create delete and modify users profiles| Users can manage their own profiles, as well as admins|Works as expected|
|Post Management| Create modify and delete posts| Users can manage their own posts, Admins can regulate posts|Works as expected|
|Likes|Add and remove likes|Users can like and unlike posts, Admins can also remove and like posts|Works as expected|
|Followers|Follow and unfollow users| Users can follow and unfollow other users, Admins can regulate followers if needed| Works as expected|
|Authentications|Users need to be logged in to edit and create| Users need to be logged in as a registered account to be able to create, edit and delete anything on the website including but not limited to, posts and the users profile| Works as expected|

## Brief:

In the modern day, dont you think that there is too much of a focus on what other people think? When you see a new post on social media, one of the first things most people do, is to check the comments. Pictogram aims to solve this. Pictogram is a social media that aims to bring social media back to its roots, no comments, just pictures and likes taking out the the ability for people to be negative.

This website allows users to create accounts, sign in, edit their profiles to their liking, create new posts, like other users posts, and to search for their family and friends to follow them.

* Please note that https://ui.dev/amiresponsive?url=https://pictogram-project5-4fab6a1a47d8.herokuapp.com/ does not work with my project, this is an error with their website and not my project or deployment

## Features

- ### Navigation Bar
  - Featured At the top of the screen there is a Navigation bar, on the right of the navigation bar there are modern looking icons which take the user to all the different pages of the website. In the top left is the name of the website name was well. it does not follow the user as they scroll down the page, this is to allow the user to see all the parts of the website unobstructed.
  - The navbar is in a modern blue and white colour scheme which stands from the rest of the website and adds another layer of colour to the website
  - The navigation is in a modern font which was chosen especially to appeal to the most people and remain modern and plesent to look at.
  - The navigation bar has no text after the icons to make the navigation bar look clean and consise.
  ![image](https://github.com/user-attachments/assets/d8730292-2214-4c4f-9595-b0087169b500)


- ### Posts
  - The main function of the website is the posts. It has an image that is centerd to the middle of the post object
  - It has a like button where users can like posts and give approval and it has the date in the bottom right of the post
  - The posts are both on the home page and the users who posted its profile
![image](https://github.com/user-attachments/assets/254081ce-57d4-4823-9363-ecde7946b605)

- ### Search Page
-   The first icon is the search page icon, it allows for users to search for any other users that they want
-   There is a text box for the search query which is where the user can input the username of the person that they want to find
-   Next to the text box for searching is the submit button which allows the user to find the other people on the site
-   Clicking on the users that you search takes you to their profile page
![image](https://github.com/user-attachments/assets/88e0e55f-10f6-48d3-ac83-a18b8c8ad011)
![image](https://github.com/user-attachments/assets/677ce723-85f7-4aed-8e69-55189843b90b)


- ### Profile Page
-   The next icon brings you to the profile page, this page is unique to every user on the sight, with their @
-   there is a followers and following count which shows the users how many people they follow and how many follow them.
-   Under the following section there is the edit profile button, which takes you to the settings page where the user can edit their profile. If the user is looking at another users account then the button will turn blue and say 'Follow' which allows the users to follow one another, if the user is already following them then it will say 'Unfollow'
-   Underneath the edit profile button is the bio of the users profile which they can edit in the setting page, this can 255 characters long maximum
-   Underneath all of this is the posts section, where 3 posts can fit in one row and then the new row starts, the posts have all the same functionality as the posts in the home page
![image](https://github.com/user-attachments/assets/f53a2fb3-db06-4520-8fd2-ad97531531f0)
![image](https://github.com/user-attachments/assets/caf4496f-aae1-45b1-a6ec-2dbf080c4eb6)
![image](https://github.com/user-attachments/assets/432832a3-5b14-4444-b2e3-036947915578)


- ### Create Posts page
-   The next section along in the navigation bar is the create posts page
-   This page has a large modern header and a small bit of text instructing the user
-   Under this there is an input file area where the user can upload their image for their post
-   When the user uploads and image, a example image will apear under the upload area for the user to see how the post will look after they create the post
-   Under the example of what the post will look like there is the create post button which will make the post and then take the user back to the home page to see their new post
![image](https://github.com/user-attachments/assets/c3f604a9-6616-426f-b4a4-28577d619336)
![image](https://github.com/user-attachments/assets/b75151c5-12c1-4281-aa4b-352eb77ce36e)

- ### Home Page
-   The next icon in the navbar, takes you to the home page is where all of the posts from all users are. They are in one line and load 10 pictures at a time. All of the pictures are designed to be small and easy to see
-   If there is more than 10 posts on the home page a modern looking button will apear called load more, which will allow the user to load 10 more posts which limits the stress the posts have on the server
-   There is a clear and accurate header at the top of the page, which is centered in the middle.
![image](https://github.com/user-attachments/assets/aa5cd976-2841-49fb-8925-fec49da68819)


- ###  Register User Page
-   The next icon in the navbar is the regitser user icon, which allows the user to create a account
-   It has multiple text inputs where the user has to input their desired username, their first and last name, and then their password and confirm password,
-   After this there is a regsiter button which completes the process and saves the user to the database
-   Under the button there is text which allows the user to go straight to the login page if they already have an account
-   Once the user has completed registration it takes them to the login page
![image](https://github.com/user-attachments/assets/75a81b11-7be3-4bc4-8bb3-1e088d32e348)
  
- ###  Login User Page
-   The next icon in the navbar is the Login user icon, which allows the user to login to their account, After the register user page this will automatically load
-   The user will have to endter their username and password that they signed up with otherwise they cant login to their account
-   There is a modern button which allows the player to login to their account and this will then take them to the user profile page
-   Under the button there is text which allows the user to go straight to the register page if they dont already have an account
![image](https://github.com/user-attachments/assets/c470d8ee-05df-46ec-b3dc-9e568dc03514)

- ###  Settings Page
-   The last and final icon in the navbar is the settings icon, which allows the user to change their profile
-   The user will be able to edit their username, profile picture, email, first and last name as well as their bio
-   There is a button to save changes which then will save their updated profile to the database
-   Underneath the save changes button there is a button to logout of the users account, which will take them back to the login page
-   The settings page can also be accessed by clicking on the edit profile button on the users profile
![image](https://github.com/user-attachments/assets/a8ab2ebd-1111-45ef-8be5-828a06bf4954)


## Testing

 - 
 - 
 - 



## Bugs

- 
- 
- 

## Validator Testing

- Html
-   


- CSS
-   


- Accessibility
-   


## Deployment
- 
-   
-   
-   

The Live link to this repository can be found here -



