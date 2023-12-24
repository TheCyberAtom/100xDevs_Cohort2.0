# Bash Commands and Use Cases

## 1. `pwd` (Print Working Directory)

- **Description:** Displays the current working directory.
- **Use Cases:**
  - `pwd`: Print the current working directory.

## 2. `ls` (List)

- **Description:** Lists the contents of a directory.
- **Use Cases:**
  - `ls`: List files and directories in the current directory.
  - `ls dir*name`: List files and directories matching the pattern.
  - `ls -l`: Long format, detailed listing.
  - `ls -l dir_name`: Long format listing for a specific directory.
  - `ls -R dir_name`: Recursively list all files and subdirectories.
  - `ls -t dir_name`: List files by modification time.
  - `ls -lt dir_name`: List files in long format by modification time.
  - `ls -la dir_name`: Long format, including hidden files.
  - `ls -lRa dir_name`: Long format, recursively including hidden files.
  - `ls -lr dir_name`: Long format, reverse order.
  - `ls -s dir_name`: Display the allocated size of each file.
  - `ls -lR | grep .json`: Recursively list all JSON files.

## 3. `cd` (Change Directory)

- **Description:** Changes the current working directory.
- **Use Cases:**
  - `cd dir_name`: Change to the specified directory.
  - `cd ..`: Move up one directory.

## 4. `cat` (Concatenate and Display)

- **Description:** Displays the content of a file.
- **Use Cases:**
  - `cat file_name`: Display the content of the specified file.
  - `cat >> file_name`: Append text to the end of a file.

## 5. `touch`

- **Description:** Creates an empty file.
- **Use Cases:**
  - `touch file_name`: Create an empty file with the specified name.

## 6. `mkdir` (Make Directory)

- **Description:** Creates a new directory.
- **Use Cases:**
  - `mkdir dir_name`: Create a new directory with the specified name.
  - `mkdir -p dir_name`: Create parent directories if they don't exist.

## 7. `mv` (Move)

- **Description:** Moves or renames files and directories.
- **Use Cases:**
  - `mv file_name new_file_name`: Rename a file.
  - `mv file_name dir_name`: Move a file to a directory.

## 8. `cp` (Copy)

- **Description:** Copies files or directories.
- **Use Cases:**
  - `cp file_name dir_name`: Copy a file to a directory.
  - `cp -r dir_name another_dir_name`: Copy a directory and its contents recursively.

## 9. `rm` (Remove)

- **Description:** Removes files or directories.
- **Use Cases:**
  - `rm file_name`: Remove a file.
  - `rm -r dir_name`: Remove a directory and its contents.

## 10. `chmod` (Change File Permissions)

- **Description:** Changes file permissions.
- **Use Cases:**
  - `chmod +x file_name`: Add execute permissions to a file.
  - `chmod u=rw,go=r file_name`: Set specific permissions for the owner and group/others.
  - `chmod -R 755 directory_name`: Recursively set read, write, and execute permissions for the owner and read/execute for group and others.
  - `chmod a=rwx file_name`: Give read, write, and execute permissions to all (owner, group, and others).
  - `chmod g+s directory_name`: Set the group ID on a directory, ensuring that new files inherit the group of the parent directory.

## 11. `echo`

- **Description:** Prints text to the terminal.
- **Use Cases:**
  - `echo 'Hello World'`: Print the specified text.
  - `echo $PATH`: Print the value of the PATH environment variable.

## 12. `head` and `tail`

- **Description:** Display the beginning or end of a file.
- **Use Cases:**
  - `head file_name`: Display the first 10 lines of a file.
  - `tail file_name`: Display the last 10 lines of a file.
  - `head -20 file_name`: Display the first 20 lines of a file.
  - `tail -30 file_name`: Display the last 30 lines of a file.
  - `tail -n +25 file_name | head -5`: Display lines 25 to 30 of a file.

## 13. `wc` (Word Count)

- **Description:** Displays the number of lines, words, and characters in a file.
- **Use Cases:**
  - `wc file_name`: Display the line, word, and character count of a file.

## 14. `grep` (Global Regular Expression Print)

- **Description:** Searches for patterns in files.
- **Use Cases:**
  - `grep "one" file_name`: Search for the pattern "one" in a file.
  - `grep "one" file_name | wc`: Count the occurrences of "one" in a file.
  - `grep "one" file_name | wc -l`: Count the number of lines with "one" in a file.
  - `grep -c "one" file_name`: Count the occurrences of "one" in a file (alternative).
  - `grep -h "one" file_name`: Display matched lines without filenames.
  - `grep -hi "one" file_name`: Case-insensitive search without filenames.
  - `grep -hin "one" file_name`: Case-insensitive search with line numbers and filenames.
  - `grep -hinw "one" file_name`: Case-insensitive whole-word search with line numbers and filenames.
  - `grep -o "one" file_name`: Display only the matched part of lines.
  - `grep -hir "one" dir_name`: Recursively search for "one" in files within a directory.
## 15. `history`
   - **Description:** Displays the command history.
   - **Use Cases:**
     - `history`: Display a list of previously executed commands.
     - `history 10`: Display the last 10 commands from the history.
     - `!3`: Execute the command with history number 3.
     - `history | grep "command"`: Search the command history for a specific command.
     - `!!`: Execute the last command again.

## 16. `sed` (Stream Editor)
   - **Description:** Edits text streams.
   - **Use Cases:**
     - `sed 's/old/new/g' file_name`: Replace all occurrences of 'old' with 'new' in a file.
     - `sed -i 's/old/new/g' file_name`: Edit the file in-place during the substitution.
     - `sed '/pattern/d' file_name`: Delete lines containing a specific pattern.
     - `sed '2,5d' file_name`: Delete lines 2 to 5 from a file.
     - `sed -n '1,5p' file_name`: Print only lines 1 to 5 from a file.
     - `sed 's/\(pattern\)/\1_replacement/' file_name`: Use captured groups in the replacement.

## 17. `awk` (Pattern Scanning and Processing Language)
   - **Description:** Processes and analyzes text files.
   - **Use Cases:**
     - `awk '{print $1}' file_name`: Print the first field of each line in a file.
     - `awk -F: '{print $1, $7}' /etc/passwd`: Print the username and shell from the passwd file (colon-separated).
     - `awk '/pattern/ {print $0}' file_name`: Print lines containing a specific pattern.
     - `awk '{sum += $1} END {print sum}' file_name`: Calculate and print the sum of the values in the first column.
     - `awk '$3 > 50 {print $1, $3}' file_name`: Print the first and third columns for lines where the third column is greater than 50.