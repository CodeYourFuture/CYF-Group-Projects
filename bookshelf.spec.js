/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const books = require('./books.json')

const path = './bookshelf.js';
const file = fs.readFileSync(path, "utf8");

if (file.startsWith('window.bookshelf = ')) {
    require(path)
} else {
  window.bookshelf = eval(`(function(){ ${file}; return { removeBtn, fetchBooks, processBooks, moveUp, moveDown }}())`)
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
    const moveUp = window.bookshelf.moveUp
    const moveDown = window.bookshelf.moveDown
    beforeEach(() => {
      document.body.innerHTML = btnHTML
      window.bookshelf.moveUp = jest.fn()
      window.bookshelf.moveDown = jest.fn()
    })
    afterEach(() => {
      window.bookshelf.moveUp = moveUp
      window.bookshelf.moveDown = moveDown
    })
    it('creates a list of books with move buttons', () => {
      window.bookshelf.processBooks(books)
      const ul = document.getElementsByTagName('ul')[0]
      expect(ul).toBeDefined()
      books.forEach(({ id, title, author }, index) => {
        const li = ul.getElementsByTagName('li')[index]
        expect(li).toBeDefined()
        expect(li.getAttribute('id')).toEqual(id.toString())
        expect(li.textContent).toEqual(`⬆⬇ - ${title} by ${author}`)

        const upBtn = li.getElementsByTagName('button')[0]
        expect(upBtn).toBeDefined()
        expect(upBtn.textContent).toEqual('⬆')

        const downBtn = li.getElementsByTagName('button')[1]
        expect(downBtn).toBeDefined()
        expect(downBtn.textContent).toEqual('⬇')
      })
    })
    describe('[integration test] when the buttons are clicked', () => {
      it('passes the correct ids to the move functions', () => {
        window.bookshelf.processBooks(books)

        const theCatcherInTheRye = document.getElementById('1')
        const toKillAMockingbird = document.getElementById('2')
        theCatcherInTheRye.querySelectorAll('button')[1].click()
        expect(document.querySelector('ul > li')).toEqual(toKillAMockingbird)
        toKillAMockingbird.querySelectorAll('button')[1].click()
        expect(document.querySelector('ul > li')).toEqual(theCatcherInTheRye)
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
  describe('moveUp', () => {
    const div1 = '<div id="1"></div>'
    const div2 = '<div id="2"></div>'
    const div3 = '<div id="3"></div>'
    beforeEach(() => {
      document.body.innerHTML = div1 + div2 + div3
    })
    it('should move the book up', () => {
      window.bookshelf.moveUp('3')
      expect(document.body.innerHTML).toEqual(div1 + div3 + div2)
      window.bookshelf.moveUp('3')
      expect(document.body.innerHTML).toEqual(div3 + div1 + div2)
    })
    describe('when the book is at the top', () => {
      it('should not move it any more', () => {
        window.bookshelf.moveUp('1')
        expect(document.body.innerHTML).toEqual(div1 + div2 + div3)
      })
    })
  })
  describe('moveDown', () => {
    const div1 = '<div id="1"></div>'
    const div2 = '<div id="2"></div>'
    const div3 = '<div id="3"></div>'
    beforeEach(() => {
      document.body.innerHTML = div1 + div2 + div3
    })
    it('should move the book down', () => {
      window.bookshelf.moveDown('1')
      expect(document.body.innerHTML).toEqual(div2 + div1 + div3)
      window.bookshelf.moveDown('1')
      expect(document.body.innerHTML).toEqual(div2 + div3 + div1)
    })
    describe('when the book is at the bottom', () => {
      it('should not move it any more', () => {
        window.bookshelf.moveDown('3')
        expect(document.body.innerHTML).toEqual(div1 + div2 + div3)
      })
    })
  })
})
