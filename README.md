# MedoDodo-front

Frontend for todo app Medo Dodo.
Team 6 :
Terhi Salonen & Hanna Sepänmaa

# Description

Medo Dodo has two main views:
-Weekly view for browsing tasks by week number and year
-Category view where tasks can be sorted by the category

When user enters Weekly view it shows the current week by default. The upmost week number and year indicate the week that is currently seen by the user. These numbers change as user presses "Next Week" or "Last Week". Below that is the current date and the current week number. Footer contains buttons for changing the view to Category view and to adding a new task item.

Category view shows all the categories and a maximum of three tasks that are in those categories. User can then enter a category by pressing it and all the tasks in that category can be viewed. If a category has no tasks it can be deleted and a "delete this category" button appears instead of all the tasks. The footer has buttons that lead to Weekly view and to adding a new task.

Tasks can be deleted by pressing "modify task" button and the "delete" button can then be found in footer bar.

To add a new task press "add task" button in footer bar. A new category can also be added while adding a task. In the category dropdown select "new category" option and insert a name for new category. After all the necessary information is in place press save.

# Install

To install locally:

**clone repo:**
git clone [repo url] dirname

**get into react folder:**
cd dirname/medo-dodo

**install dependencies:**
npm install
