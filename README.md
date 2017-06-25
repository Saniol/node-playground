# node-playground
Some useless, full-stack project, just to play with NodeJS, RxJS, server-side rendering and React :)

What this application will do? I'm not sure yet, I'm thinking about getting some stock data from few public API's (e.g. Bloomberg), mixing it with managable content from application database and presenting it via React/Redux application.


Current progress: ~10%

What I'm willing to do:
1. Hello world - init NodeJS server with Express framework :white_check_mark:
2. Hello world 2 - init React/Redux frontend application :white_check_mark:
3. Server-side rendering for frontend application :white_check_mark:
4. First REST service, downloading data from some public API, adjusting it and serving to frontend application
5. Some data presentation in frontend
6. Adding some concurrency in backend - concurrent downloading data from another public API and mixin it into previous REST service(s)
7. Do something more interesting in frontend, prepare for some data-management
8. Adding database to application, implementing simple data-management
9. Adding JWT authentication
10. Some final improvements

What is here right now:
 - Backend:
    -- server side rendering for frontend app
    -- one simple service returning sample JSON data
 - Frontend:
    -- home page loading data from backend service; data is loaded on server side if you enter app on home page, or on client side if you come here from another frontend page
    -- another page: it's here just to demonstrate server/client side data fetching for home page
