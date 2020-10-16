import * as chai from 'chai'
import * as sinon from 'sinon'

type ChaiAndSinonAssert = Chai.Assert & sinon.SinonAssert

const chaiAndSinonAssert = (sinon.assert.expose(chai.assert, {
  prefix: ''
}) as unknown) as ChaiAndSinonAssert

declare module 'mocha' {
  export interface Context {
    assert: ChaiAndSinonAssert
    sinon: sinon.SinonStatic
  }
}

before(function () {
  this.assert = chaiAndSinonAssert
  this.sinon = sinon
})
