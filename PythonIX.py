# collection types

l = [item, item2, item3] #list, mutable, elements can be appended
t = (item, item2, item3) #tuple, immutable, cannot add elements onto the end of the tuple
s = {item, item2, item3} #set, mutable, elements can be added
d = {key : pair, key2 : pair2} # dictionary, does weird things like a set does

# lists and tuples are ordered
## set is an unordered list of items
### no index in sets
### no duplicates allowed in a sets -- allowed in lists and tuples
### can use for .. in loops to access all the elements in the set
#### if it's not essential to know the order of a list, use a set
### BUT elements will be shuffled differently every time, there is no concrete order
### this makes lists extremely efficient... more on that later
#### just like.... sooooo much faster
## you can change elements of a tuple but you cannot add or delete them

# Programming style
## simgle spaces on both sides of operators
## one statement per line
## avoid unnessesary code
## newlines to separate code segments
## concise but helpful variable names are key
## good variable names explain code
## hungarian notation
### don't have to know this, example of how variable names make things super confusing
## constant value variables should be ALL_CAPS
## variable names should start with small letters i.e. firstName
## using type information in the name is helpful
## NOT HELPFUL
### single letter names
### vague names
### sequential names
### names that only vary by 

## Documentation and comments
### # one line comment
""" Docstring! """
''' Another docstring! '''
### assumptions you can make: 
#### reader knows basic python and cs
#### reader can read the code
#### do not make the assumption that the reader knows what you were thinking