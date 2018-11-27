import { Component } from '@angular/core'

@Component({
    selector: 'students',
    template: '<h2>{{getTitle()}} <br> {{getCurrDate()}}</h2>',
})



export class StudentsComponent{
    title = "My list of student\'s";
    today = new Date();

    getTitle(){
        return this.title;
    }

    getCurrDate(){
        return `Today is ${this.today.getDate()}/ ${this.today.getMonth()}/${this.today.getFullYear()}`;
    }

}

