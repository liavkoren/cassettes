- [x] read data from API w. jQuery
- [x] write data to mongo
- [ ]cassette collection demo
    - [x] add cassette
    - [ ] delete cassette
    - [x] get the list of cassettes

    Bonus:
    - [ ] users
    - [ ] additional data
        - bandname, pub date, running time, etc..
    - [ ] edit cassettes

- html
    - UL list of existing cassettes
    - x button to delete a cassette
    - input field to add a cassette
    - submit button
    - validation for the form
        eg, error message if someone tries to add holiday musak
            - may not match pattern xmas or Xmas or christmas

    - use $.ajax to make the POST

- css
    - to make pretty
    - to style invalid inputs
- FE JS
    - $.get('/cassettes')
    - $.post('/cassettes')
- express server
    - GET /cassettes
    - POST /cassettes

- DB
