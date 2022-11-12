How browser works:
 1.First we type the url
 2.The browser fetch the IP address of url
 3.The browser makes the link with server
 4.Server sends the file/data to browser
 5.Now at the end browser renders the webpage.
 -------------------------------------------------
 
Compenents of browser:
Browsers' user interface have a lot in common with each other. Among the common user interface elements are:
Address bar for inserting the URI
Back and forward buttons
Bookmarking options
A refresh and stop buttons for refreshing and stopping the loading of current documents
Home button that gets you to your home page
Strangely enough, the browser's user interface is not specified in any formal specification, it is just good practices shaped over years of experience and by browsers imitating each other. The HTML5 specification doesn't define UI elements a browser must have, but lists some common elements. Among those are the address bar, status bar and tool bar. There are, of course, features unique to a specific browser like Firefox downloads manager.
More on that in the user interface chapter.

Now let's talk about the high level components of browser
The browser's main components are:

The user interface - this includes the address bar, back/forward button, bookmarking menu etc. Every part of the browser display except the main window where you see the requested page.
The browser engine - the interface for querying and manipulating the rendering engine.
The rendering engine - responsible for displaying the requested content. For example if the requested content is HTML, it is responsible for parsing the HTML and CSS and displaying the parsed content on the screen.
Networking - used for network calls, like HTTP requests. It has platform independent interface and underneath implementations for each platform.
UI backend - used for drawing basic widgets like combo boxes and windows. It exposes a generic interface that is not platform specific. Underneath it uses the operating system user interface methods.
JavaScript interpreter. Used to parse and execute the JavaScript code.
Data storage. This is a persistence layer. The browser needs to save all sorts of data on the hard disk, for examples, cookies. The new HTML specification (HTML5) defines 'web database' which is a complete (although light) database in the browser.
![browser works](https://user-images.githubusercontent.com/91534908/201459183-d9257e58-70b5-4927-92f4-36f5a476432c.png)
------------------------------------------------

Rendering Engine and its tree
Firefox, Chrome and Safari are built upon two rendering engines. Firefox uses Gecko - a "home made" Mozilla rendering engine. Both Safari and Chrome use Webkit.

Webkit is an open source rendering engine which started as an engine for the Linux platform and was modified by Apple to support Mac and Windows.
Here we talk about parsing and tree
Since parsing is a very significant process within the rendering engine, we will go into it a little more deeply. Let's begin with a little introduction about parsing.

Parsing a document means translating it to some structure that makes sense - something the code can understand and use. The result of parsing is usually a tree of nodes that represent the structure of the document. It is called a parse tree or a syntax tree.

Example - parsing the expression "2 + 3 - 1" could return this tree:
expression node(-) then having two child node numbernode(1) and expression node(+) and then expression node(+) having two number nodes 2 and 3.
![parsing](https://user-images.githubusercontent.com/91534908/201459264-8774aeb9-a20d-4c14-80e7-a9768e5deb2e.png)
--------------------------------------------------------

Scripts processor
The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. This can be useful in situations where one of the other processors doesn't provide the functionality you need to filter events
order of script processing
The scripts in the Process pages are processed in the following order: Pre-Process page and Process page. Child Post Process page. Post Process page
----------------------------------------

Layout and Painting
The DOM and CSSOM trees are combined to form the render tree.
Render tree contains only the nodes required to render the page.
Layout computes the exact position and size of each object.
The last step is paint, which takes in the final render tree and renders the pixels to the screen.


