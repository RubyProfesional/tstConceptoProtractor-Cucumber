let nameInput, greeting
import { protractor, browser } from "protractor";
module.exports = {
  browser.get("http://simplexilimitada.eastus.cloudapp.azure.com/auth/sign-in"),
  init: () => {
    nameInput = element(by.model('yourName'))
    greeting = element(by.binding('yourName'))
  },
  get: string => {
    return browser.get(string)
  },
  setName: name => {
    return nameInput.sendKeys(name)
  },
  getGreetingText: () => {
    return greeting.getText()
  }
}
