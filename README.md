                                         TASK SCHEDULER WEB APP
												
#####See the app in action [here](https://captainvineet-taskscheduler.herokuapp.com/ )
                                                  
####PROBLEM STATEMENT-
Prototype a Task Scheduler Web App.
 * Create a registration page with general information.
 * Create a login page
   Users can only access the below pages after they are authenticated.
    * Create a homepage to display an interactive Calendar.
    * Users can Create, Read, Update, Delete tasks for specific date and time in the
      calender and the data should be synced with the Database
    * Create another page which shows an interactive Gantt Chart. This chart will mainly show the tasks across the timeline, click tasks to view more information.

####SOLUTION-
 * Developed a responsive MERN App.
 * New user can register and existing user can login into the app.
 * After logging in a task page will open.
 #####All the below functionalities are possible only when the user is authenticated.
 ##### CREATE TASK-
   - Double click on any of the cell to create a new task.
   - A form will open - enter details to create the task. [DON'T CLICK ON REPEAT BUTTON I HAVE NOT HANDLED THIS]
 
 ##### UPDATE TASK-
   - Click on the created task to open a modal with task details and edit button.
   - Click on the edit button to open the form and update the task.
   - Alternatively, directly double click on the task to open the form and update the task.
   
 ##### DELETE TASK-
   - Double click on the task to open the form which will have delete button to delete the task.
 
 * Proper error handling is implemented in the app.

 ##### AUTHENTICATION
   - Two user can't have same name. Error will be displayed if a user tries to register with an existing username.
   - If user provides wrong credentials then the error will be displayed.



####TECHNICAL CHOICES AND ARCHITECTURAL PATTERN-
  * Used devexpress reactive library for task scheduler component.
  * Followed Model View Controller(MVC) pattern to organize and modularize code.
  * Used Google Charts library for Gantt Chart.
  * Database - MonogoDB.

#####WHY I USED THIS?
 ##### [DEVEXPRESS REACTIVE LIBRARY](http://https://devexpress.github.io/devextreme-reactive/ "DEVEXPRESS REACTIVE LIBRARY")
  * It is very similar to google calender.
  
  * >The library uses Material-UI for rendering and theming. It supports both controlled and uncontrolled React state  modes, and it adheres to Google  	   Material Design guidelines for its visual appearance.
  * It has easy to follow documentation and samples in react.

######MVC PATTERN-
  * I have used this pattern in past to build my apps. So, I am comfortable organizing and modularizing code by using this pattern easily.

#####[GOOGLE CHARTS](http://https://developers.google.com/chart/interactive/docs "GOOGLE CHARTS")-
  * Couldn't find any better library, which supports Gantt Chart.
  * Also, the documentation is very simple and straight forward to follow.
  
#####MONGODB-
  * Have been using mongodb for my recent couple of apps, so went ahead with this.


####TODOS-
  * Since the deadline is already there, left out the bonus task.
  * Can add the navigation bar.
  * Can show currently logged in user.
  * Can add the flash message functionality.
  * Can use JWT for authentication.

####ALTERNATIVE APPROACH- 
 ##### AUTHENTICATION AND AUTHORIZATION
   * I have used `passport.js` library in past for authorization and authentication so I used the same for this app. 
   * Could have used JWT as it is the famous and secure approach for authentication. I have just basic about JWT but never got a chance to implement JWT, so just avoided it. However, planning to read and implement JWT in next couple of days.
  
#####DATABASE COLLECTIONS-
  * Could have used 2 different collections: one for users and other for tasks, to store tasks and users separately, and use SQL like concept similar to foreign key to fetch data for parcticular user.
  * As the biggest advantage of NOSQL databases is that we can organize the data in document format, it becomes super easy and time saving to use single collection for storing the data.

####APPS THAT I AM PROUD OF-
  #####Yelpcamp App(https://captainvineet-yelpcamp.herokuapp.com/)
  Source code:https://github.com/VineetPrasadVerma/WebDevelopmentBootCamp-Node.js/tree/master/YelpCamp/v11
   * YelpCamp allows users to add campgrounds for other users, to comment and to view campground created by other users.

#####Web Sever-
Source Code:https://github.com/VineetPrasadVerma/Web-Server
   * Created my own web server using sockets and net module of Node.js having all the basic functionalities of the server provided by express framework.
 
####SETUP INSTRUCTION-
Prerequisite: Node.js, MongoDB
  * Clone the repo
  * `cd` to root of repo
  * Run ` npm install`
  * Set environment variables in `.env` file:
  ```
PORT=<PORT_NUMBER>
DATABASE_URL='mongodb://localhost:27017/<db_name>'
```
  * Run `npm start` to start the server
  * Open a new terminal at root of repo
  * `cd` to `client/`
  * Run `npm install`
  * Run `npm start` to start the app
  * Open http://localhost:3000 to view it in the browser

####TESTING-
Test cases:
* User with existing name should not be able to sign up.
* User should not be allowed to access tasks if password is wrong.
* One user should not be able to access tasks/charts of any other user.
* User should be able to create a task
* User should be able to delete a task
* User should be able to update a task
* User should be able to access the Gantt chart
* The data on Gantt chart should match with the tasks
* User should be able to see their tasks and chart details even after re-logging in

I have not written automated tests as I am not aware about them and was running out of time to read about it. I have done the funtional testing for the test-cases mentioned above manually.

####SCREESHOTS-
<div align="center">
    <img src="/screenshots/ss1.png" width="100px"</img> 
    <img src="/screenshots/ss2.png" width="100px"</img> 
    <img src="/screenshots/ss3.png" width="100px"</img> 
    <img src="/screenshots/ss4.png" width="100px"</img> 
    <img src="/screenshots/ss5.png" width="100px"</img> 
    <img src="/screenshots/ss6.png" width="100px"</img> 
    <img src="/screenshots/ss7.png" width="100px"</img> 
    <img src="/screenshots/ss8.png" width="100px"</img> 
</div> 
 
 ####PORTFOLIO LINK-
   https://captainvineet-portfolio.netlify.app/
