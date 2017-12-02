/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const books = require('./books.json')

const path = './bookshelf.js';
const file = fs.readFileSync(path, "utf8");

if (file.startsWith('window')) {
  require(path)
} else {
  window.bookshelf = eval(`(function(){ ${file}; return { removeBtn, fetchBooks, processBooks }}())`)
}

const initialHTML = document.body.innerHTML
const btnHTML = '<button id="fetch-books-btn">Fetch Books</button>'
const globalFetch = global.fetch
const fetch = jest.fn()

describe('bookshelf', () => {
  describe('init', () => {
    beforeEach(() => {
      global.fetch = fetch
    })
    afterEach(() => {
      global.fetch = globalFetch
    })
    it('creates the Fetch Books button', () => {
      if (initialHTML === '') {
        window.bookshelf.init()
      }
      const btn = document.getElementById('fetch-books-btn')
      expect(btn.textContent).toEqual('Fetch Books')

      btn.click()

      expect(fetch).toBeCalled()
    })
  })
  describe('processBooks', () => {
    beforeEach(() => {
      document.body.innerHTML = btnHTML
    })
    it('creates a list of books', () => {
      window.bookshelf.processBooks(books)
      const ul = document.getElementsByTagName('ul')[0]
      expect(ul).toBeDefined()
      books.forEach(({ id, title, author }, index) => {
        const li = ul.getElementsByTagName('li')[index]
        expect(li).toBeDefined()
        expect(li.getAttribute('id')).toEqual(id.toString())
        expect(li.textContent).toEqual(` - ${title} by ${author}`)
      })
    })
  })
  describe('removeBtn', () => {
    beforeEach(() => {
      document.body.innerHTML = btnHTML
    })
    it('removes the Fetch Books button', () => {
      const btns = document.getElementsByTagName('button')
      window.bookshelf.removeBtn()
      expect(document.body.innerHTML).toEqual('')
    })
  })
})
