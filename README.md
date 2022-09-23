# iTunes Search

# Table of contents

1. [About](#about)
2. [Installation](#install)
3. [How to use](#howTo)
4. [Link to app](#link)
5. [App Security Messures](#security)

## About <a name="about"></a>

iTunes Search is a app that allows the user to search the iTunes api. The user can enter a search term and also select the media type (eg. audio book, music, music videos)

## Download Installation <a name="install"></a>

### Download

1. Click on the download button and select the iTunes.zip download
2. Extract the folder
3. In the project root directory there are two folders namely client and server.

### Installation and starting the app

1. Open your terminal and navigate to your project directory
2. In the project root directory there are two folders namely client and server. We are first going to install our server dependencies and start up our server.
3. Navigate into the server folder and enter the following command npm i to install server dependencies
4. Now we are going to run the server, enter the following command npm start
5. Once the server is running, we are now ready to install the client dependencies and run the client
6. Open a new terminal, navigate to the client folder
7. Enter the following command npm i to install the client dependencies
8. Type npm start to run the client. Now our app is ready to use.
9. Open your browser on http://localhost:3000

## How to use <a name="howTo"></a>

The app has 3 basic functionalities,

1.  A user can search the iTunes api by entering the search term and the media type.
2.  A user can create a list of favorite items.
3.  And the user can remove items from the favorites list

### Creating a basic search

Show an image of the search ui

1. Select the media type from the dropdown e.g musicVideo
2. In the text field enter the search term you desire e.g Nas
3. Click on the search button.
4. Search results should show up under the search button
   Show an image of search results

### Adding an item to the favorites list

1. In the search results each item has a add to favorite button. Click on it.
2. To view your favorites list clikc on the Favourites link in the top right conner

### Removing an item from the favorites list

1. On the Favorites page, there is a list of favorite items. Each item has a Remove button. Click on it 

## Link to app <a name="link"></a>
### https://itunessearchv2.herokuapp.com/

## App Security Messures <a name="security"></a>

### Use Helmet
Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
Helmet is a collection of several smaller middleware functions that set security-related HTTP response headers.

### Ensure your dependencies are secure

Using npm to manage your application’s dependencies is powerful and convenient. But the packages that you use may contain critical security vulnerabilities that could also affect your application. The security of your app is only as strong as the “weakest link” in your dependencies.
