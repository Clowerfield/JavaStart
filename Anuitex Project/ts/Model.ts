class Model {
private counter: number;
    constructor() {
        this.counter = this.Size();
    }
  Set(list: string, index: string) {
      localStorage.setItem(index, list);
    }
  Get(index: string) {
      return localStorage.getItem(index);
    }
  Drop(index: number){
      localStorage.removeItem(index.toString()) ;
    }
  Size(){
      return localStorage.length;
  }
  Step(){
      return this.counter;
  }
}
let receiver = new Model();
