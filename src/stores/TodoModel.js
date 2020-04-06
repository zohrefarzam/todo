import { observable, action } from 'mobx'


export default class TodoModel {
   
   @observable store
   @observable title
   @observable completed
   id

    constructor(store,title,id,completed){
     this.store =store
     this.title=title
     this.completed=completed
     this.id=id
   

    }
 
  
  @action
  toggle(){
      this.completed=!this.completed
  }

}
