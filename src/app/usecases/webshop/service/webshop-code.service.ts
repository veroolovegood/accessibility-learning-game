import { BehaviorSubject } from 'rxjs';

export class WebshopCodeService {

  private readonly INITIAL_STYLE = '.label-text{\n' +
    'font-size: 16px;\n' +
    '}\n' +
    '\n' +
    '.navbar-text{\n' +
    'font-size: 16px; \n' +
    '}\n';
  private readonly INITIAL_HTML = "";

  private keywordToPxMap: { [key: string]: number } = {
    'xx-small': 9,   // 0.5625em
    'x-small': 10,   // 0.625em
    'small': 13,     // 0.8125em
    'medium': 16,    // 1em
    'large': 16,     // 1.125em
    'x-large': 24,   // 1.5em
    'xx-large': 32,  // 2em
    // 'smaller' und 'larger' sind kontextabhängig und können hier nicht statisch konvertiert werden.
    // Sie würden im Regex unten einfach ignoriert oder separat behandelt.
  };

  fontSizeIndicator: number = 0;

  currentStyle = this.INITIAL_STYLE;
  cssText: BehaviorSubject<string> = new BehaviorSubject(this.INITIAL_STYLE);
  htmlText: BehaviorSubject<string> = new BehaviorSubject(this.INITIAL_HTML);

  updateCssText(text?: string) {
    let computedText;
    if (text) {
      this.currentStyle = text;
    }
    const textToCompute = text ?? this.currentStyle;
    if (textToCompute.includes('font-size:')) {
      const regex = /font-size:\s*([\d\.]+(?:em|rem|vw|vh|vmin|vmax|%|pt|pc|ch|ex)?|xx-small|x-small|small|medium|large|x-large|xx-large|smaller|larger);/g;
      computedText = textToCompute.replace(regex, (match, originalValue) => {
      if (this.keywordToPxMap.hasOwnProperty(originalValue)) {
        const pxValue = this.keywordToPxMap[originalValue];
        return `font-size: calc(${pxValue}px + (${this.fontSizeIndicator}px));`;
      } else {
        return `font-size: calc(${originalValue} + (${this.fontSizeIndicator}px));`;
      }
      });
    } else {
      computedText = textToCompute.concat(`*{font-size: calc(1em+(${this.fontSizeIndicator}px))}`);
    }
    this.cssText.next(computedText)
  }

  updateHtmlText(text: string) {
    this.htmlText.next(text);
  }

  setFontSizeIndicator(value: number) {
    this.fontSizeIndicator = value;
  }
}
