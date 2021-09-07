Kay Kim BMO Assessment

1.  How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
<Update 2021-09-07>
I spent a day to add more features like dark mode, and improve user inderface. In the last assignment, meeting the requiremet was a priority. As a result, there were a lot of missing parts. For example, there is a sorting button right next to the search button, so there was room for confusion about which button to press from the user's point of view. In this assignment, I thought about whether I could improve the UX by separating the search part and the result part.
(Previous: It took a day to complete(Sunday all day). First, I spent a time to find the proper API, and how to show the data to users. The designing how to implement API takes most of time to meet requirements, and try to create as similar as. Also, every time I use the ui library, I try to hardcode myself, so I devoted 30~40% more time to the work that would be done as usual. It just took a little longer, other than that, there was no work that was very difficult.)

2.  What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
    There are hooks for state used for functional components. In short, since class components reuse props, there is a problem that may behave differently from the developer's expectations. Therefore, separate work should be done. However, functional components don't have this kind of problem. Also, functional components have better performance and readability than class components to test.
    // useState Hook
    const [searchValue, setSearchValue] = useState({
    media: '',
    query: '',
    });
    const [contents, setContents] = useState([]);

// useEffect Hook
useEffect(() => {
setContents(results);
}, [results]);

useEffect(() => {
if (searchData) {
setContents(searchData);
}
}, [searchData]);

3.  How would you track down a performance issue in production? Have you ever had to do this?
To analyze a performance of the application, I mainly use Google Pagespeed insight, google chrome lightning extension, and also use a website called gMetrix as well. 
To complete this goal, I am questioning myself that "Is this user-friendyly, Try to render first page as fast as I can, Implement responsive design, Keep that the number of children components does not change each time it is rendered" or etc.
While I was working on the assessment, the effort I made was not using external libraries as much as possible, but by coding myself. The first time a website is rendered, it is mainly static files such as images, css, and javascript that affect the speed.

4.  How would you improve the API that you just used?
The TMDB I used is an API that provides vast amounts of data related to movies and TV shows. However, I wished if theAPI had been configured according to the characteristics of the data. For example, TV shows and movies are DBs thatare not very different from each other, and since the names of key values ​​related to titles were used differently.So, additional work was required to call the names according to the characteristics of the media. (Movies used‘title’, TV shows used ‘name’)

5.  Please describe yourself using JSON.

{
"name": “Kay”,
“legal name” : “Kyungah Kim”
“title” : “Front-end developer”
"skills": [“HTML”, “CSS”, “JS”, “React”, “Node”, “CMS”, “MS Office”],
"location": “Toronto”,
"passions": [
"Programming",
"Baking",
"Adventure"
],
"believes": [
"If I try my best, Everything will happened what I expect"
],

"website": “https://kaykim.website”,
"linkedin": “https://www.linkedin.com/in/kaykim09/”,
}
