# Data Dashboard Milestone Two Project

This Interactive Data Dashboard shows Consumption of Alcohol for Secondary School Math Students it includes a range of graphs that show different statistics based on the data provided.  

Click here to View: https://jsnbly.github.io/milestonetwo/
 
## UX
 
As D3/DC display non Responsive Graphs this project was designed for Desktop view only.  

The Dashboard is designed to be easy to view with great Typography and Consistant Colour Scheme.    

It was designed to allow the user to quickly get results for questions asked of the data.  

Wireframe Image -  .https://github.com/jsnbly/milestonetwo/blob/master/uxd/wireframemile2.jpg   

Further UXD documentation is Available in UXD Folder  
https://github.com/jsnbly/milestonetwo/tree/master/uxd   

## User Stories
- A user wants to know how many Male students in the class partake in Afterschool Activities  
User Clicks on Male student M on Gender Bargraph and the Afterschool Pie Chart will show result when Yes is hovered over with mouse

- A user wants to see overview of Alcohol usage for Female students over weekday and weekends
User clicks on Female student and the Alcohol Consumption Bargraphs will Show overview to user.

- A user wants to see results for students from a Specific school over their Academic year.  
User uses the selector to choose between schools and this will render the chosen data in the scatterplot.

## Features

Navbar - Shows the Dashboard Title Consumption of Alcohol for Secondary School Math Students 
Selector - Lets the user specify between individual or all Schools   
Demographic Bargraphs - Shows Gender, Age and also the Location of Student either Rural or Urban  
PieCharts - Show if the Student takes part in Afterschool Activites and also if they receive extra support from Their Family or School    
Alcohol Barcharts - Show if the Students Consumes Alcohol on Weekdays and also if the Students Consume Alcohol on Weekends  
Scatterplot -  Shows the Students First, Second and Third Term Grades over the Year in Class  
Footer - Shows Copyright information  
 
### Existing Features
- Selector - Allows the user to Break the data down into individual schools or to have all school data available.  

- Demographic Bargraphs - Lets the User Further Break down the data by Gender, Age and Location of the Students.  

- PieCharts - Gives the User a quick over-view of the Students after school activites and also if they recieve help outside school.  

- Alcohol Barcharts -  Lets the user break down the Students alcohol usage by weekdays and Weekends and also shows how excessive it is.    

- Scatterplot - Shows the user Student grades across the start middle and end of the Class year. 

### Features Left to Implement

The project could also include more information on students, for example Relationship status, Guardian status and Time to travel to school.  

## Technologies Used

HTML/CSS - Used for Front end Development and design.    
D3/DC/Crossfilter - Used to draw Graphs to index.html 
queue.js - Used to Parse the csv file  
javascript - Used to develop wgraph.js file   
Bootstrap/Bootswatch - Used United from Bootswatch for Page Typography and Colour Scheme.  
VSCode - IDE Used for Development  
Git - Used for Version Control  
Github - Used for Deployment/Hosting  
Terminal - Used to Push Version Changes to Github  
Fenix - Lightweight Server, used for local testing of project
Gimp - Wireframing  
Google Office - For UDX Documentation.
favicon.io - Favicon Creation.        

## Testing
I used console.log() in my javascript file to test fuctions in Developer Tools to help debug, an example of this was to check minGrade  
and maxGrade in the show_grades function as the data was not rendering correctly in the scatterplot it would only show a max grade of 9 this helped me to realise the data was rendering as a string and when this was parsed as an int by adding parseInt to fuction(d) as it plucked from the G3 column in the CSV the data loaded correctly in the scatterplot. 

To Test this Project locally I used Fenix webserver installed on my development Machine this would allow me to run the javascript required and test locally.    

I used Developer tools to Console.log data to the Chrome Console for debugging data as I was building graphs. I also used the device toolbar to view across different devices even though D3 and DC dose not render responsive graphs and the site was designed to be viewed purely on large screen devices.    

I selected a range of different values across the graphs on the dashboard to check that all graphs were redendering correctly and also updating as required.   

I tested my code with W3C Markup and CSS Validator to Check compliance. 

## Deployment

I have used Git and Github for Version Control and Github Pages for Deployment and Hosting.  

I used Linux Terminal to push the project to Github and from repository settings enabled github pages.  


## Credits
Developed by jaybailey(at)outlook.com  

### Content

CSV Data was Sourced from Kaggle https://www.kaggle.com/uciml/student-alcohol-consumption  

### Media
Fontawesome Icons Used https://fontawesome.com/

### Acknowledgements

- I received inspiration for this project from data on https://www.kaggle.com/uciml/student-alcohol-consumption
