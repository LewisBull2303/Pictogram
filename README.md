# Lewis Bull - Pictogram

**Developer - Lewis Bull**

## Backend:

This repository contains the API set up using Django REST Framework for the Pictogram front-end application
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

## Summary

The testing phase confirmed that the Pictogram website meets all functional requirements and performs reliably across different scenarios. Manual tests have validated the robustness of the backend API, ensuring a secure and seamless user experience.

## Frontend:

![image](https://github.com/user-attachments/assets/4f7d6569-faf6-440e-8b44-10b7ad5d5b15)

## Project Goals:

In the modern day, dont you think that there is too much of a focus on what other people think? When you see a new post on social media, one of the first things most people do, is to check the comments. Pictogram aims to solve this. Pictogram is a social media that aims to bring social media back to its roots, no comments, just pictures and likes taking out the the ability for people to be negative.

This project aims to
 1. Offer a smooth platform for users to:
    - Share their own pictures and photos without negativity
    - Interact with others by liking other users' posts and following other users
 2. Improve user engagement by providing:
    - The capability to create and modify user profiles
    - Instant feedback when liking or following a user
 3. Deliver an exceptional user experience with:
    - Creative navigation and adaptive design across all devices
    - Features like Infinite Scrolling on the homepage and user search
 4. Enable users to customize their experience by:
    - Viewing and altering their own profiles and posts
    - Tailoring their feed with likes and follows
 5. Ensure high accessibility and dependability through:
    - Error management such as personalized error messages
    - Secure authentication and user data handling
      
## User Stories

**Authentication Backlog**
 - 1. As a user, I can create an account to access all features of the platform.
 - 2. As a user, I can log in and maintain my session until I log out.
 - 3. As a user, I can log out to securely end my session.
 - 4. As a user, I can change my password to keep my account secure.
 - 5. As a user, I can update my username to reflect my identity.

**Functionality Backlog**
 - 6. As a user, I can navigate the site using a navbar for easy access to all pages.
 - 7. As a user, I can see a custom 404 error page when accessing invalid URLs.
 - 8. As a user, I can experience a fully responsive platform across all devices.
 - 9. As a user, I can see feedback messages for actions like posting, or editing to confirm successful operations.

**Post Backlog**
 - 10. As a user, I can create posts with images to share my experiences.
 - 11. As a user, I can delete my posts to remove unwanted content.
 - 12. As a user, I can like or unlike a post to show my appreciation for the content.
 - 13. As a user, I can view all posts from other users
 - 14. As a user, I can view detailed information on individual posts, such as likes.
 - 15. As a user, I can view all posts created by a specific user to follow their content.

**Profile Backlog**
 - 16. As a user, I can view my profile to see my posts and account details.
 - 17. As a user, I can edit my profile information, including my bio and profile picture.
 - 18. As a user, I can see statistics on my profile, such as the number of followers and posts.
 - 19. As a user, I can follow or unfollow other users

## Colours

The colour scheme for Pictogram was designed to convey the a warm, welcoming and familirar energy, while maintaining a modern and user-friendly aesthetic. The bold blue is the primary accent color. It is complemented by several neautral colors such as greys, whites and blacks. Additionally on some pages there are stark contrast with greens and reds for buttons and interactible items This all helps to give the website a modern and minimalist look, whilst maintaining a clean and enjoyable design

**Colour Pallete**:
![image](https://github.com/user-attachments/assets/3adcd016-7ac8-465d-9d84-78627752197f)

These Colours were selected to:
 - Make the Pictogram pop and stand out as a social media app
 - Provide readability in the contrast of the colours
 - Ensure a consistant and recognisable standard of colours

**Implementation:**

 - I made the primary buttons blue, with red and green when needed for example with save changes and logout buttons
 - The neutral colors are used around the posts to bring out the vibrant colour in all of the users posts
 - Black was used to outline may items, which allows any colour inside the outline to pop
 - interactive elements had a consistant color of blue so the user knew what they could and could not use

The selected color palette ensures the application is visually appealing, consistent with Pictograms's branding, and provides an intuitive user experience.

## Fonts
Pictogram utilizes Segoe UI from Google Fonts for its sleek, modern design. Its slightly taller letterforms enhance readability, making it ideal for both headers and body text. When paired with a sans-serif fallback, Segoe UI maintains a polished and uniform appearance across all devices.

## WireFrames

**Desktop View:**

Home Page:
![image](https://github.com/user-attachments/assets/3cad420a-3731-4fb9-9e3e-0426d276cc48)

Search Page:
![image](https://github.com/user-attachments/assets/f325005d-778c-4e4f-bdc1-689a8f69eb94)

Login Page:
![image](https://github.com/user-attachments/assets/545fa786-5eb8-486f-89c6-11f187950765)

Register Page:
![image](https://github.com/user-attachments/assets/11701a31-6ca0-4b47-95fa-f65fa16a467b)

Create Posts Page:
![image](https://github.com/user-attachments/assets/dccc68f6-a3e1-43f2-ade5-77e9cb255597)

Settings Page:
![image](https://github.com/user-attachments/assets/177b0606-9847-466e-8e4c-b84160bcfb76)

User Profile Page:
![image](https://github.com/user-attachments/assets/56e0d436-8be1-4390-9242-4b4f6d5af279)


**Mobile View**
Home Page:
![image](https://github.com/user-attachments/assets/34854579-bff8-4d9f-bb78-f489a2755d14)

Search Page:
![image](https://github.com/user-attachments/assets/ff920555-2f09-42df-a429-d77c3994dc4b)

Login Page:
![image](https://github.com/user-attachments/assets/faef3bc5-1f18-454a-8269-f8399ac3d6ef)

Register Page:
![image](https://github.com/user-attachments/assets/65971b7b-dfe4-4ddb-9b08-076b54393384)

Create Post Page:
![image](https://github.com/user-attachments/assets/6ab82841-ea89-4b46-9e0e-217e38be2555)

Settings Page:
![image](https://github.com/user-attachments/assets/8c2551a1-0234-4e5b-a81a-61ef0689f638)

User Profile Page:
![image](https://github.com/user-attachments/assets/59afbd77-b18c-4d5a-90b1-b2ed1db0545c)


**Tablet View**
Home Page:
![image](https://github.com/user-attachments/assets/e78f0e0f-9960-4f37-9a35-d5a0b9631fcc)

Search Page:
![image](https://github.com/user-attachments/assets/c36e4ebc-3e1b-4084-a36e-d7c19f4ce613)

Login Page:
![image](https://github.com/user-attachments/assets/0a9ba8fd-fdea-4834-b1f0-d6862a4c490d)

Register Page:
![image](https://github.com/user-attachments/assets/a1f0c880-b920-4973-906c-c94621c3fe61)

Create Post Page:
![image](https://github.com/user-attachments/assets/a0a71f85-c212-4ef9-b0f8-a4d4cba83055)

Settings Page:
![image](https://github.com/user-attachments/assets/4c9a0062-333e-4a7b-be2c-1a50874cee5c)

User Profile Page:
![image](https://github.com/user-attachments/assets/5b0e2538-875a-4deb-9086-ea5078fcde8f)

## Technologies Used

**Languages**
 - HTML
 - CSS
 - JavaScript(React)

**Libraries, Framewords and Dependencies**
- React - Core library for building the user interface of Pictogram.
- React DOM - Provides DOM methods for React.
- React Router DOM - Enables routing to navigate between pages without reloading.
- Axios - Used to make requests to the backend APIs
- React Icons - Provides plenty of custom icons to make the project look better and stand out
- @chakra-ui/react - provides a comprenhsive collection of objects to make webpages in react

**Development Tools**
- React Scripts - Was the core for sunning script, building and running the app

**Tools and Programs**
- Am I Responsive - Shows how Pictogram looks on differnt devices and provides a preview image which was used above
- Cloudinary - Managed and served high-quality images and media assets efficiently.
- Git - Used for version control, which helps with coding error-free.
- GitHub - Hosted the Pictogram repository, Allowing me to showcase all my code and the process I took to make this project

## Backend API - Pictogram API

Pictogram’s back-end is built using the Django REST Framework (DRF), which efficiently handles all data and operations. It ensures a smooth user experience by managing user authentication, posts, comments, and profiles. The API serves as the core structure, supporting all essential features of the app.

**Key Features of the API**
- User Authentication: Secure endpoints are provided for logging in, registering, and managing user sessions.
- Post Management: Users can create, update, delete, and retrieve posts with full CRUD functionality.
- Like Functionality: Users can like and unlike on posts
- Follow Functionality: Users can follow and unfollow other user accounts
- Profile Control: Users have the ability to view and edit their profiles and manage passwords.
- Performance Optimizations: Efficient serializers and query optimizations ensure fast data responses.

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


## Future Features / Improvements

Whilst it is a great program, Pictogram has many area where it could be improved, these are a few that could make Pictogram a household name:

- Linking to other Social media - Allowing users to link their Pictogram accounts to their other social medias will take Pictogram to the next level
- Forgot Password Button - Adding a Button that allows users to get an email if they forgot their password to reset it
- Messaging system - Adding a messaging system to Pictogram would allow it to truly flourish as a social media
- Filters - Allowing users to filter the post the posts they see by the people they follow or other posts they like
- Email Authntication - Making so that to sign up, users need to confirm an email address will add another level of security to Pictogram

## Validation

**CSS Validation**
The W3C Jigsaw CSS Validation Service confirmed all CSS modules are error-free.

App.css:
![image](https://github.com/user-attachments/assets/af4290a5-805b-49c1-b133-638d9331df6e)

Index.css:
![image](https://github.com/user-attachments/assets/fa86e4bc-cf7f-4443-9bc4-08bb00d5b825)


**HTML Validation**
The W3C Markup Validation Service confirmed the website’s HTML is error-free and fully compliant.
![image](https://github.com/user-attachments/assets/989d3128-2d85-4de0-8e2f-494f0990d734)


**JSX Validation:**

All Code passed the Eslint Validator, except Eslint did not understand some of the additonal libraries I was importing and then flagged various things up as undefined when in the code, They made perfect sense and ran correctly. See below al screenshots
Create_Post.js:
![image](https://github.com/user-attachments/assets/7b9c6b2d-6e6e-4301-8f52-96b8d5da34ce)
![image](https://github.com/user-attachments/assets/133e40ba-243e-4164-92f6-f74d1c1cde9c)
![image](https://github.com/user-attachments/assets/e6e2dae2-3a36-438a-a2e0-64876b13295c)

Home.js:
![image](https://github.com/user-attachments/assets/63c758df-7c54-4fde-9876-5515f6311d41)
![image](https://github.com/user-attachments/assets/70481a33-746f-4e70-97f2-201ffd2957fe)

Login.js:
No Errors on Console
![image](https://github.com/user-attachments/assets/f4798915-7d60-44c9-bb00-06c0d6aa2fd9)
![image](https://github.com/user-attachments/assets/6189401d-e67a-4dcf-8122-a01072c328ee)
![image](https://github.com/user-attachments/assets/ec2a8696-7ae8-4c3e-a018-304bcfb4e1c9)

Register.js:
![image](https://github.com/user-attachments/assets/0a9654db-9cdf-4c0e-adfa-6048cf91561a)
![image](https://github.com/user-attachments/assets/18746afd-e042-4563-8178-ac754fd5e1f7)
![image](https://github.com/user-attachments/assets/337b00e1-41a2-4d8b-a4e3-e2dfac8d478b)

Search.js:
![image](https://github.com/user-attachments/assets/928ea64e-ed27-4567-bc31-02af66e5228f)
![image](https://github.com/user-attachments/assets/7dc3867b-eb2b-4be9-9a17-1430278b3517)
![image](https://github.com/user-attachments/assets/f8efbac7-2237-43e1-8a2f-052e1a57f7a8)

Settings.js:
![image](https://github.com/user-attachments/assets/083d5e81-569d-47ea-a485-ac49421b99a0)
![image](https://github.com/user-attachments/assets/45629a94-7cc3-46af-bab2-eaf77fd87dfc)
![image](https://github.com/user-attachments/assets/ba693dc3-0220-4423-b59d-27eddf74d839)
![image](https://github.com/user-attachments/assets/55e7b808-abd8-4a7e-aca0-78cd17f1f9c5)

userprofile.js:
![image](https://github.com/user-attachments/assets/7d4da2c1-d545-4ed1-9091-dc5423116039)
![image](https://github.com/user-attachments/assets/44ba47cf-28b4-402e-88d6-61f253ffde8a)
![image](https://github.com/user-attachments/assets/357fd7a0-2a77-434d-bad3-b4484ca604fc)
![image](https://github.com/user-attachments/assets/d1894dfa-c868-4188-ae9f-fc57818cd25d)
![image](https://github.com/user-attachments/assets/557bb72a-77d9-4065-a8ae-97ec9de5e862)

Endpoints.js:
![image](https://github.com/user-attachments/assets/f8f4652e-abf9-4642-859c-06abb74ebc9e)
![image](https://github.com/user-attachments/assets/8d5b94e3-69f8-4978-98f0-d81fa34ffb93)
![image](https://github.com/user-attachments/assets/d1dfe930-44fc-4680-a377-e666ac4fd712)
![image](https://github.com/user-attachments/assets/574c0ff9-e1d8-4620-9347-c0ee3d02b6a4)

Layout.js:
![image](https://github.com/user-attachments/assets/6d5c186b-deb0-4b89-8163-739e00a307f7)
![image](https://github.com/user-attachments/assets/78c4fd54-9e73-4eb6-80d4-20dcccb67f2a)

Navbar.js:
![image](https://github.com/user-attachments/assets/2f5b4b0b-9c21-4742-821a-29313afab8c6)
![image](https://github.com/user-attachments/assets/3f7b8831-e6f5-4253-acdd-d1c8e347f577)

Posts.js:
![image](https://github.com/user-attachments/assets/fb5581b5-906f-40a5-82c1-62b886226a56)
![image](https://github.com/user-attachments/assets/b6605a9a-7279-472a-b168-8d81f40dcf07)
![image](https://github.com/user-attachments/assets/f141a2df-4b77-40c8-9695-6b174d9cea7f)

Private_Route.js:
![image](https://github.com/user-attachments/assets/e102393e-f30e-443f-a54c-ae08e07f424a)
![image](https://github.com/user-attachments/assets/636f6cbf-30d0-4fc4-a402-4e5cff050cb8)

Constants.js:
No errors in the console:
![image](https://github.com/user-attachments/assets/2da8ab59-3b87-400a-8e4c-e3a3f48ec170)
![image](https://github.com/user-attachments/assets/bd6f2375-4f4b-4565-9065-9199cd796c49)

useAuth.js
![image](https://github.com/user-attachments/assets/7c4c8efb-8f08-40fc-acce-f29c91f302f7)
![image](https://github.com/user-attachments/assets/d1816753-4aba-48e3-9203-018676f43f86)

**Lighthouse Validation**
I used the lighthouse validator to confirm that all of my elements and pages are accessible and easy to use

Login Page
![image](https://github.com/user-attachments/assets/e678c326-c9d4-4739-84f2-664cc8877ddb)

Home Page:
![image](https://github.com/user-attachments/assets/e6d066da-0773-4864-8a5f-0c6e9eabc99e)

Profile Page:
![image](https://github.com/user-attachments/assets/f46561d9-f207-4aed-90d8-b32319f3da8d)

Search Page:
![image](https://github.com/user-attachments/assets/350bf6d5-9a89-4811-af42-edaad5828f1e)

Register Page:
![image](https://github.com/user-attachments/assets/086c5963-30ca-43f4-80f3-d4fb375914be)

Create Post Page:
![image](https://github.com/user-attachments/assets/100fad0a-8403-4ee4-931d-1dae21c3356a)

Settings Page:
![image](https://github.com/user-attachments/assets/83d1a26a-75ba-4e51-bf39-f7f4b952f6b7)


## Testing

**Performing Tests on Various Devices**

Pictogram was tested using Google Chrome Developer Tools Toggle Device Toolbar to simulate various devices. The website was successfully tested on the following devices:

- Iphone 13
- Samsung Galaxy Tablet A8
- Windows 10 Computer

Tesing was also done on the following browsers:
- Google Chrome
- Microsoft Edge
- Opera GX
- Firefox

All Functions, such as navigation, buttons and interactive objects worked perfectly across all tests


## Bugs

|Bug|Fix|
|---|---|
|Cloudingary was not receiving images| Updated my files to get rid of the server_url in the src and set up the cloudinary correctly in configs
|Profile button in the nav leading to a 404 page| Updated the navigate as it was not getting the username correctly|
|Profile picture not updated when the bio doesnt get changed|Updated the bio variable so it can be blank with lets the requests get through|

## Config

**Forking the Github Repository**
- Go to the [Pictogram live repository](https://github.com/LewisBull2303/Pictogram)
- Click on the Fork button in the top right corner
- You will then have a copy of the repository in your own GitHub Account

**Making a Local Clone**
- Go to the [Pictogram GitHub repository](https://github.com/LewisBull2303/Pictogram).
- Locate the Code button above the list of files and click it.
- Highlight the HTTPS button to clone with HTTPS and copy the link.
- Open the command-line interface on your computer.
- Change the current working directory to the one where you want the cloned directory.
- Type git clone and paste the URL from the clipboard




