//Git
//Version control system designed to keep chronological timeline of all your code changes.

//to traverse file system in terminal:
//cd foldername --> moves you down
//cd .. --> moves you up
//ls --> lists what's inside folder
//pwd --> tells your current directory path (print working directory)

//to initiate a git repository:
// git init

//staging files for a commit:
// git status tells you the status of your repository (the main folder you're tracking)
// git add <file_name> OR git add . to add all of the files inside the folder you're in and stage them for a commit

//how to commit:
// git commit -m "your commit message here"

//to view the commit:
// git log
//shows us commit hash, branch name, commit message, and other metadata

// go to github.com and click Create Repository
// name our repository, leave it public, keep all other options deselected
// click create repository
// copy the provided URL
// go back to VSCode
// link your local repository with remote repository by typing:
// git remote add origin <paste the link>
// to push to remote repository:
// git push origin master
