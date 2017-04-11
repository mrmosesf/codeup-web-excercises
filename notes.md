# Vocab

markdown, is a language similar to HTML, it's used to describe the structure of a document. The advantage is its syntax is shorter
prompt, the text before the cursor on a terminal.
element, the most basic part of HTML, setup by its enclosing tags
repertoire, the set of numeric representations of characters
ASCII, grouped of 8, represented in binary, creating a byte, from 0 to 255
utf8, most commonly used character set
CDN, content delivery network, this AWS S3 and its buckets
HTML entities, starts with '&' and ends with ';', i.e. &copy;

#Git

VCS, version control system
snapshot, like a picture of the file, called commits
Git needs name and email, date/time, message/comments, identifier (hash)
repository, a folder that stores code and git info (history of code)
Github shares code
git init, initializes a git reposity
git status, outputs the current sate of your repository
git commit, writes files
git add <file name>
-m, adds a comment to a commit in quotations, i.g. "Add notes and other things"
git log, history of changes
--oneline, a simpler way to see changes on log
git remote, a remote git repository
origin, where everyone can get code, i.g. get remote add origin, starts adding code to a remote git
push <location>, changes are sent to repository, i.g. git push origin master, with a confirmation where info is sent
pull <location>, changes are received from reposoitory,
.gitignore, start ignoring files and folders

# Terminal commands

pwd: print working director
cd: change directory
whoami: prints username

# HTML elements

Some attributes are required:
img needs src
meta needs charset

Optionally, you can add id, class

When talking about standards, HTML can:
Valid
Invalid

Syntax can be either:
Well-formed
Malformed
The value of some attributes is optional, for instance,  disabled in input. Quotes are optional unless the value has a space

# Paths

Absolute: starts with a '/'
Relative: begin listing the path

## Servers paths

The root folder of a server usually is not the same as the root folder of the machine
For our projects the root of the server is directory where out HTML pages are.
For instance 'pinnacles_html'. This folder is called the **public directory**

# Protocols

HTTP, Hyper-Text Transfer Protocol

HTTP messages
Request - Client-side - Browser
Response - Server-side - Web server

GET - Read - Download
POST - Write - Sending

Query string

key = value - key-value pair


?search_query=javascript

# CSS

3 different sway to style on HTML

Inline styles, use style HTML attribute directly
Embedded styles, create a style element in the head section of your document
External stylesheets, use a link element to the link the current document to the stylesheet

## CSS selectors

Element, use tag name
ID, unique elements on a page
class, several elements with similar visual appearance

## Specificity

Prioritize the rules based on the different types of selectors

1. ID
2. Class
3. Elements

## Pseudo classes

Represent state on a element, for instance the states of a link (anchor tag)

* link
* visited
* hover
* active

## Properties

* Text properties
* Font properties
    * Serif
    * Sans serif
    * Monotype
* Background properties
* List properties

## Box model

* Everything is in a box in a page
* Defines the position to the elements of a page
* Space -> Size
    * x, y, padding, border -> Size
        * total x = x + padding + border
        * total y = y + padding + border
* Margin, space measured inwards
* Padding, space measured outwards

# Fixed, fluid, and responsive

Fixed was cool back when the base was 960px, but fluid is better and responsive is where it's at
* Using the 'viewport' is a good way to control size for mobile sites, otherwise website will be hardwawre pixels:
    * ' meta name = "viewport" content="width=device-width, initial-scale=1" '
* Media queries can be understood to be conditional stylesheets, that'll load certain styles only if device meets required size

#Warm up

1) Scripting language for web pages with object-oriented, imperatives, and declarative styles.
2) IF gate, written in shorthand for binary statements
3) Similar to a WHILE gate, it checks if a certain value against multiples
4) An explanation of code that could be used, and should be used when abstracting a program
5) false, NaN, 0, "", '', undefined, null
6) All elements, when evaluated as a boolean, has an characteristic of truth, i.e. a non-emptry string will be coerced into true
7) It allows values to be easily changed from a single line of code, and provides explanation why a certain value was used
8) The direction the program is running, i.e. nested loops, while statements, etc.
9) A statement allows you to execute code based on certain conditions. 
10) The comparison of the given variable with a value
11) Unforgiving mode, JavaScript will allow certain errors to pass therefore not throwing any errors, enabling the mode will require explicit use of the language, i.e. var, closing expressions; "use strict"; forces better syntax use
12) Inline with a script tag in HTML, and the JS code within, or a exteranl script with a src reference. 