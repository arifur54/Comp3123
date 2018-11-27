import{Component} from '@angular/core'
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'students',
    template: '<h2>{{ getTitle() }} <br> {{ getCurrentDate() }}</h2>',
})


export class StudentComponent{
    title = "My List of Students";
    currDate = new Date();

    getTitle(){
        return this.title;
    }

    getCurrentDate(){
        return `The Current Date is ${this.currDate.getDate()}`;
    }
}