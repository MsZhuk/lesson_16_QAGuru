import {BasePage} from './base.pages.js';
import * as allure from "allure-js-commons";

export class ProductPage extends BasePage {
constructor (page) {
    super(page);
    this.currency = this.page.locator('#ec_currency_conversion');
    this.comment = this.page.locator('#comment');
    this.author = this.page.locator('#author');
    this.email = this.page.locator('#email');
    this.submit = this.page.locator('#submit');
    this.manufacturer = this.page.locator('xpath=//*[@id="manufacturer-bug"]/a');

};
 
async changeCurrency () {
    await allure.step("Сменить валюту", async () => {
    await this.currency.click();
    await this.currency.selectOption('EUR');
    });
};
 
async addComment () {
    await allure.step("Добавить комментарий", async () => {
    await this.comment.fill('test');  
    });
};

async addAuthor () {
    await allure.step("Добавить автора", async () => {
    await this.author.fill('test');   
    });
};

async addEmail () {
    await allure.step("Добавить email", async () => {
    await this.email.fill('test@test.com');   
    });
};

async clickSubmit () {
    await allure.step("Нажать отправить", async () => {
    await this.submit.click(); 
    });
};

async clickManufacturer () {
    await allure.step("Перейти на страницу производителя", async () => {
    await this.manufacturer.click();  
    });
};

};
