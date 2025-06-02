import { BehaviorSubject } from 'rxjs';

export class WebshopCodeService {

  private readonly INITIAL_STYLE = "";
  private readonly INITIAL_HTML = "";

  cssText: BehaviorSubject<string> = new BehaviorSubject(this.INITIAL_STYLE);
  htmlText: BehaviorSubject<string> = new BehaviorSubject(this.INITIAL_HTML);

  updateCssText(text: string){
    this.cssText.next(text);
  }

  updateHtmlText(text: string){
    this.htmlText.next(text);
  }


}
