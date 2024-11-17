# ToDoApp by devBilek

ToDoApp is a task management application that allows users to add, edit, delete, and reorder tasks. The application also supports dark mode.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Move tasks up and down the list
- Dark mode / light mode

## Technologies

- React
- Bootstrap

## Project Structure

```sh
├───assets
│ └───images
├───components
│ ├───TaskInput
│ ├───TaskItem
│ ├───TaskList
│ └───ToggleSwitch
└───hooks
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/devBilek/react-todoapp
   ```
2. Navigate to the project directory:
   ```sh
   cd ToDoApp
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm start
   ```

## Usage

1. **Add a Task**: Enter the task content in the input field and click the "Add" button.
2. **Edit a Task**: Click the edit icon (pencil) next to a task, make changes, and click the "Accept" button.
3. **Delete a Task**: Click the trash bin icon next to the task you want to delete.
4. **Move a Task**: Use the arrow buttons (up/down) next to a task to move it up or down the list.
5. **Toggle Mode**: Click the dark mode/light mode switch in the header to toggle between modes.

## Component Structure

### App

The main component of the application, which manages the state and renders the other components.

### TaskInput

The component responsible for entering new tasks and editing existing tasks.

### TaskItem

The component representing a single task in the list.

### TaskList

The component responsible for rendering the list of tasks.

### ToggleSwitch

The component responsible for toggling between dark mode and light mode.

## Custom Hooks

### useLocalStorage

A hook that allows storing state in `localStorage`.

### useBodyClass

A hook that allows dynamically adding and removing CSS classes from the `<body>` element.

## Author

devBilek

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
