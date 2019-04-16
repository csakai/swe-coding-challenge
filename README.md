## Project Setup

This starter app was created with [Create React App](https://github.com/facebook/create-react-app).

Install dependencies:
```yarn```

Run the app in the development mode on `http://localhost:3000`:
```yarn start```

Run test in watch mode:
```yarn test```

## Feature

As a user with multiple OT-2 robots, I would like to view the name and information about all of the available robots in my lab.

## Acceptance criteria

- [ ] Based on the hardcoded robots list in `/reducers`, render all robot names in a `RobotList` component
- [ ] Clicking on an individual robot in `RobotList` component renders additional information about the selected robot in a `RobotDetails` component
  - [ ] Robot name
  - [ ] IP
  - [ ] API version
  - [ ] Firmware version
  - [ ] System version
- [ ] Create a button in the `RobotList` component that clears the selected Robot when clicked  
- [ ] Write unit tests

## Recommended Criteria

- [ ] Discuss how you would retrieve a dynamic list of robots from an HTTP API endpoint
- [ ] Style and format the RobotList and RobotDetail components
