# Bash Commands and Use Cases

## 1. `pwd` (Print Working Directory)

- **Description:** Displays the current working directory.
- **Use Cases:**
  - `pwd`: Print the current working directory.

## 2. `cd` (Change Directory)

- **Description:** Changes the current working directory.
- **Use Cases:**
  - `cd [directory]`: Change to the specified directory.
  - `cd ..`: Move up one directory.
  - `cd ../..`: Move up two directories.
  - `cd ~`: Change to the home directory.
  - `cd -`: Switch to the previous directory.

## 3. `ls` (List)

- **Description:** Lists the contents of a directory.
- **Use Cases:**
  - `ls`: List files and directories in the current directory.
  - `ls -l`: Long format, detailed listing.
  - `ls -a`: List all files, including hidden ones.
  - `ls [directory]`: List contents of a specific directory.

## 4. `mkdir` (Make Directory)

- **Description:** Creates a new directory.
- **Use Cases:**
  - `mkdir [directory]`: Create a new directory with the specified name.

## 5. `touch`

- **Description:** Creates an empty file.
- **Use Cases:**
  - `touch [filename]`: Create an empty file with the specified name.
  - `touch file1.txt file2.txt`: Create multiple empty files.

## 6. `cat` (Concatenate and Display)

- **Description:** Concatenates and displays the content of files.
- **Use Cases:**
  - `cat [file]`: Display the content of the specified file.
  - `cat [file1] [file2]`: Concatenate the content of multiple files.
  - `cat > [file]`: Create or overwrite a file with user input. Press Ctrl + D to finish.

## 7. `vi` (Visual Editor)

- **Description:** Opens a text editor in the terminal.
- **Use Cases:**
  - `vi [filename]`: Open or create a file using the vi editor.
  - Inside vi editor:
    - Press `i` to enter insert mode.
    - Press `Esc` to exit insert mode.
    - `:w` to save changes.
    - `:q` to quit.
    - `:wq` to save and quit.
    - `:q!` to force quit without saving.

## 8. `mv` (Move)

- **Description:** Moves files or directories from one location to another.
- **Use Cases:**
  - `mv [source] [destination]`: Move a file or directory to the specified destination.
  - `mv [file] [new_filename]`: Rename a file.

## 9. `cp` (Copy)

- **Description:** Copies files or directories from one location to another.
- **Use Cases:**
  - `cp [source] [destination]`: Copy a file or directory to the specified destination.
  - `cp -r [source_directory] [destination_directory]`: Copy a directory and its contents recursively.

## 10. `npm` (Node Package Manager)

- **Description:** Manages Node.js packages/modules.
- **Use Cases:**
  - `npm install [package]`: Install a Node.js package.
  - `npm start`: Start the application defined in `package.json`.
  - `npm list`: List installed packages.

## 11. `node`

- **Description:** Executes JavaScript code outside a web browser.
- **Use Cases:**
  - `node [filename]`: Execute the JavaScript file using Node.js.
  - `node -v`: Display the installed Node.js version.
  - `node -e "console.log('Hello, Node!')"`: Execute a one-liner JavaScript code.

## 12. `git`

- **Description:** Version control system for tracking changes in source code.
- **Use Cases:**
  - `git init`: Initialize a new Git repository.
  - `git clone [repository_url]`: Clone a repository into a new directory.
  - `git add [file]`: Add changes to the staging area.
  - `git commit -m "message"`: Commit changes with a descriptive message.
  - `git status`: Show the status of changes.
  - `git log`: Display the commit history.
  - `git branch [branch_name]`: Create a new branch.
  - `git checkout [branch_name]`: Switch to a different branch.
  - `git merge [branch_name]`: Merge changes from one branch into the current branch.
  - `git pull`: Fetch from and integrate with another repository or a local branch.
  - `git push`: Update the remote repository with local changes.
