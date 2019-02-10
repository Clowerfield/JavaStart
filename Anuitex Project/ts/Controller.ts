class Controller {
  private model: Model;
    constructor(receive: Model) {
          this.model = receive;
    }
  next(){
      return this.model.Step();
  }
  create(Good: string, Article: string, Price: string) {
        this.model.Set((Good + "," + Article + "," + Price), (this.next()).toString());
    }
  ucreate(Good: string, Article: string, Price: string, index: string) {
          this.model.Set((Good + "," + Article + "," + Price), index.toString());
      }
  read(index: number) {
      return (this.model.Get(index.toString())).split(',');
    }
  upgrade(Good: string, Article: string, Price: string, index: number) {
    this.read(index);
    this.ucreate(Good,Article,Price,index.toString());
    }

  delete(index: number) {
        this.model.Drop(index);
    }

}
let rule = new Controller(new Model());
