**This is a submission for the Financial Times technical test**

The instructions were to create a web page that used the Financial Times API to return a list of articles with a specific search term.

I have built my project using node and JavaScript with express as a web framework, EJS for templating, request to handle the API request and Eslint as a linter with the airbnb config for the style guide.  

**Screenshots**

![Index Page](https://github.com/anderscodes/FT-tech-test/blob/master/index.png?raw=true)
![Search Page](https://github.com/anderscodes/FT-tech-test/blob/master/search.png?raw=true)

**Process**

I was on holiday when I recieved the tech test which left me with very limited time to complete it. I had planned to spike and create a working version without testing to make sure I understood how the app would work and then TDD a 'real' version of the test. Unfortunatley the spike took me a lot longer then I had anticipated and due to travel complications I was unable to TDD a version of the tech test so I have decided just to present the spike.

The reason the spike took me longer than I had anticipated was my understanding of promises and callbacks. I spent a few days trying to return the response from the API request so that when I called the module I would be able to assign a variable to the response within the route and then render the results page. It took me a lot of research and figuring out before I realised that the correct method was to pass a renderView function into the Api class and then call it within the request.

Despite that fact that I was not able to test drive the technical challenge, I have been able to re-inforce my understanding of asynchronous JavaScript (which is something I thought I had understood but as it turns out I had not).

**Structure**

The basic structure of the app is displayed in the diagram below. I used express to handle the routing of the application and kept the application as simple as possible using only two pages, an index and a results page. EJS was very useful as a templating engine as it meant I could render the Header and Footer from Origami as partials and use them in both the index and the search page. I also created a partial that displayed the results from the API request and one to explain how to use the search box in the header.

The API request simply sends a request with the search query to the FT API and processes the results into an array with the headline as the first item in the array and the link to the article as the second item in the array. These arrays are then pushed into a larger array which is iterated over in the search partial so that each headline appears as a link to the article.

**Diagram**

![Diagram](https://github.com/anderscodes/FT-tech-test/blob/master/fttechtest.png?raw=true)


**Testing**

I had planned to use Jasmine to unit test the model and my strategy would have been as follows: I would have tested that the individual functions has been called(options and resultLoop) when sendRequest was called. I would also have tested that the request had been called and that the correct data had been sent.

I had also planned to use cypress to feature test my application and I would have tested that the header and footer displayed properly on each page, that the search query returned a number of headlines and that the search query was displayed on the result page.
