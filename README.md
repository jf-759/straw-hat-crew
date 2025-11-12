Web Development Project 5 - Straw Hat Crew Tracker

Submitted by: Jane Fernandez

This web app: allows users to create, update, view, and delete members of a Straw Hat pirate crew. Users can set crewmates’ roles and weapons with interactive buttons, give them a devil fruit, personality, and backstory, and see all crewmates on a summary page. Each crewmate has a unique detail page and can be edited or deleted.

Time spent: ~15 hours

Required Features

The following required functionality is completed:

 The site has a dashboard displaying a list of user-created crewmates

The dashboard displays all crewmates added by the user in order of creation (most recent first)

Each crewmate card displays at least the crewmate’s name, role, and weapon

 React hooks useState and useEffect are used

 The dashboard includes at least three summary statistics about the crew

Total number of crewmates

Number of crewmates per role

Optional: Number of crewmates with a devil fruit

 A search bar allows the user to search for a crewmate by name

Only crewmates matching the search query are displayed

The list dynamically updates as the user types into the search bar

 An additional filter allows the user to restrict displayed crewmates by role

The filter correctly restricts crewmates to only those with the selected role

The dashboard dynamically updates when the filter is changed

Optional Features Implemented

 Multiple filters can be applied simultaneously (search + role filter)

 Filters use different input types

Search bar as text input

Role filter as clickable buttons

Additional Features Implemented

 Crewmate detail page displays all attributes including backstory

 Backstory and other long text fields display in a styled box to prevent overlap

 Role and weapon buttons are styled interactively with hover and selected states

 CrewCards are styled with a One Piece “bounty poster” aesthetic

Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/h1Cg4dZ.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


Notes

Challenges encountered while building the app:

Managing state updates for Role and Weapon buttons to show selected values dynamically

Preserving data across pages using localStorage

Styling the CrewCards and detail page to resemble a One Piece bounty poster while keeping text readable

Handling edge cases like deleting crewmates and updating summary statistics in real-time


Copyright 2025 Jane Fernandez

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
