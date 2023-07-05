'use strict'

function titleClickHandler (event) {
  event.preventDefault()
  const clickedElement = this
  console.log('Link was clicked!')
  console.log(event)

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active')

  for (const activeLink of activeLinks) {
    activeLink.classList.remove('active')
  }

  /* [DONE] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement)

  clickedElement.classList.add('active')

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active')

  for (const activeArticle of activeArticles) {
    activeArticle.classList.remove('active')
  }

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(clickedElement.getAttribute('href'))

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active')
}

const optArticleSelector = '.post'
const optTitleSelector = '.post-title'
const optTitleListSelector = '.titles'
const optArticleTagsSelector = '.post-tags .list'
const optArticleAuthorSelector = '.post-author'

function generateTitleLinks (customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector)
  titleList.innerHTML = ''

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector)

  let html = ''
  for (const article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id')

    /* find the title element */
    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>'
    /* insert link into titleList */
    html = html + linkHTML
  }

  titleList.innerHTML = html

  const links = document.querySelectorAll('.titles a')

  for (const link of links) {
    link.addEventListener('click', titleClickHandler)
  }
}

generateTitleLinks()

function generateTags () {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector)

  /* START LOOP: for every article: */
  for (const article of articles) {
    /* find tags wrapper */
    const titleTag = article.querySelector(optArticleTagsSelector)

    /* make html variable with empty string */
    let html = ''

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags')

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ')

    /* START LOOP: for each tag */
    for (const tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> '
      /* add generated code to html variable */
      html = html + linkHTML
    }

    /* insert HTML of all the links into the tags wrapper */
    titleTag.innerHTML = html

  /* END LOOP: for every article: */
  }
}

generateTags()

function tagClickHandler (event) {
  /* prevent default action for this event */
  event.preventDefault()

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href')
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '')
  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]')

  /* START LOOP: for each active tag link */
  for (const activeTagLink of activeTagLinks) {
  /* remove class active */
    activeTagLink.classList.remove('active')

  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('href')

  /* START LOOP: for each found tag link */
  for (const tagLink of tagLinks) {
  /* add class active */
    tagLink.classList.add('active')

  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]')
}

function addClickListenersToTags () {
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]')

  /* START LOOP: for each link */
  for (const tagLink of tagLinks) {
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler)
  /* END LOOP: for each link */
  }
}
addClickListenersToTags()

function generateAuthors () {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector)

  /* START LOOP: for every article: */
  for (const article of articles) {
    /* find authors wrapper */
    const titleAuthor = article.querySelector(optArticleAuthorSelector)

    /* make html variable with empty string */
    let html = ''

    /* get tags from data-author attribute */
    const author = article.getAttribute('data-author')

    /* generate HTML of the link */
    const linkHTML = '<a href="#author-' + author + '">' + author + '</a>'

    /* add generated code to html variable */
    html = html + linkHTML

    titleAuthor.innerHTML = html
  }
}

generateAuthors()

function authorClickHandler (event) {
  /* prevent default action for this event */
  event.preventDefault()

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href')

  /* make a new constant "author" and extract tag from the "href" constant */
  const author = href.replace('#author-', '')

  /* find all authors links with class active */
  const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]')

  /* START LOOP: for each active Author link */
  for (const activeAuthorLink of activeAuthorLinks) {
    /* remove class active */
    activeAuthorLink.classList.remove('active')

    /* END LOOP: for each active author */
  }

  /* find all author links with "href" attribute equal to the "href" constant */
  const authorLinks = document.querySelectorAll('href')

  /* START LOOP: for each found author link */
  for (const authorLink of authorLinks) {
  /* add class active */
    authorLink.classList.add('active')

    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author ="' + author + '"]')
}

function addClickListenersToAuthors () {
  /* find all links to authors */
  const authorLinks = document.querySelectorAll('a[href^="#author-"]')

  /* START LOOP: for each link */
  for (const authorLink of authorLinks) {
    /* add tagClickHandler as event listener for that link */

    authorLink.addEventListener('click', authorClickHandler)

    /* END LOOP: for each link */
  }
}
addClickListenersToAuthors()
