# Advanced Search Ultimate
A webpage/extension that adds easier advanced searching for DuckDuckGo, StartPage, and other alternative search engines.

![image of site](/screenshots/2026-07-04%2020.01.png)

## [Try It](https://ethancubes.github.io/advcanced-search-ultimate/)

## Quickstart
- Firefox browser extension: (not yet added sry)
- Chromium browser extension: (not yet added sry)

## Features
- Generated a search query from user prompts.
- Brings the user to the search engine page with the prompts entered in.

## How it works
Essentially, the user inputs search terms that they want to search in the specified fields. The terms are seperated by space (except for the "specific word or phrase" and the website) and sorted into an object containing arrays. The specified modifiers are added to the elements in the array, and the elements all get converted into a single string. It used to be a query that the user could just copy into any search engine, but the query didn't work well in URLs, so the program now uses percentage encoding.

A prefix is added to the string according to which search engine is selected, and the user is directed to a search page of the selected search engine with the query entered.

I suppose that a user could memory all the search operators instead of using this program, but I beleive that even if someone knows all the search operators, it is more effiecient to use a tool instead of having to manually type them in.

## Credits
- Favicon icon from [Google Fonts Material Symbols and Icons](https://fonts.google.com/icons), converted from .png to .ico with [CloudConvert](https://cloudconvert.com/png-to-ico).
- [Wikipedia](https://en.wikipedia.org/wiki/Percent-encoding) and [arenasbob2024-cell on Dev.to](https://dev.to/arenasbob2024cell/url-encoding-explained-what-20-3a-and-2f-actually-mean-8nh) helped with researching how URLs work.
- [Google's Advanced Search](https://www.google.com/advanced_search) was a good reference. 