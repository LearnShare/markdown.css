# Markdown

## Blocks

### Paragraphs

Single Line

Multiple
Lines

Line  
Break (with two or more spaces)

### Headings

#### ATX Headings

# h1

## h2

### h3

#### h4

##### h5

###### h6

#### Setext Headings

h1
====

h2
----

### Block Quotes

>Single Line

>Multiple
>Lines

>Multiple
Lines (omit following `>`)

>Line  
>Break (with two or more spaces)

>Nested
>>Content

>Other Markdown Grammars  
>Inline Text: *Emphasis* and **Strong**
>
>List:  
>+ A
>+ B
>
>Code:  
>```css
>body {
>  margin: 0;
>  background-color: #FFF;
>}
>```

### List

#### Ordered List

1. One
2. Two
3. Three

#### Unordered List

+ A
+ B
+ C

#### Nested List

1. One
    1. A
    2. B
        + x
        + y
        + z
    3. C
2. Two
    + A
        1. x
        2. y
        3. z
    + B
    + C
3. Three

#### Task List

- [x] Checked
- [ ] Task

### Definition List

HTML
: HyperText Markup Language

CSS
: Cascading Style Sheets

### Code Blocks

    npm init
    npm install --save bootstrap

```
npm init
npm install --save bootstrap
```

```css
body {
  margin: 0;
  background-color: #FFF;
}
```

### Thematic Break

***
---
___

### Table

name | age
---- | ---
Tag | 28
Mike |  32

| left  | center | right |
| :---- | :----: | ----: |
| aaaaa | bbbbbb | ccccc |
| a     | b      | c     |

## Inlines

### Links

### Inline Link

[Google](https://www.google.com/)

[Google Search](https://www.google.com/ 'Google Search')

### Reference Link

[Google][google-url]

[google-url]: https://www.google.com/

[Google Search][google-search]

[google-search]: https://www.google.com/ 'Google Search'

### Auto Link

<https://www.google.com/>

<learnshare.hjq@gmail.com>

### Images

![small](https://images.unsplash.com/photo-1565714683556-51844c3fdb3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80 "small")

![large][cat-url]

[cat-url]: https://images.unsplash.com/photo-1565714683556-51844c3fdb3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&h=400&q=80 "large"

![404](404 "404")

### Inline Code

Install with `npm`

### Emphasis

*Emphasis* and **Strong**

### Strikethrough

~~Strikethrough~~

### Subscript

H~2~O

### Superscript

29^th^
