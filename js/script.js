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

function generateTitleLinks () {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector)
  titleList.innerHTML = ''

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector)

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
