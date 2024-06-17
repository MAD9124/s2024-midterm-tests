# Tests for Midterm s2024

## Installation
- Clone this repository
- cd into the repository and run
  ```bash
  npm install
  ```

## Before you run the tests
ensure the following 3 things:
  - your assignment is running on port 4000
  - your router matches `/api/movies`
  - you use the data set provided only (filter + sort won't match otherwise)
    
## Running the tests
run the following command to start the tests. There should be 16 tests run
```bash
npm run test
```

### NOTES
- These tests are not standard unit / integration tests. They have been made for your convenience only (and mine for marking).
- We will be going over the best practices for testing later in the semester
- I will do additional / similar testing against your hosted server at the render url provided, as well as on a cloned local version.